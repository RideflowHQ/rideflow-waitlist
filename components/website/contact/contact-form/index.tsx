"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Button } from "@/components/ui/button";
import { contactFormSchema, ContactFormValues } from "./schema";

export const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      console.log(data);
      // Add your form submission logic here
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="py-12 md:py-18 min-h-[80vh] bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-center mb-4 md:mb-6">
          Contact Form
        </h2>
        <div className="bg-[#F1F1F2] rounded-[20px] max-w-200 mx-auto p-4 sm:p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className="text-rideflow-blue">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="bg-white h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email Address{" "}
                        <span className="text-rideflow-blue">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="bg-white h-12"
                        />
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
                      <FormLabel>
                        Phone Number{" "}
                        <span className="text-rideflow-blue">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+234 810 234 5678"
                          {...field}
                          className="bg-white h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here..."
                        {...field}
                        className="bg-white resize-none h-32"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="bg-rideflow-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer"
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
