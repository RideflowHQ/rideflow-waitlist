"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MoveWaitlistForm } from "@/components/website/move/waitlist-form";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function useClaimSlot() {
  const [heroEmail, setHeroEmail] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const openedForEmail = useRef("");
  const holdDialogOpen = useRef(false);

  useEffect(() => {
    const email = heroEmail.trim();
    if (!EMAIL_REGEX.test(email) || openedForEmail.current === email) return;

    const timeout = window.setTimeout(() => {
      openedForEmail.current = email;
      setDialogOpen(true);
    }, 2000);

    return () => window.clearTimeout(timeout);
  }, [heroEmail]);

  function openWaitlist() {
    const email = heroEmail.trim();
    if (!EMAIL_REGEX.test(email)) return;
    openedForEmail.current = email;
    setDialogOpen(true);
  }

  function handleSubmitted() {
    holdDialogOpen.current = true;
    setHeroEmail("");
    openedForEmail.current = "";
    setDialogOpen(true);
    window.setTimeout(() => {
      holdDialogOpen.current = false;
    }, 400);
  }

  return {
    heroEmail,
    setHeroEmail,
    dialogOpen,
    setDialogOpen,
    holdDialogOpen,
    openWaitlist,
    handleSubmitted,
  };
}

function ClaimDialog({
  open,
  onOpenChange,
  holdOpen,
  defaultEmail,
  onSubmitted,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  holdOpen: MutableRefObject<boolean>;
  defaultEmail: string;
  onSubmitted: () => void;
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next && holdOpen.current) return;
        onOpenChange(next);
      }}
    >
      <DialogContent
        className="max-h-[85dvh] overflow-y-auto p-4 sm:max-h-[90vh] sm:max-w-[600px]"
        onPointerDownOutside={(event) => {
          if (holdOpen.current) event.preventDefault();
        }}
        onInteractOutside={(event) => {
          if (holdOpen.current) event.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-[-0.03em] text-rideflow-text">
            Claim your slot.
          </DialogTitle>
          <DialogDescription>
            Join the waitlist and get ₦1,000 off your first delivery.
          </DialogDescription>
        </DialogHeader>
        <MoveWaitlistForm
          defaultEmail={defaultEmail}
          onSubmitted={onSubmitted}
        />
      </DialogContent>
    </Dialog>
  );
}

export function ClaimSlotHero() {
  const slot = useClaimSlot();
  const emailReady = EMAIL_REGEX.test(slot.heroEmail.trim());

  return (
    <>
      <div className="mt-2 flex w-full flex-col items-start gap-3 md:mt-4">
        <div className="flex w-full max-w-[560px] flex-row items-center gap-2 sm:gap-3">
          <Input
            type="email"
            value={slot.heroEmail}
            onChange={(event) => slot.setHeroEmail(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                slot.openWaitlist();
              }
            }}
            placeholder="you@company.com"
            className="h-11 min-w-0 flex-1 rounded-xl border-2 border-rideflow-hairline bg-body-gray px-3 text-[15px] text-rideflow-ink-hard shadow-none placeholder:text-rideflow-text-extralight focus-visible:border-rideflow-blue focus-visible:ring-rideflow-blue/25 sm:px-4 md:text-[15px]"
            aria-label="Email"
          />
          <Button
            type="button"
            disabled={!emailReady}
            className="h-11 shrink-0 rounded-xl bg-rideflow-blue px-3 text-[13px] font-semibold text-white hover:bg-blue-700 sm:px-6 sm:text-[15px] disabled:cursor-not-allowed disabled:opacity-40"
            onClick={slot.openWaitlist}
          >
            Claim Your Slot
          </Button>
        </div>
        <p className="text-sm font-medium text-rideflow-text-extralight">
          Join the waitlist and get <span className="font-bold">₦1,000</span>{" "}
          off your first delivery.
        </p>
      </div>
      <ClaimDialog
        open={slot.dialogOpen}
        onOpenChange={slot.setDialogOpen}
        holdOpen={slot.holdDialogOpen}
        defaultEmail={slot.heroEmail.trim()}
        onSubmitted={slot.handleSubmitted}
      />
    </>
  );
}

export function ClaimSlotSection() {
  return (
    <section
      id="claim"
      className="scroll-mt-28 bg-white pt-16 pb-20 md:pt-24 md:pb-26"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-[88px]">
          <div className="w-full shrink-0 lg:w-[520px]">
            <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.035em] text-rideflow-text md:text-[56px]">
              Claim your slot.
            </h2>
            <p className="mt-6 text-sm leading-[1.6] text-rideflow-text-light">
              Join the waitlist and get{" "}
              <span className="font-bold">₦1,000</span> off your first
              delivery.
            </p>
          </div>
          <div className="w-full shrink-0 lg:w-[600px]">
            <MoveWaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
