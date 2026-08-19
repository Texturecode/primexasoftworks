import { motion } from 'motion/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Contact</p>
          <h1 className="mt-4 text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">Let’s talk about your next move.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Whether you need a web presence refresh, a product strategy sprint, or a custom digital build, we’d love to understand what you’re trying to create.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
              <a href="mailto:hello@primexasoftworks.com" className="mt-3 block text-lg font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                hello@primexasoftworks.com
              </a>
            </div>
            <div className="rounded-2xl bg-slate-100 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <a href="tel:+923139597213" className="mt-3 block text-lg font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                +92 313 9597213
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
