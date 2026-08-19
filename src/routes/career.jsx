import { motion } from 'motion/react';
import { createFileRoute } from '@tanstack/react-router';

const roles = [
  {
    title: 'Senior Product Designer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    text: 'Lead UX strategy, prototype interaction flows, and shape customer-facing experiences across our product portfolio.',
  },
  {
    title: 'Frontend Developer',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    text: 'Build responsive interfaces, optimize performance, and collaborate closely with design and product teams.',
  },
  {
    title: 'Marketing Specialist',
    location: 'Remote',
    type: 'Contract',
    text: 'Own campaigns, content direction, and funnel insights to support customers through each stage of the buying journey.',
  },
  {
    title: 'Project Manager',
    location: 'Remote',
    type: 'Full-time',
    text: 'Coordinate delivery across teams, manage milestones, and keep client communication structured and clear.',
  },
];

const benefits = [
  'Flexible work culture',
  'Learning budget and skill growth',
  'Impact-driven product work',
  'Collaborative, international team',
];

export const Route = createFileRoute('/career')({
  component: CareerPage,
});

function CareerPage() {
  return (
    <main className="bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Career</p>
          <h1 className="mt-4 font-outfit text-4xl font-semibold leading-[1.05] text-slate-800 md:text-5xl lg:text-6xl">
            Build what matters with us.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            We’re growing a team of thoughtful builders, strategic thinkers, and creative problem-solvers who care about meaningful work.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-outfit text-2xl font-semibold text-slate-900">{role.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{role.location}</p>
                  </div>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {role.type}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{role.text}</p>
                <button className="mt-6 rounded-md border border-brand-500 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100 transition-colors">
                  Apply now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="rounded-4xl bg-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">Why join</p>
            <h2 className="mt-4 font-outfit text-3xl font-semibold text-white">A culture of clarity and momentum.</h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Open roles</p>
              <p className="mt-3 text-3xl font-black text-white">04</p>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
