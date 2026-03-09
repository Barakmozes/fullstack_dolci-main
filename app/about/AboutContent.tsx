"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    icon: "🌾",
    title: "Finest Ingredients",
    description:
      "We source premium ingredients from trusted local and European suppliers — real butter, Belgian chocolate, and seasonal fruits.",
  },
  {
    icon: "👨‍🍳",
    title: "Handcrafted Daily",
    description:
      "Every pastry is made fresh each morning by our skilled artisans, following traditional techniques passed down through generations.",
  },
  {
    icon: "❤️",
    title: "Made with Love",
    description:
      "We believe the secret ingredient is passion. Every creation carries the care and dedication of our team.",
  },
  {
    icon: "🌿",
    title: "Locally Sourced",
    description:
      "We partner with local farmers and producers to bring you the freshest, most sustainable ingredients possible.",
  },
];

export default function AboutContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/big/326598428_542534937825719_6707161673814823660_n.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-chocolate-900/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-gold-400 font-script text-xl">Since 2018</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream-100 mt-2">
            Our Story
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-500 font-script text-lg">The Beginning</span>
              <h2 className="heading-lg text-chocolate-800 mt-1 mb-6">
                A Dream Born from Passion
              </h2>
              <div className="space-y-4 text-chocolate-600 leading-relaxed">
                <p>
                  DOLCI was born from a simple dream: to create a place where the art
                  of pastry-making is celebrated in every bite. Founded in the heart
                  of Tel Aviv, our bakery has become a destination for those who
                  appreciate the finer things in life.
                </p>
                <p>
                  Our head pastry chef trained at some of Europe&apos;s most prestigious
                  patisseries, bringing back centuries of technique and a relentless
                  pursuit of perfection. Every morning, our kitchen comes alive with
                  the aroma of freshly baked croissants, hand-tempered chocolate, and
                  caramelizing sugar.
                </p>
                <p>
                  We don&apos;t just make pastries — we craft experiences. Each creation
                  is designed to evoke emotion, spark joy, and create memories worth
                  savoring.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/img/big/340497879_1357408751710833_5741208736434990899_n.webp"
                alt="DOLCI bakery kitchen"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 font-script text-lg">Our Philosophy</span>
            <h2 className="heading-lg text-chocolate-800 mt-1">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="font-serif font-semibold text-lg text-chocolate-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-chocolate-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-chocolate-800 mb-4">
              Come Visit Us
            </h2>
            <p className="text-chocolate-600 max-w-lg mx-auto mb-8">
              Experience DOLCI in person. Step into our bakery, take in the aromas,
              and let us surprise you with today&apos;s creations.
            </p>
            <div className="bg-white rounded-2xl shadow-soft p-8 max-w-md mx-auto">
              <h3 className="font-serif font-semibold text-chocolate-800 mb-4">
                DOLCI Artisan Bakery
              </h3>
              <p className="text-sm text-chocolate-500 mb-2">
                42 Rothschild Blvd, Tel Aviv
              </p>
              <p className="text-sm text-chocolate-500 mb-4">
                03-555-1234 | hello@dolci.co.il
              </p>
              <div className="text-sm text-chocolate-600 space-y-1">
                <p>Sunday - Thursday: 07:00 - 20:00</p>
                <p>Friday: 07:00 - 14:00</p>
                <p>Saturday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
