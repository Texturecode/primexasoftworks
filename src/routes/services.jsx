import { motion } from 'motion/react';
import { createFileRoute } from '@tanstack/react-router';

const services = [
  {
    title: 'Web Design & UX',
    text: 'Brand-first interfaces and product flows tailored to customer behavior and conversion goals.',
    icon: '✦',
  },
  {
    title: 'Custom Development',
    text: 'Fast, scalable builds using modern front-end and back-end tooling to support long-term growth.',
    icon: '⌘',
  },
  {
    title: 'Brand Strategy',
    text: 'Positioning, messaging, and identity systems that help businesses look premium and sound clear.',
    icon: '◎',
  },
  {
    title: 'SEO & Growth',
    text: 'Search visibility and audience acquisition systems designed to increase qualified traffic and revenue.',
    icon: '↗',
  },
  {
    title: 'Digital Products',
    text: 'SaaS, portals, dashboards, and internal tools engineered to simplify processes and deliver value.',
    icon: '▣',
  },
  {
    title: 'Maintenance & Support',
    text: 'Ongoing optimization, monitoring, and product improvements to keep your platform secure and effective.',
    icon: '⚡',
  },
];

const workflow = [
  { step: '01', title: 'Discovery', text: 'We map the challenge, audience, and goals before we define the experience.' },
  { step: '02', title: 'Design', text: 'We shape UX flows, UI direction, and clear brand touchpoints with close collaboration.' },
  { step: '03', title: 'Build', text: 'Our engineers turn approved systems into robust, production-ready products.' },
  { step: '04', title: 'Optimize', text: 'We refine data, retention, and conversion outcomes after launch to keep momentum high.' },
];

export const Route = createFileRoute('/services')({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-white pt-36 pb-20">
      <section className="mx-auto max-w-7xl px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Services</p>
          <h1 className="mt-4 font-outfit text-4xl font-semibold leading-[1.05] text-slate-800 md:text-5xl lg:text-6xl">
            Digital services built for visibility and growth.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            From positioning and design to web build and optimization, we offer end-to-end digital support tailored to ambitious businesses.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-xl font-black text-brand-600">
                {service.icon}
              </div>
              <h3 className="font-outfit text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Process</p>
          <h2 className="mt-3 font-outfit text-3xl font-semibold text-slate-800 md:text-4xl">
            How we work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-600">{item.step}</div>
              <h3 className="font-outfit text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
