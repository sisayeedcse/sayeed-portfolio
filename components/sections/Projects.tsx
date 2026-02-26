"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiShoppingCart, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "Glowbee Skincare",
    description:
      "High-performance eCommerce platform with advanced SEO optimization, payment gateway integration, and comprehensive analytics tracking.",
    longDescription:
      "Complete eCommerce solution featuring custom WordPress theme, WooCommerce integration, advanced SEO strategies achieving top-3 rankings, Google & Facebook Ads management, and performance optimization with 95+ PageSpeed score.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "SEO", "Google Ads"],
    image: "/projects/glowbee.jpg",
    liveLink: "https://glowbeeskincare.com",
    category: "eCommerce",
    featured: true,
    stats: {
      traffic: "+200%",
      performance: "95+",
      roi: "5x",
    },
  },
  {
    title: "MaidMatch Platform",
    description:
      "Revolutionary platform connecting households with domestic service providers, featuring smart matching algorithms and secure payment systems.",
    longDescription:
      "Innovative web application designed to streamline domestic service hiring with features including profile verification, rating systems, booking management, and secure payment processing.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/projects/maidmatch.jpg",
    githubLink: "https://github.com/sisayeedcse/MaidMatch-App",
    category: "Web App",
    featured: true,
    stats: {
      users: "500+",
      satisfaction: "98%",
    },
  },
  {
    title: "International eCommerce Solutions",
    description:
      "Portfolio of 10+ international eCommerce websites with custom themes, payment gateway integrations, and comprehensive branding.",
    longDescription:
      "Delivered complete eCommerce solutions for international clients featuring custom WordPress themes, multiple payment gateway integrations (Stripe, PayPal), multilingual support, and comprehensive SEO optimization.",
    technologies: ["WordPress", "WooCommerce", "Stripe", "PayPal", "Custom PHP"],
    image: "/projects/ecommerce.jpg",
    category: "eCommerce",
    stats: {
      projects: "10+",
      satisfaction: "100%",
    },
  },
  {
    title: "SEO Optimization Case Study",
    description:
      "Comprehensive SEO strategy implementation resulting in 300% organic traffic increase and top-3 rankings for competitive keywords.",
    longDescription:
      "End-to-end SEO campaign including technical optimization, content strategy, link building, and local SEO, resulting in dramatic improvements in search rankings and organic traffic.",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "GTM", "Schema Markup"],
    image: "/projects/seo.jpg",
    category: "Digital Marketing",
    stats: {
      traffic: "+300%",
      keywords: "50+",
    },
  },
  {
    title: "Brand Identity & Marketing",
    description:
      "Complete branding and digital marketing campaigns for multiple businesses, including logo design, social media strategy, and ad management.",
    longDescription:
      "Holistic brand development including visual identity, social media presence, content strategy, and performance marketing across Google and Facebook platforms.",
    technologies: ["Figma", "Adobe Suite", "Google Ads", "Facebook Ads", "Analytics"],
    image: "/projects/branding.jpg",
    category: "Branding",
    stats: {
      clients: "15+",
      roi: "4x",
    },
  },
  {
    title: "Performance Analytics Dashboard",
    description:
      "Custom analytics dashboard using Power BI for comprehensive business intelligence and data visualization.",
    longDescription:
      "Interactive dashboard providing real-time insights into business metrics, customer behavior, sales trends, and marketing performance with automated reporting.",
    technologies: ["Power BI", "Python", "SQL", "Google Analytics API", "Data Modeling"],
    image: "/projects/analytics.jpg",
    category: "Data Analytics",
    stats: {
      metrics: "100+",
      automation: "90%",
    },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative overflow-hidden bg-dark-800/50"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and successful client deliverables
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card Container */}
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                {/* Image/Thumbnail */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary-600/20 to-purple-600/20 overflow-hidden">
                  {/* Placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                    {project.category === "eCommerce" && <FiShoppingCart />}
                    {project.category === "Digital Marketing" && <FiTrendingUp />}
                    {project.category !== "eCommerce" && project.category !== "Digital Marketing" && "🚀"}
                  </div>
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent flex items-center justify-center space-x-4"
                  >
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary-600 rounded-full hover:bg-primary-500 transition-colors duration-300"
                      >
                        <FiExternalLink className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-600 rounded-full hover:bg-dark-500 transition-colors duration-300"
                      >
                        <FiGithub className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-dark-900/80 backdrop-blur-sm text-primary-400 text-xs font-semibold rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="px-3 py-1 bg-primary-600/20 rounded-full"
                        >
                          <span className="text-primary-400 font-semibold text-sm">
                            {value}
                          </span>
                          <span className="text-gray-400 text-xs ml-1">
                            {key}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark-600 text-primary-400 text-xs rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Want to see more? Check out my{" "}
            <a
              href="https://github.com/sisayeedcse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-semibold"
            >
              GitHub profile
            </a>{" "}
            for additional projects and contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
