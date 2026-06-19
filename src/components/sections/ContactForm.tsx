"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Villa Project",
  "Resort Construction",
  "Renovation",
  "Interior Design",
  "2D & 3D Plans",
  "Site Inspection",
  "Other",
];

const BUDGET_RANGES = [
  { value: "under-30l", label: "Under ₹30 Lakhs" },
  { value: "30l-60l", label: "₹30 – ₹60 Lakhs" },
  { value: "60l-1cr", label: "₹60 Lakhs – ₹1 Crore" },
  { value: "1cr-2cr", label: "₹1 – ₹2 Crore" },
  { value: "above-2cr", label: "Above ₹2 Crore" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      setSubmitted(true);
      toast.success("Your inquiry has been sent! We'll contact you within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={36} className="text-emerald-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-2">Inquiry Received!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Our team will contact you within 24 hours. Thank you for reaching out to Reddy Constructions.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-2">Send an Inquiry</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
        Fill in the details and our team will get back to you within 24 hours with a personalized quote.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Full Name *
            </label>
            <input {...register("name")} className="input-luxury" placeholder="Your full name" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Phone Number *
            </label>
            <input {...register("phone")} className="input-luxury" placeholder="+91 XXXXX XXXXX" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
            Email Address *
          </label>
          <input {...register("email")} type="email" className="input-luxury" placeholder="your@email.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Service Required *
            </label>
            <select {...register("service")} className="input-luxury">
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Project Location *
            </label>
            <input {...register("location")} className="input-luxury" placeholder="Bangalore, Mysore..." />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
            Estimated Budget
          </label>
          <select {...register("budget")} className="input-luxury">
            <option value="">Select budget range (optional)</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
            Your Message *
          </label>
          <textarea
            {...register("message")}
            className="input-luxury resize-none"
            rows={4}
            placeholder="Tell us about your project — plot size, floors, special requirements..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center text-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={15} /> Send Inquiry
            </>
          )}
        </button>
      </form>
    </>
  );
}
