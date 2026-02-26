"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import {
  SiReact,
  SiWordpress,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, color: "#61DAFB", delay: 0 },
  { Icon: SiWordpress, color: "#21759B", delay: 0.2 },
  { Icon: SiJavascript, color: "#F7DF1E", delay: 0.4 },
  { Icon: SiPython, color: "#3776AB", delay: 0.6 },
  { Icon: SiTypescript, color: "#3178C6", delay: 0.8 },
  { Icon: SiTailwindcss, color: "#06B6D4", delay: 1 },
];

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    gsap.to(blobRef.current, {
      scale: 1.2,
      rotation: 360,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
    >
      {/* Animated Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          ref={blobRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-primary-400 text-lg md:text-xl font-semibold mb-4">
                👋 Hello, I'm
              </p>
              <h1 className="text-hero leading-tight mb-6">
                <span className="gradient-text">Sayeed Ibne Saif</span>
              </h1>
            </motion.div>

            {/* Animated Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold h-20"
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "WordPress Architect",
                  2000,
                  "Digital Growth Strategist",
                  2000,
                  "IEEE CS Leader",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              CSE undergraduate building{" "}
              <span className="text-primary-400 font-semibold">
                scalable digital systems
              </span>
              , high-performance eCommerce platforms, and leading tech
              communities in Chattogram, Bangladesh.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
              >
                <span>View Projects</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button
                onClick={() => handleScroll("#contact")}
                className="flex items-center space-x-2 px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transform transition-all duration-300"
              >
                <FiMail />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  4+
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  10+
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  100%
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center h-[600px]"
          >
            <div className="relative w-full h-full">
              {techIcons.map(({ Icon, color, delay }, index) => {
                const angle = (index * 360) / techIcons.length;
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: delay,
                      }}
                      className="glass-card p-6 rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group"
                      whileHover={{ boxShadow: `0 0 30px ${color}40` }}
                    >
                      <Icon
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                        style={{ color }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <span className="text-white text-4xl font-bold">{ "< >" }</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
