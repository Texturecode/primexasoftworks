import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const team = [
    { name: "Engr. Yasir Usman", role: "CEO", image: "/team/usman.jpg" },
    { name: "Muhammad Ubaid", role: "CTO", image: "/team/ubaid.png" },
    { name: "Sofia Razaq", role: "Designer", image: "/team/03.jpg" },
    { name: "Micheal Carlo", role: "Designer", image: "/team/04.jpg" },
];

const stats = [
    { value: 40, suffix: "+", label: "Projects" },
    { value: 200, suffix: "+", label: "Clients" },
    { value: 457, suffix: "K", label: "Members" },
    { value: 150, suffix: "+", label: "Employee" },
];

const brands = [
    { name: "Amazon", src: "/assets/images/client/amazon.svg" },
    { name: "Google", src: "/assets/images/client/google.svg" },
    { name: "Lenovo", src: "/assets/images/client/lenovo.svg" },
    { name: "PayPal", src: "/assets/images/client/paypal.svg" },
    { name: "Shopify", src: "/assets/images/client/shopify.svg" },
    { name: "Spotify", src: "/assets/images/client/spotify.svg" },
];

// Social icons
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const TwitterXIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

// Animated counter
function Counter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, value]);

    return (
        <h3 ref={ref} className="font-medium text-3xl mb-2">
            {count}{suffix}
        </h3>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

function TeamCard({ name, role, image }) {
    return (
        <motion.div
            variants={fadeUp}
            className="relative rounded-md shadow-lg overflow-hidden group cursor-pointer"
        >
            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 origin-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-500 z-0" />

            {/* Social icons */}
            <div className="absolute z-10 top-4 right-4 flex flex-col gap-1 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {[FacebookIcon, InstagramIcon, TwitterXIcon].map((Icon, i) => (

                    <a key={i}
                        href="#"
                        className="size-8 inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white rounded-full border border-brand-500 transition-colors duration-300"
                    >
                        <Icon />
                    </a>
                ))}
            </div>

            {/* Name card */}
            <div className="absolute inset-s-4 inset-e-4 bottom-4 bg-white p-4 rounded-md text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="text-sm font-medium hover:text-brand-600 transition-colors duration-300">
                    {name}
                </a>
                <p className="text-slate-400 text-xs font-light mb-0 mt-0.5">{role}</p>
            </div>
        </motion.div>
    );
}

export const Team = () => {
    return (
        <section className="relative pb-16   bg-gray-50" id="team">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="grid grid-cols-1 pb-8 text-center"
                >
                    <motion.h6 variants={fadeUp} className="text-brand-600 font-semibold tracking-wider uppercase mb-2">
                        Our Team
                    </motion.h6>
                    <motion.h3 variants={fadeUp} className="mb-4 md:text-2xl text-3xl font-bold text-slate-800 leading-snug">
                        Creative Minds
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto">
                        Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.
                    </motion.p>
                </motion.div>

                {/* Team grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8"
                >
                    {team.map((member) => (
                        <TeamCard key={member.name} {...member} />
                    ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                >
                    {stats.map((stat) => (
                        <motion.div key={stat.label} variants={fadeUp} className="text-center">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <span className="text-slate-400 text-sm">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Brand logos */}
                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="grid md:grid-cols-6 grid-cols-2 justify-center gap-8 mt-12"
                >
                    {brands.map((brand) => (
                        <motion.div
                            key={brand.name}
                            variants={fadeUp}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            className="mx-auto flex items-center justify-center"
                        >
                            <img src={brand.src} alt={brand.name} className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                        </motion.div>
                    ))}
                </motion.div> */}

            </div>
        </section>
    );
}