"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const hubFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phoneNumber: z.string()
    .min(7, "Phone number is required")
    .max(11, "Phone number must be at most 11 digits"),
  // Customers now have their own waitlist at /move, so the Hub form only
  // serves the two audiences that can actually be onboarded.
  audienceType: z.enum(["Logistics Business", "Independent Rider"]),
  companyName: z.string().optional(),
  branchCount: z.string().optional(),
  // Optional: only logistics businesses are asked for a service type, so riders
  // are not forced to describe themselves as a freight or bus operation.
  serviceType: z
    .enum([
      "Courier",
      "Last-Mile Delivery",
      "Freight & Trucking",
      "Bus & Passenger Logistics",
      "Other",
    ])
    .optional(),
  message: z.string().optional(),
});

type HubFormValues = z.infer<typeof hubFormSchema>;

const audienceOptions = ["Logistics Business", "Independent Rider"] as const;

export function HubInterestForm() {
  const form = useForm<HubFormValues>({
    resolver: zodResolver(hubFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      audienceType: "Logistics Business",
      companyName: "",
      branchCount: "",
      serviceType: "Courier",
      message: "",
    },
  });

  const audienceType = form.watch("audienceType");
  const isBusiness = audienceType === "Logistics Business";

  async function onSubmit(values: HubFormValues) {
    try {
      // Business-only fields are hidden for riders, so drop them rather than
      // submitting stale defaults that would misdescribe a rider.
      const payload = isBusiness
        ? values
        : {
            ...values,
            companyName: undefined,
            branchCount: undefined,
            serviceType: undefined,
          };

      const response = await fetch("/api/hub", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Thanks! Our team will be in touch to discuss next steps.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 rounded-[20px] bg-body-gray p-6 md:p-8 flex flex-col gap-5"
      >
        {/* Asked first: it decides which fields the rest of the form shows. */}
        <FormField
          control={form.control}
          name="audienceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>I am a *</FormLabel>
              <FormControl>
                <div
                  role="radiogroup"
                  aria-label="I am a"
                  className="flex flex-wrap items-center gap-3"
                >
                  {audienceOptions.map((option) => {
                    const selected = field.value === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => field.onChange(option)}
                        className={`flex items-center gap-2.5 rounded-md bg-white px-[18px] py-2 cursor-pointer transition-colors ${
                          selected
                            ? "border-[1.5px] border-rideflow-blue"
                            : "border border-rideflow-hairline hover:border-rideflow-text-extralight"
                        }`}
                      >
                        <span
                          className={`flex size-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] ${
                            selected
                              ? "border-rideflow-blue"
                              : "border-[#C4C8D4]"
                          }`}
                        >
                          {selected && (
                            <span className="size-[9px] rounded-full bg-rideflow-blue" />
                          )}
                        </span>
                        <span
                          className={`text-[15px] font-medium ${
                            selected
                              ? "text-rideflow-text"
                              : "text-rideflow-text2"
                          }`}
                        >
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
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
        </div>

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl>
                <Input
                  placeholder="08012345678"
                  maxLength={11}
                  className="bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isBusiness && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company name"
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
                name="branchCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Branches</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 3"
                        className="bg-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="Courier">Courier</option>
                      <option value="Last-Mile Delivery">
                        Last-Mile Delivery
                      </option>
                      <option value="Freight & Trucking">
                        Freight & Trucking
                      </option>
                      <option value="Bus & Passenger Logistics">
                        Bus & Passenger Logistics
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us more about your needs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-1 w-max rounded-md bg-rideflow-blue px-[26px] py-[22px] text-base font-semibold text-white hover:bg-blue-700 cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Join the Waitlist →"
          )}
        </Button>
        <p className="text-sm text-rideflow-text-light">
          No commitment required. Our team will be in touch to discuss next steps.
        </p>
      </form>
    </Form>
  );
}
