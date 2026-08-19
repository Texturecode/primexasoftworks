import { useRef } from "react";
import { motion, useInView } from "motion/react";

const portfolioItems = [
    { id: 1, image: "/portfolio/1.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 2, image: "/portfolio/2.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 3, image: "/portfolio/3.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 4, image: "/portfolio/4.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 5, image: "/portfolio/5.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 6, image: "/portfolio/6.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 7, image: "/portfolio/7.jpg", title: "Mockup Collection", category: "Abstract" },
    { id: 8, image: "/portfolio/8.jpg", title: "Mockup Collection", category: "Abstract" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function PortfolioCard({ image, title, category }) {
    return (
        <motion.div
            variants={itemVariants}
            className="relative rounded-md shadow-sm overflow-hidden group cursor-pointer"
        >
            {/* Image — animate via parent hover */}
            <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 origin-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-colors duration-500 z-0" />

            {/* Camera icon */}
            <div className="absolute z-10 top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a
                    href={image}
                    target="_blank"
                    className="size-9 inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white rounded-full transition-colors duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                </a>
            </div>

            {/* Title & category */}
            <div className="absolute z-10 bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="text-md font-medium text-white hover:text-brand-300 transition-colors duration-300">
                    {title}
                </a>
                <p className="text-slate-200 text-sm mb-0">{category}</p>
            </div>
        </motion.div >
    );
}

export const Portfolio = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section className="relative md:py-24 py-16 bg-gray-50" id="portfolio">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 pb-8 text-center"
                >
                    <h6 className="text-brand-600 font-semibold tracking-wider uppercase mb-2">Portfolio</h6>
                    <h3 className="mb-4 md:text-2xl text-3xl font-bold text-slate-800 leading-snug">Our Works &amp; Projects</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8"
                >
                    {portfolioItems.map((item) => (
                        <PortfolioCard key={item.id} {...item} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}