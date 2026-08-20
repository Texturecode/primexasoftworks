import { useRef } from "react";
import { motion, useInView } from "motion/react";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: "Phone",
    value: "+923139597213",
    href: "tel:+152534-468-854",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "info@primexasoftworks.com",
    href: "mailto:info@primexasoftworks.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "Location",
    value: "Oxford Institute of Higher Studies, Behind District Courts, Batkhela, Khyber Pakhtunkhwa, Pakistan",
    href: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative md:py-24 py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 pb-8 text-center"
        >
          <motion.h6 variants={fadeUp} className="text-brand-600 font-bold tracking-wider uppercase mb-2">
            Contact us
          </motion.h6>
          <motion.h3 variants={fadeUp} className="mb-4 text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
            Get In Touch
          </motion.h3>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto">
            Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6"
        >
          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <div className="p-6 rounded-md shadow-sm bg-white">
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="name"
                      type="text"
                      className="w-full py-2 px-3 border border-gray-200 focus:border-sky-300 rounded h-10 outline-none transition-colors duration-300 text-sm"
                      placeholder="Name :"
                    />
                  </div>
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="email"
                      type="email"
                      className="w-full py-2 px-3 border border-gray-200 focus:border-sky-300 rounded h-10 outline-none transition-colors duration-300 text-sm"
                      placeholder="Email :"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="subject"
                      type="text"
                      className="w-full py-2 px-3 border border-gray-200 focus:border-sky-300 rounded h-10 outline-none transition-colors duration-300 text-sm"
                      placeholder="Subject :"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      name="comments"
                      className="w-full py-2 px-3 border border-gray-200 focus:border-sky-300 rounded h-28 outline-none transition-colors duration-300 text-sm resize-none"
                      placeholder="Message :"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="py-2 px-5 font-normal tracking-wide border align-middle text-base text-center bg-linear-to-r from-brand-500 to-brand-700 hover:brightness-110 border-brand-500 hover:border-brand-600 text-white rounded-md h-11 flex items-center justify-center transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <div className="lg:ms-8 space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-start gap-5"
                >
                  <div className="size-11 shrink-0 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-base font-medium mb-1">{item.label}</h5>
                    {item.href ? (
                      <a href={item.href} className="text-slate-400 hover:text-brand-600 transition-colors duration-300 text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-400 text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Oxford Institute of Higher Studies Map"
            src="https://www.google.com/maps?q=Oxford%20Institute%20of%20Higher%20Studies%2C%20Batkhela%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}