import { motion } from 'motion/react';
import { createFileRoute } from '@tanstack/react-router';

const projects = [
  {
    title: 'NorthPeak CRM',
    category: 'SaaS Product',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    summary: 'A SaaS dashboard redesign that improved product adoption and customer retention for a B2B sales platform.',
    result: '+42% conversion lift',
  },
  {
    title: 'Horizon Studio',
    category: 'Brand Platform',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    summary: 'A premium identity and web presence for a boutique design studio looking to expand into new markets.',
    result: '2x qualified leads',
  },
  {
    title: 'Aster Labs',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    summary: 'A measurable UX refresh focused on clarity, faster onboarding, and a cleaner product narrative.',
    result: '31% onboarding improvement',
  },
  {
    title: 'Velora Commerce',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    summary: 'A conversion-focused storefront build with a stronger mobile UX and cleaner purchase funnel.',
    result: '+65% mobile sales',
  },
];

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="bg-slate-50 pt-36 pb-20">
      <section className="mx-auto max-w-7xl px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Projects</p>
          <h1 className="mt-4 font-outfit text-4xl font-semibold leading-[1.05] text-slate-800 md:text-5xl lg:text-6xl">
            Selected work across product, brand, and growth.
          </h1>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm"
            >
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    {project.category}
                  </span>
                  <span className="text-sm font-semibold text-brand-600">{project.result}</span>
                </div>
                <h3 className="font-outfit text-2xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

