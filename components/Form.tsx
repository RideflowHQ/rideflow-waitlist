"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Mail, User2 } from "lucide-react";

interface FormProps {
  onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.email || !isValidEmail(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      setStep(2);
      return;
    }

    if (step === 2) {
      if (!formData.name.trim()) {
        toast.error("Please enter your name");
        return;
      }

      setStep(3);
      return;
    }

    try {
      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Thank you for joining Rideflow! We'll notify you when we launch."
      );

      setFormData({ email: "", name: "" });
      setSuccess(true);
      onSuccessChange?.(true);

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: [
            "#e5ff00",
            "#000000",
            "#ffffff",
            "#ff6b6b",
            "#4ecdc4",
            "#45b7d1",
          ],
        });
      }, 100);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ email: "", name: "" });
    setSuccess(false);
    onSuccessChange?.(false);
  };

  return (
    <div className="w-full relative">
      {success ? (
        <motion.div
          className="p-6 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={resetForm}
            className="bg-[#e5ff00] text-black px-6 py-2 rounded-[12] font-semibold hover:bg-opacity-90 transition-all"
            type="button"
          >
            Join with another email
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex relative rounded-2xl w-full"
              >
                <Mail className="absolute left-4 top-[35%] text-rideflow-text-extralight size-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="flex-grow bg-background border border-border text-rideflow-text px-12 py-5 rounded-2xl focus:outline-1 transition-all duration-300"
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  className="absolute  right-0 font-semibold top-0 bottom-0 bg-rideflow-blue flex justify-center items-center cursor-pointer text-white px-5 py-2 m-2 rounded-2xl hover:bg-opacity-90 transition-all disabled:opacity-50"
                  disabled={loading}
                >
                  Continue
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="name-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center relative">
                  <User2 className="absolute left-4 top-[35%] text-rideflow-text-extralight size-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="flex-grow bg-background border border-border text-rideflow-text px-12 py-5 rounded-2xl focus:outline-1 transition-all duration-300"
                    disabled={loading}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute  right-0 font-semibold top-0 bottom-0 bg-rideflow-blue flex justify-center items-center cursor-pointer text-white px-5 py-2 m-2 rounded-2xl hover:bg-opacity-90 transition-all disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Loading spinner</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      <span>Join the waitlist</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
