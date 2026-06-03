"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [globalError, setGlobalError] = useState("");

  const validate = () => {
    let isValid = true;
    const newErrors = { fullName: "", email: "", phone: "", message: "" };

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message content is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (globalError) setGlobalError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setGlobalError("");

    try {
      const response = await fetch("https://formspree.io/f/mnjyadrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setForm({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setGlobalError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setGlobalError("Failed to send message. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-green/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-display font-semibold uppercase tracking-widest text-sm mb-3 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-dark-text mb-4"
          >
            We'd Love To Hear From You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-secondary-text leading-relaxed font-light"
          >
            Have inquiries about Empire Rice parboiled bulk distribution, retail, or other grains by-products? Apply below to become a distributor or send us a message.
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              {/* Address Card */}
              <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group items-center">
                <div className="p-3.5 rounded-xl bg-primary-green/10 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-secondary-text leading-relaxed font-light">
                    1075 Joseph Gomwalk Street,<br />
                    Gudu, Abuja,<br />
                    Federal Capital Territory, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group items-center">
                <div className="p-3.5 rounded-xl bg-primary-green/10 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-secondary-text leading-relaxed font-light">
                    <a href="tel:+2349164655254" className="hover:text-primary-green transition-colors">
                      +234 916 465 5254
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group items-center">
                <div className="p-3.5 rounded-xl bg-primary-green/10 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-secondary-text leading-relaxed font-light">
                    <a href="mailto:impact@impactgrains.com" className="hover:text-primary-green transition-colors">
                      impact@impactgrains.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Subtle disclaimer */}
            <div className="p-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 hidden lg:block">
              <p className="text-xs text-secondary-text leading-normal font-light">
                * Distributor inquiries are reviewed within 48 business hours. Ensure valid email and phone details are provided for our team to contact you.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 relative">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-lg shadow-slate-100/50 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="font-display font-semibold text-lg text-dark-text">
                      Distributor Inquiry Form
                    </h3>

                    {globalError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                        {globalError}
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="relative" suppressHydrationWarning>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder=" "
                        value={form.fullName}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={`peer block w-full px-4 py-3.5 border ${
                          errors.fullName ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-primary-green"
                        } rounded-xl bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-transparent`}
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-green peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:-translate-y-1/2"
                      >
                        Full Name
                      </label>
                      {errors.fullName && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.fullName}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="relative" suppressHydrationWarning>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        value={form.email}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={`peer block w-full px-4 py-3.5 border ${
                          errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-primary-green"
                        } rounded-xl bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-transparent`}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-green peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:-translate-y-1/2"
                      >
                        Email Address
                      </label>
                      {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="relative" suppressHydrationWarning>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder=" "
                        value={form.phone}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={`peer block w-full px-4 py-3.5 border ${
                          errors.phone ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-primary-green"
                        } rounded-xl bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-transparent`}
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-green peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:-translate-y-1/2"
                      >
                        Phone Number
                      </label>
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>}
                    </div>

                    {/* Message */}
                    <div className="relative" suppressHydrationWarning>
                      <textarea
                        id="message"
                        name="message"
                        placeholder=" "
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={`peer block w-full px-4 py-3.5 border ${
                          errors.message ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-primary-green"
                        } rounded-xl bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-transparent resize-none`}
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-6 text-sm text-slate-400 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-green peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:-translate-y-1/2"
                      >
                        Your Message
                      </label>
                      {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-green to-secondary-green hover:from-secondary-green hover:to-primary-green text-white font-bold py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-101 active:scale-99 cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-12 px-6"
                  >
                    <div className="p-4 rounded-full bg-light-green text-primary-green mb-6 shadow-md shadow-primary-green/10">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-dark-text mb-4">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-secondary-text leading-relaxed font-light max-w-md mb-8">
                      Thank you for your interest in partnering with Impact Grains. We have successfully received your request, and one of our logistics specialists will contact you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-transform hover:scale-102 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
