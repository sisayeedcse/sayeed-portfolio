"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGoogleanalytics,
  SiGoogleads,
  SiFacebook,
  SiJupyter,
  SiGithub,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaChartBar } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillCategories = {
  Programming: [
    { name: "C", icon: SiC, level: 85, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, level: 88, color: "#00599C" },
    { name: "Java", icon: FaJava, level: 80, color: "#007396" },
    { name: "Python", icon: SiPython, level: 85, color: "#3776AB" },
    { name: "PHP", icon: SiPhp, level: 90, color: "#777BB4" },
    { name: "JavaScript", icon: SiJavascript, level: 92, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
  ],
  "Web Development": [
    { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, level: 87, color: "#000000" },
    { name: "WordPress", icon: SiWordpress, level: 95, color: "#21759B" },
    { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, level: 93, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#06B6D4" },
    { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" },
  ],
  "Marketing & SEO": [
    { name: "Google Analytics", icon: SiGoogleanalytics, level: 90, color: "#E37400" },
    { name: "Google Ads", icon: SiGoogleads, level: 88, color: "#4285F4" },
    { name: "Facebook Ads", icon: SiFacebook, level: 85, color: "#1877F2" },
    { name: "SEO", icon: SiGoogleanalytics, level: 92, color: "#0F9D58" },
  ],
  "Tools & Data": [
    { name: "Power BI", icon: FaChartBar, level: 82, color: "#F2C811" },
    { name: "Jupyter", icon: SiJupyter, level: 80, color: "#F37626" },
    { name: "GitHub", icon: SiGithub, level: 90, color: "#181717" },
    { name: "Git", icon: SiGit, level: 88, color: "#F05032" },
    { name: "VS Code", icon: VscCode, level: 95, color: "#007ACC" },
    { name: "Figma", icon: SiFigma, level: 78, color: "#F24E1E" },
  ],
};

type CategoryKey = keyof typeof skillCategories;

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<CategoryKey>("Programming");

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning development, design, and digital strategy
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(skillCategories) as CategoryKey[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/50"
                  : "glass-card text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories[activeTab].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon
                    className="w-8 h-8"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-primary-400 font-bold text-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-white font-semibold text-lg mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-dark-600 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                  }}
                />
              </div>

              {/* Tooltip on Hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                <p className="text-gray-400 text-sm">
                  {skill.level >= 90
                    ? "Expert"
                    : skill.level >= 80
                    ? "Advanced"
                    : skill.level >= 70
                    ? "Intermediate"
                    : "Proficient"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the
              latest technologies. Currently exploring AI/ML, cloud technologies,
              and advanced system design patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
