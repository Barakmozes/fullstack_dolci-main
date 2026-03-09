"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/useLocale";
import type { TranslationKey } from "@/lib/translations";

const valueKeys = [
  { icon: "🌾", titleKey: "about.value1Title", descKey: "about.value1Desc" },
  { icon: "👨‍🍳", titleKey: "about.value2Title", descKey: "about.value2Desc" },
  { icon: "❤️", titleKey: "about.value3Title", descKey: "about.value3Desc" },
  { icon: "🌿", titleKey: "about.value4Title", descKey: "about.value4Desc" },
] as const;

export default function AboutContent() {
  const { t } = useLocale();

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
          <span className="text-gold-400 font-script text-xl">{t("about.since")}</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream-100 mt-2">
            {t("about.heroTitle")}
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
              <span className="text-gold-500 font-script text-lg">{t("about.theBeginning")}</span>
              <h2 className="heading-lg text-chocolate-800 mt-1 mb-6">
                {t("about.dreamTitle")}
              </h2>
              <div className="space-y-4 text-chocolate-600 leading-relaxed">
                <p>{t("about.dreamP1")}</p>
                <p>{t("about.dreamP2")}</p>
                <p>{t("about.dreamP3")}</p>
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
            <span className="text-gold-500 font-script text-lg">{t("about.philosophyLabel")}</span>
            <h2 className="heading-lg text-chocolate-800 mt-1">{t("about.philosophyTitle")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueKeys.map((value, i) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="font-serif font-semibold text-lg text-chocolate-800 mb-2">
                  {t(value.titleKey as TranslationKey)}
                </h3>
                <p className="text-sm text-chocolate-500 leading-relaxed">
                  {t(value.descKey as TranslationKey)}
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
              {t("about.visitTitle")}
            </h2>
            <p className="text-chocolate-600 max-w-lg mx-auto mb-8">
              {t("about.visitSubtitle")}
            </p>
            <div className="bg-white rounded-2xl shadow-soft p-8 max-w-md mx-auto">
              <h3 className="font-serif font-semibold text-chocolate-800 mb-4">
                {t("about.bakeryName")}
              </h3>
              <p className="text-sm text-chocolate-500 mb-2">
                {t("about.address")}
              </p>
              <p className="text-sm text-chocolate-500 mb-4">
                {t("about.phone")}
              </p>
              <div className="text-sm text-chocolate-600 space-y-1">
                <p>{t("about.hoursSunThu")}</p>
                <p>{t("about.hoursFri")}</p>
                <p>{t("about.hoursSat")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
