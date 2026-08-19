import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";

const words = ["Business", "Startups", "Marketing"];


export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <section
      className="relative pt-24 pb-16 md:pt-28 md:pb-0 overflow-hidden bg-top bg-cover"
      id="home"
    >
      <div className="absolute inset-0 bg-brand-500/5" />
      <div className="hidden xl:block absolute bottom-40 inset-s-180 w-360 h-140 rotate-115 bg-brand-600 -z-10" />
      <div className="hidden xl:block absolute bottom-96 inset-s-120 w-300 h-40 rotate-115 bg-brand-600/10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="font-semibold font-outfit leading-snug text-4xl sm:text-5xl lg:text-6xl mb-5">
              Providing{" "}
              <span className="text-brand-600">Brilliant</span> Ideas{" "}
              <span className="text-brand-600">for</span> your{" "}
              <span className="inline-block overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    className="text-brand-600 inline-block whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h4>

            <p className="font-inter text-slate-400 text-base sm:text-[17px] max-w-xl mx-auto md:mx-0">
              Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-brand-600 hover:bg-brand-700 border border-brand-600 hover:border-brand-700 text-white focus:ring-[3px] focus:ring-brand-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-colors duration-300"
                href="#contact"
              >
                Get Started
              </motion.a>
            </div>
          </div>

          <div className="relative flex justify-center mt-10 md:mt-0">
            <div className="h-80 sm:h-100 md:h-120 lg:h-140 w-full max-w-md md:max-w-none">
              <img src="/hero.png" className="h-full w-full object-contain" alt="Hero" />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-7 p-4 rounded-md shadow-md bg-white w-44 sm:w-48">
              <h5 className="text-base sm:text-lg font-medium mb-3">Revenue</h5>
              <div className="flex justify-between mt-3 mb-2">
                <span className="text-slate-400 text-sm">Profit</span>
                <span className="text-slate-400 text-sm">84%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-brand-600 h-1.5 rounded-full" style={{ width: "84%" }} />
              </div>
            </div>

            <div className="absolute bottom-6 md:bottom-16 -left-2 md:left-10 p-3 sm:p-4 rounded-md shadow-md bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <img src="/review1.jpg" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 shadow-md" alt="" />
                  <img src="/review2.jpg" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 shadow-md -ml-3" alt="" />
                  <img src="/review3.jpg" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 shadow-md -ml-3" alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-brand-500">
                    <span className="font-medium text-sm sm:text-base text-gray-800">4.6</span>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-medium text-xs sm:text-sm mt-0.5">10K Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};