import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: "Grow Your Business",
    desc: "Launch campaigns that compound — from first impression to lasting brand equity.",
    shadow: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625v6" />
      </svg>
    ),
    title: "Drive More Sales",
    desc: "Turn visitors into buyers with conversion-focused flows backed by real data.",
    shadow: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
    title: "Handled By Experts",
    desc: "Every campaign is steered by specialists who've been through the full growth cycle.",
    shadow: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Discussion For Ideas",
    desc: "We run structured workshops to surface the insights your team already has.",
    shadow: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
    title: "Increase Conversion",
    desc: "Optimise every touchpoint so more of your traffic becomes revenue.",
    shadow: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Sales Growth Ideas",
    desc: "Concrete playbooks distilled from hundreds of campaigns across industries.",
    shadow: true,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Strategy",
    desc: "We map your market, define positioning, and build a plan with measurable milestones — before a single pixel is designed.",
    side: "left",
  },
  {
    step: "02",
    title: "Development",
    desc: "Our engineers and designers work in lockstep, shipping iteratively so you see real progress every sprint.",
    side: "right",
  },
  {
    step: "03",
    title: "Launch",
    desc: "A coordinated go-live across every channel — with monitoring in place from day one so nothing is left to chance.",
    side: "left",
  },
];

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      options
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref.current]);

  return [ref, inView];
}

function FeatureCard({ icon, title, desc, shadow }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-3xl mt-8 transition-all duration-700 border border-transparent transform will-change-transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        ${shadow ? 'shadow-xl shadow-slate-100' : 'hover:shadow-xl hover:shadow-slate-100 hover:border-slate-50'}`}
    >
      <div className="size-16 bg-brand-100 text-brand-600 rounded-2xl text-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="text-base font-semibold text-slate-800 hover:text-brand-600 transition-colors duration-300"
        >
          {title}
        </a>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed">{desc}</p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 relative after:content-[''] after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ step, title, desc, side, isLast }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const sideTranslate = side === 'left' ? '-translate-x-6' : 'translate-x-6';

  return (
    <div ref={ref} className={`relative flex gap-8 pb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${sideTranslate}`}`}>
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-indigo-200 to-transparent" />
      )}

      {/* Step marker */}
      <div className="flex-shrink-0 size-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-200 z-10">
        {step}
      </div>

      {/* Content */}
      <div className="pt-1 max-w-lg">
        <h5 className="text-slate-800 font-semibold text-lg mb-2">{title}</h5>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-white" id="features">
      <div className="max-w-7xl mx-auto">

        {/* — Features header — */}
        <div className="font-inter md:flex justify-between gap-6 pb-4 items-center">
          <div>
            <p className="text-brand-600 font-semibold uppercase tracking-wider mb-2">
              What We Do
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
              Perfect Solutions For<br />Your Business
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed md:max-w-md">
            Launch your campaign and benefit from our expertise designing and managing conversion-centered experiences that actually move the needle.
          </p>
        </div>

        {/* — Feature cards — */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}