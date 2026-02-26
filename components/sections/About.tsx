"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiBriefcase,
  FiCode,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";

const stats = [
  { icon: FiBriefcase, value: "4+", label: "Years Experience" },
  { icon: FiCode, value: "10+", label: "Projects Delivered" },
  { icon: FiUsers, value: "IEEE CS", label: "General Secretary" },
  { icon: FiTrendingUp, value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate software engineer with a proven track record in building
            high-performance digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl animate-gradient opacity-75 blur-xl" />
              
              {/* Image Container */}
              <div className="relative glass-card rounded-2xl overflow-hidden p-2">
                <div className="relative w-full h-full bg-dark-600 rounded-xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dknflcbt1/image/upload/v1772096492/LinkedIn_DP_kuhzbk.png"
                    alt="Sayeed Ibne Saif"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card p-4 rounded-xl"
              >
                <FiCode className="w-8 h-8 text-primary-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl"
              >
                <FiTrendingUp className="w-8 h-8 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <span className="text-primary-400 font-semibold">Sayeed Ibne Saif</span>,
                a passionate CSE undergraduate with over{" "}
                <span className="text-primary-400 font-semibold">4+ years of hands-on experience</span>{" "}
                in software development and digital strategy.
              </p>

              <p>
                Throughout my journey, I've successfully delivered{" "}
                <span className="text-primary-400 font-semibold">10+ international eCommerce projects</span>,
                specializing in high-performance WordPress development, payment gateway integrations,
                and comprehensive digital marketing solutions.
              </p>

              <p>
                Currently, I manage the digital presence of{" "}
                <span className="text-purple-400 font-semibold">Glowbee Skincare</span>,
                where I've implemented advanced SEO strategies, optimized site performance,
                and orchestrated successful Google & Facebook advertising campaigns.
              </p>

              <p>
                As the <span className="text-purple-400 font-semibold">General Secretary of IEEE Computer Society</span>,
                I lead strategic initiatives, organize technical workshops, and foster a thriving
                tech community. I'm also driving the development of{" "}
                <span className="text-primary-400 font-semibold">MaidMatch</span>,
                an innovative platform aimed at revolutionizing the domestic service industry.
              </p>

              <p className="text-primary-400 font-semibold text-xl">
                My mission: Building impactful digital solutions that drive real-world change.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-xl text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
