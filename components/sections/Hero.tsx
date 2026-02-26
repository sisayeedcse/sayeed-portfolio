"use client";

import { useEffect, useRef, useState } from "react";
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
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiGraphql,
  SiFirebase,
  SiRedux,
} from "react-icons/si";

// Inner orbit - faster rotation
const innerOrbit = [
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
];

// Middle orbit - medium rotation
const middleOrbit = [
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiPython, color: "#3776AB", name: "Python" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiPhp, color: "#777BB4", name: "PHP" },
  { Icon: SiWordpress, color: "#21759B", name: "WordPress" },
];

// Outer orbit - slower rotation
const outerOrbit = [
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiMysql, color: "#4479A1", name: "MySQL" },
  { Icon: SiGit, color: "#F05032", name: "Git" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiGraphql, color: "#E10098", name: "GraphQL" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { Icon: SiRedux, color: "#764ABC", name: "Redux" },
];

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

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

          {/* Right Side - Orbital Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
            onMouseMove={handleMouseMove}
          >
            <div className="relative w-[450px] h-[450px]">
              {/* Orbit Rings */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] border border-primary-400/20 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-purple-400/20 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.9 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-pink-400/20 rounded-full"
              />

              {/* Inner Orbit Icons - Fast rotation */}
              {innerOrbit.map(({ Icon, color, name }, index) => {
                const angle = (index * 360) / innerOrbit.length;

                return (
                  <motion.div
                    key={`inner-${index}`}
                    initial={{ opacity: 0, scale: 0, rotate: angle }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: angle + 360,
                    }}
                    transition={{
                      opacity: { delay: 0.2 + index * 0.1, duration: 0.5 },
                      scale: { delay: 0.2 + index * 0.1, duration: 0.5 },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="absolute top-1/2 left-1/2 w-[160px] h-[160px] -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      initial={{ rotate: -angle }}
                      animate={{
                        scale: hoveredIcon === index ? 1.3 : 1,
                        y: [0, -10, 0],
                        rotate: -angle - 360,
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        y: {
                          duration: 2 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                      onHoverStart={() => setHoveredIcon(index)}
                      onHoverEnd={() => setHoveredIcon(null)}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-2.5 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                      style={{
                        boxShadow:
                          hoveredIcon === index
                            ? `0 0 40px ${color}60, 0 0 80px ${color}30`
                            : "none",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-gray-900/90 px-2 py-1 rounded"
                      >
                        {name}
                      </motion.div>
                      {/* Glow pulse effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Middle Orbit Icons - Medium rotation */}
              {middleOrbit.map(({ Icon, color, name }, index) => {
                const angle = (index * 360) / middleOrbit.length;

                return (
                  <motion.div
                    key={`middle-${index}`}
                    initial={{ opacity: 0, scale: 0, rotate: angle }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: angle - 360,
                    }}
                    transition={{
                      opacity: { delay: 0.4 + index * 0.1, duration: 0.5 },
                      scale: { delay: 0.4 + index * 0.1, duration: 0.5 },
                      rotate: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="absolute top-1/2 left-1/2 w-[260px] h-[260px] -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      initial={{ rotate: -angle }}
                      animate={{
                        scale: hoveredIcon === index + 100 ? 1.3 : 1,
                        y: [0, -15, 0],
                        rotate: -angle + 360,
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        y: {
                          duration: 2.5 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                      onHoverStart={() => setHoveredIcon(index + 100)}
                      onHoverEnd={() => setHoveredIcon(null)}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-2.5 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                      style={{
                        boxShadow:
                          hoveredIcon === index + 100
                            ? `0 0 40px ${color}60, 0 0 80px ${color}30`
                            : "none",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-gray-900/90 px-2 py-1 rounded"
                      >
                        {name}
                      </motion.div>
                      {/* Glow pulse effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Outer Orbit Icons - Slow rotation */}
              {outerOrbit.map(({ Icon, color, name }, index) => {
                const angle = (index * 360) / outerOrbit.length;

                return (
                  <motion.div
                    key={`outer-${index}`}
                    initial={{ opacity: 0, scale: 0, rotate: angle }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: angle + 360,
                    }}
                    transition={{
                      opacity: { delay: 0.6 + index * 0.1, duration: 0.5 },
                      scale: { delay: 0.6 + index * 0.1, duration: 0.5 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="absolute top-1/2 left-1/2 w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      initial={{ rotate: -angle }}
                      animate={{
                        scale: hoveredIcon === index + 200 ? 1.3 : 1,
                        y: [0, -20, 0],
                        rotate: -angle - 360,
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        y: {
                          duration: 3 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                      onHoverStart={() => setHoveredIcon(index + 200)}
                      onHoverEnd={() => setHoveredIcon(null)}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-2.5 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                      style={{
                        boxShadow:
                          hoveredIcon === index + 200
                            ? `0 0 40px ${color}60, 0 0 80px ${color}30`
                            : "none",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-gray-900/90 px-2 py-1 rounded"
                      >
                        {name}
                      </motion.div>
                      {/* Glow pulse effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center Circle with Pulse */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="w-28 h-28 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full blur-xl"
                  />
                  <span className="text-white text-2xl font-bold relative z-10">
                    {"< >"}
                  </span>
                </motion.div>
              </motion.div>

              {/* Connection Lines Effect */}
              <svg
                className="absolute inset-0 pointer-events-none"
                style={{ opacity: 0.1 }}
              >
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="80"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="130"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="180"
                  stroke="url(#gradient3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
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
