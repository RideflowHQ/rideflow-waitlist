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
  audienceType: z.enum([
    "Logistics Business",
    "Independent Rider",
    "Customer — Notify Me",
  ]),
  companyName: z.string().optional(),
  branchCount: z.string().optional(),
  serviceType: z.enum([
    "Courier",
    "Last-Mile Delivery",
    "Freight & Trucking",
    "Bus & Passenger Logistics",
    "Other",
  ]),
  message: z.string().optional(),
});

type HubFormValues = z.infer<typeof hubFormSchema>;

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
      const response = await fetch("/api/hub", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
        className="mt-8 rounded-[24px] bg-white p-6 md:p-8 flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
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
                <Input type="email" placeholder="you@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="audienceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>I am a *</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="Logistics Business">Logistics Business</option>
                  <option value="Independent Rider">Independent Rider</option>
                  <option value="Customer — Notify Me">Customer — Notify Me</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isBusiness && (
          <>
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
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
                    <Input placeholder="e.g. 3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

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
                  <option value="Last-Mile Delivery">Last-Mile Delivery</option>
                  <option value="Freight & Trucking">Freight & Trucking</option>
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
          className="bg-rideflow-blue text-white hover:bg-blue-700"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : "Join the Hub →"}
        </Button>
        <p className="text-sm text-rideflow-text-light">
          No commitment required. Our team will be in touch to discuss next steps.
        </p>
      </form>
    </Form>
  );
}
