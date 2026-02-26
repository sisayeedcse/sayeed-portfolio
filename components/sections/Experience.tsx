"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiShoppingCart,
  FiTrendingUp,
  FiSearch,
  FiCode,
  FiDollarSign,
  FiZap,
} from "react-icons/fi";

const experiences = [
  {
    title: "eCommerce Manager & Developer",
    company: "Glowbee Skincare",
    period: "2022 - Present",
    type: "Full-time",
    responsibilities: [
      "Developed and manage high-performance eCommerce platform",
      "Implemented advanced SEO strategies, improving organic traffic by 200%",
      "Optimized website performance, achieving 95+ PageSpeed score",
      "Managed Google Ads & Facebook Ads campaigns with 5x ROI",
      "Integrated secure payment gateways and checkout optimization",
      "Implemented analytics tracking and conversion optimization",
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "SEO", "Google Analytics"],
    icon: FiShoppingCart,
    color: "from-green-600 to-emerald-600",
  },
  {
    title: "Freelance WordPress Developer",
    company: "International Clients",
    period: "2020 - Present",
    type: "Freelance",
    responsibilities: [
      "Delivered 10+ international eCommerce websites from scratch",
      "Specialized in WooCommerce, custom themes, and plugin development",
      "Integrated multiple payment gateways (Stripe, PayPal, etc.)",
      "Implemented comprehensive branding and marketing solutions",
      "Provided ongoing maintenance and performance optimization",
      "Achieved 100% client satisfaction rate",
    ],
    technologies: ["WordPress", "React", "PHP", "MySQL", "API Integration", "Payment Gateways"],
    icon: FiCode,
    color: "from-primary-600 to-blue-600",
  },
  {
    title: "Digital Growth Strategist",
    company: "Various Projects",
    period: "2021 - Present",
    type: "Consultant",
    responsibilities: [
      "Developed data-driven digital marketing strategies",
      "Managed SEO campaigns resulting in top-3 rankings",
      "Implemented Google Tag Manager and Analytics tracking",
      "Created and optimized Facebook & Instagram ad campaigns",
      "Provided conversion rate optimization consulting",
      "Delivered measurable ROI improvements for clients",
    ],
    technologies: ["Google Analytics", "GTM", "Google Ads", "Facebook Ads", "SEO Tools", "Power BI"],
    icon: FiTrendingUp,
    color: "from-purple-600 to-pink-600",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions and driving digital growth
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Animated Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}
              />

              {/* Card Content */}
              <div className="relative glass-card p-6 rounded-2xl h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${exp.color} rounded-xl mb-4 w-fit shadow-lg`}
                >
                  <exp.icon className="w-8 h-8 text-white" />
                </div>

                {/* Type Badge */}
                <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-semibold rounded-full mb-4 w-fit">
                  {exp.type}
                </span>

                {/* Title and Company */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {exp.title}
                </h3>

                <p className="text-purple-400 font-semibold mb-2">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm mb-6">{exp.period}</p>

                {/* Responsibilities */}
                <div className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          hoveredIndex === index
                            ? { opacity: 1, x: 0 }
                            : { opacity: 1, x: 0 }
                        }
                        transition={{ delay: idx * 0.1 }}
                        className="text-gray-400 text-sm flex items-start space-x-2"
                      >
                        <span className="text-primary-400 mt-1 flex-shrink-0">
                          ▹
                        </span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-600 text-primary-400 text-xs rounded-full border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
