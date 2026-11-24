import { ImageResponse } from "next/og";

export const alt =
  "Rideflow — Logistics Operations & Rideflow Hubs Marketplace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #0A0F1D 0%, #101E42 58%, #1D4ED8 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "#3B82F6",
              }}
            />
            Rideflow
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              color: "#DBEAFE",
            }}
          >
            www.rideflow.org
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              maxWidth: "960px",
            }}
          >
            Run Logistics Operations. Book Dispatch Riders on Rideflow Hubs.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#CBD5E1",
              maxWidth: "900px",
            }}
          >
            Send a package in Lagos, compare verified courier prices upfront, or
            manage your fleet and dispatch from one platform.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
