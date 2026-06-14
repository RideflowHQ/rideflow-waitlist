"use client";

import {
  normalizeStatsPayload,
  parseGeneratedAt,
  resolveStatsUrls,
} from "@/lib/stats-adapter";
import type {
  PublicPlatformStats,
  PublicPlatformStatsResponse,
} from "@/lib/types/stats";
import { useCallback, useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const STATS_EVENT = "PLATFORM_STATS_UPDATED";

export function usePlatformStats() {
  const [stats, setStats] = useState<PublicPlatformStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const hasLoadedOnceRef = useRef(false);
  const isSocketConnectedRef = useRef(false);

  const applySnapshot = useCallback((payload: unknown) => {
    const snapshot = normalizeStatsPayload(payload);
    if (!snapshot) return;

    setStats(snapshot);
    setLastUpdated(parseGeneratedAt(snapshot.generatedAt));
    setHasLoadedOnce(true);
    hasLoadedOnceRef.current = true;
    setIsLoading(false);

    if (isSocketConnectedRef.current) {
      setError(null);
    }
  }, []);

  useEffect(() => {
    if (!API_BASE_URL) {
      setError("Stats API is not configured");
      setIsLoading(false);
      return;
    }

    const { restUrl, socketUrl } = resolveStatsUrls(API_BASE_URL);
    let cancelled = false;

    const fetchInitialStats = async () => {
      try {
        const response = await fetch(restUrl);

        if (!response.ok) {
          throw new Error("Unable to load platform stats");
        }

        const json = (await response.json()) as PublicPlatformStatsResponse;

        if (!cancelled) {
          applySnapshot(json.data);
        }
      } catch (err) {
        if (!cancelled && !hasLoadedOnceRef.current) {
          setError(
            err instanceof Error ? err.message : "Unable to load platform stats",
          );
          setIsLoading(false);
        }
      }
    };

    fetchInitialStats();

    const socket: Socket = io(socketUrl, {
      transports: ["websocket", "polling"],
      autoConnect: true,
      reconnection: true,
    });

    const handleConnect = () => {
      isSocketConnectedRef.current = true;
      setError(null);
    };

    const handleStatsUpdate = (payload: unknown) => {
      applySnapshot(payload);
    };

    const handleConnectError = () => {
      isSocketConnectedRef.current = false;

      if (hasLoadedOnceRef.current) {
        setError("Live stats stream disconnected");
        return;
      }

      setError("Unable to connect to live stats");
      setIsLoading(false);
    };

    const handleDisconnect = () => {
      isSocketConnectedRef.current = false;

      if (hasLoadedOnceRef.current) {
        setError("Live stats stream disconnected");
        return;
      }

      setIsLoading(true);
    };

    socket.on("connect", handleConnect);
    socket.on(STATS_EVENT, handleStatsUpdate);
    socket.on("connect_error", handleConnectError);
    socket.on("disconnect", handleDisconnect);

    return () => {
      cancelled = true;
      isSocketConnectedRef.current = false;
      socket.off("connect", handleConnect);
      socket.off(STATS_EVENT, handleStatsUpdate);
      socket.off("connect_error", handleConnectError);
      socket.off("disconnect", handleDisconnect);
      socket.disconnect();
    };
  }, [applySnapshot]);

  return { stats, isLoading, error, lastUpdated, hasLoadedOnce };
}
