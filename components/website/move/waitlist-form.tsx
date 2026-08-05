"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

const moveWaitlistSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  companyName: z.string().optional(),
});

type MoveWaitlistValues = z.infer<typeof moveWaitlistSchema>;

export function MoveWaitlistForm() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const form = useForm<MoveWaitlistValues>({
    resolver: zodResolver(moveWaitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
    },
  });

  async function onSubmit(values: MoveWaitlistValues) {
    try {
      const response = await fetch("/api/hub", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${values.firstName} ${values.lastName}`.trim(),
          email: values.email,
          // The Hub endpoint requires a phone number; the Move waitlist does not
          // collect one, so send an explicit placeholder rather than failing.
          phoneNumber: "Not provided",
          audienceType: "Vendor — Move Goods",
          companyName: values.companyName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmittedEmail(values.email);
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (submittedEmail) {
    return (
      <div className="rounded-[20px] bg-body-gray p-8 flex flex-col items-center text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-[#EEF1FE]">
          <Check className="size-7 text-rideflow-blue" />
        </div>
        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-rideflow-text">
          You&apos;re on the list.
        </h3>
        <p className="mt-3 text-rideflow-text-light">
          We sent a confirmation to{" "}
          <span className="font-semibold text-rideflow-text">
            {submittedEmail}
          </span>
        </p>
        <div className="mt-8 w-full rounded-2xl border border-rideflow-hairline bg-white p-6 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-rideflow-text-extralight">
            Reserved for you
          </p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-rideflow-text">
            ₦1,000 off
          </p>
          <p className="mt-2 text-sm text-rideflow-text-light">
            Applied to your first delivery, automatically.
          </p>
        </div>
        <p className="mt-6 text-sm text-rideflow-text-light">
          We&apos;ll reach out to you soon.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-[20px] bg-body-gray p-6 md:p-8 flex flex-col gap-[26px]"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Chidi" className="bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Okonkwo" className="bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Okonkwo Trading Co."
                  className="bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mt-2 w-full rounded-md bg-rideflow-blue py-[26px] text-[17px] font-bold tracking-[-0.01em] text-white hover:bg-blue-700 cursor-pointer"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 size-4 animate-spin" />
          )}
          Claim Your Slot
        </Button>
        <p className="text-sm text-rideflow-text-light">
          We&apos;ll reach out to you soon.
        </p>
      </form>
    </Form>
  );
}
