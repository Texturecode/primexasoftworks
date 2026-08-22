import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "@tanstack/react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Projects", href: "/projects" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      className={`w-full fixed z-50 transition-all duration-500 px-4 py-4 ${
        scrolled
          ? "top-0 bg-white/85 backdrop-blur-md shadow-[0_0_10px_rgba(15,23,42,0.08)]"
          : "bg-white/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-36">
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30">
            <span className="text-xl font-black leading-none">P</span>
          </div> */}
            <img src="./Primexa.png" alt="Logo" className="h-full w-full object-contain" />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-x-10 font-inter">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                // there is slash in href and pathname is just string
                className={`hover:text-brand-500 tracking-wider transition-colors duration-300 text-sm ${
                  pathname === link.href ? "text-brand-500" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="bg-linear-to-r from-brand-500 to-brand-600 text-white px-5 py-2 rounded-md hover:brightness-110 transition-all duration-300 text-sm shadow-lg shadow-brand-500/25"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-y-1.5 z-50 relative"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-0.5 w-6 bg-gray-800 rounded-full origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-6 bg-gray-800 rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-0.5 w-6 bg-gray-800 rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/5 backdrop-blur-md rounded-xl mt-3 shadow-lg"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
              className="flex flex-col px-6 py-4 gap-y-1"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-slate-700 hover:text-brand-500 tracking-wider transition-colors duration-300 text-sm border-b border-slate-100 last:border-0"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
                }}
                className="pt-2"
              >
                <button className="w-full bg-linear-to-r from-brand-500 to-brand-600 text-white px-5 py-2.5 rounded-md hover:brightness-110 transition-all duration-300 text-sm">
                  Contact Us
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};