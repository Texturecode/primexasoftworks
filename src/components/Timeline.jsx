import designThinking from "/design-thinking.svg";
import coding from "/coding.svg";
import officeDesk from "/office-desk.svg";

const steps = [
  {
    title: "Strategy",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    image: designThinking,
    align: "right",
  },
  {
    title: "Development",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    image: coding,
    align: "left",
  },
  {
    title: "Launch",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
    image: officeDesk,
    align: "right",
  },
];

const Dot = () => (
  <div className="absolute left-4 md:left-1/2 top-6 md:top-0 -translate-x-1/2 md:-translate-y-1/2 z-10 rounded-full border border-dashed border-brand-500 p-1.5 w-7 h-7 bg-white">
    <div className="w-3.5 h-3.5 rounded-full bg-brand-600" />
  </div>
);

export const WorkProcess = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-24 py-16">
      {/* Header */}
      <div className="text-center pb-8">
        <h6 className="text-brand-600 text-base font-semibold uppercase tracking-wider mb-2">
          Work Process
        </h6>
        <h3 className="mb-4 text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
          Digital System For Our Business
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Launch your campaign and benefit from our expertise on designing and managing conversion
          centered Tailwind CSS html page.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-200 md:-translate-x-1/2" />
        {steps.map((step, i) => (
          <div key={step.title} className={`relative ${i > 0 ? "mt-10 md:mt-14" : ""}`}>

            {/* ── MOBILE layout (single column, image left-indented) ── */}
            <div className="flex md:hidden items-start gap-6 pl-12">
              <Dot />
              <div className="flex flex-col gap-3">
                <img src={step.image} className="w-40 h-40 object-contain" alt={step.title} />
                <h5 className="text-lg font-medium">{step.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>

            {/* ── DESKTOP layout (alternating two-column) ── */}
            <div className="hidden md:grid md:grid-cols-2">
              {step.align === "right" ? (
                <>
                  <div className="flex justify-end pe-16">
                    <img src={step.image} className="size-56 lg:size-64 object-contain" alt={step.title} />
                  </div>
                  <Dot />
                  <div className="ps-16">
                    <h5 className="text-lg mb-1 font-medium">{step.title}</h5>
                    <p className="mt-3 text-slate-400 max-w-lg">{step.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="pe-16 text-end">
                    <h5 className="text-lg mb-1 font-medium">{step.title}</h5>
                    <p className="mt-3 text-slate-400 max-w-lg ml-auto">{step.description}</p>
                  </div>
                  <Dot />
                  <div className="flex justify-start ps-16">
                    <img src={step.image} className="size-56 lg:size-64 object-contain" alt={step.title} />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};