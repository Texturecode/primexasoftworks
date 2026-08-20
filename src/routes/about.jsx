import { motion } from 'motion/react';
import { createFileRoute } from '@tanstack/react-router';

const stats = [
  { value: '8+', label: 'Years building digital experiences' },
  { value: '120+', label: 'Projects delivered across sectors' },
  { value: '35', label: 'Core specialists across design and engineering' },
  { value: '99%', label: 'Client satisfaction on strategic work' },
];

const values = [
  {
    title: 'Strategy-led delivery',
    text: 'We align product, UX, technology, and business goals before writing a single line of code.',
  },
  {
    title: 'Clear communication',
    text: 'Our teams work in visible sprints and keep stakeholders informed through every milestone.',
  },
  {
    title: 'Quality over shortcuts',
    text: 'We prioritize maintainable systems, thoughtful design, and long-term performance.',
  },
  {
    title: 'Growth mindset',
    text: 'We design with scale in mind so your digital platform keeps improving after launch.',
  },
];

const story = [
  { year: '2017', title: 'PRIMEXA founded', text: 'A small studio began helping early-stage teams ship lean, high-impact digital products.' },
  { year: '2019', title: 'Product design expansion', text: 'We expanded into brand systems, conversion-focused interfaces, and product strategy.' },
  { year: '2022', title: 'Growth across industries', text: 'Our team supported startups, service businesses, and enterprise clients with custom digital systems.' },
  { year: '2025', title: 'A full-stack digital partner', text: 'We now combine design, development, and marketing systems under one collaborative model.' },
];

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-600">About us</p>
            <h1 className="font-outfit text-4xl font-semibold leading-[1.05] text-slate-800 md:text-5xl lg:text-6xl">
              We turn ideas into digital products people trust.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              PRIMEXA SOFTWORKS is a product and design partner helping businesses sharpen their digital presence,
              streamline operations, and create experiences that convert attention into outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#values" className="rounded-md bg-linear-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 hover:brightness-110 transition-all">
                Our values
              </a>
              <a href="#story" className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand-200 hover:text-brand-600 transition-all">
                Our story
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="rounded-3xl bg-slate-900 p-6 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Focus</p>
                  <p className="mt-2 text-2xl font-bold">Growth systems</p>
                </div>
                <div className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-200">Live</div>
              </div>

              <div className="space-y-4">
                {[
                  ['Strategy', '92%'],
                  ['Product design', '88%'],
                  ['Development', '95%'],
                  ['Optimization', '90%'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-brand-400 to-brand-600"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:px-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="font-outfit text-3xl font-semibold text-slate-900">{item.value}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="values" className="mx-auto mt-24 max-w-7xl px-6 md:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Our values</p>
          <h2 className="mt-3 font-outfit text-3xl font-semibold text-slate-900 md:text-4xl">
            Built for long-term trust.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 transition-transform"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-xl text-brand-600 font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto mt-24 max-w-5xl px-6 md:px-0">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Our journey</p>
          <h2 className="mt-3 font-outfit text-3xl font-semibold text-slate-900 md:text-4xl">
            Where we are headed.
          </h2>
        </div>

        <div className="space-y-6">
          {story.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[160px_1fr]"
            >
              <div className="flex items-center justify-center rounded-2xl bg-brand-100 px-4 py-3 text-lg font-black text-brand-700 md:justify-start">
                {item.year}
              </div>
              <div>
                <h3 className="font-outfit text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

