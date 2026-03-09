"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the DOLCI family!");
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-chocolate-800" />
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/img/big/326390468_173061852101510_8733321482910305452_n.webp')`,
        }}
      />

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 font-script text-xl">Stay Sweet</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-100 mt-2 mb-4">
            Join the DOLCI Family
          </h2>
          <p className="text-cream-300 max-w-md mx-auto mb-8 text-sm">
            Be the first to know about new creations, seasonal specials, and
            exclusive offers. Get 10% off your first order!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-cream-200/20 text-cream-100 placeholder-cream-300/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm"
            />
            <button
              type="submit"
              className="btn-gold px-8 py-3.5 text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-cream-400 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
