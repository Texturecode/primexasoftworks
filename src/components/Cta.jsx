import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ctaBg from "/cta.png";

export const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-24 w-full relative bg-center bg-cover"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 pb-8 text-center"
        >
          <motion.h3
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="mb-4 md:text-3xl text-2xl text-brand-300 tracking-wide font-bold"
          >
            Ready to start your next web project now?
          </motion.h3>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-white/60 max-w-xl tracking-wide mx-auto"
          >
            Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="relative mt-10"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="py-2 px-5 inline-block font-normal tracking-wide border align-middle text-base text-center bg-linear-to-r from-brand-500 to-brand-700 hover:brightness-110 border-brand-500 hover:border-brand-600 text-white rounded-md transition-colors duration-300"
            >
              Get Started !
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}