"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiUsers, FiAward, FiTarget, FiTrendingUp } from "react-icons/fi";

const leadershipRoles = [
  {
    title: "General Secretary",
    organization: "IEEE Computer Society",
    institution: "Premier University Student Branch",
    period: "2024 - Present",
    description:
      "Leading strategic initiatives, organizing technical workshops, and fostering innovation in the tech community.",
    achievements: [
      "Organized 15+ technical workshops and seminars",
      "Led research paper publication initiatives",
      "Managed executive committee of 20+ members",
      "Increased student participation by 300%",
      "Established partnerships with industry leaders",
    ],
    icon: FiAward,
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Assistant General Secretary",
    organization: "Premier University Computer Club",
    institution: "Premier University, Chattogram",
    period: "2023 - 2024",
    description:
      "Coordinated programming contests, workshops, and student engagement activities.",
    achievements: [
      "Organized inter-university programming contests",
      "Mentored 100+ students in competitive programming",
      "Coordinated hackathons and coding bootcamps",
      "Developed club website and management system",
      "Built strong alumni network",
    ],
    icon: FiUsers,
    color: "from-purple-600 to-pink-600",
  },
];

const impactStats = [
  { value: "500+", label: "Students Impacted", icon: FiUsers },
  { value: "20+", label: "Events Organized", icon: FiTarget },
  { value: "15+", label: "Workshops Conducted", icon: FiTrendingUp },
  { value: "5+", label: "Industry Partners", icon: FiAward },
];

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState(impactStats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const timers = impactStats.map((stat, index) => {
      const targetValue = parseInt(stat.value);
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = targetValue;
            return newCounters;
          });
          clearInterval(timers[index]);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, duration / steps);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isInView]);

  return (
    <section
      id="leadership"
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
          <h2 className="text-section-title gradient-text mb-4">
            Leadership & Activities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering tech communities and driving innovation through leadership
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Animated Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${role.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}
              />

              {/* Card Content */}
              <div className="relative glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${role.color} rounded-xl shadow-lg`}
                  >
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-4 py-2 bg-primary-600/20 text-primary-400 text-sm font-semibold rounded-full">
                    {role.period}
                  </span>
                </div>

                {/* Title and Organization */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {role.title}
                </h3>

                <p className="text-purple-400 font-semibold text-lg mb-2">
                  {role.organization}
                </p>

                <p className="text-gray-400 mb-4">{role.institution}</p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {role.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-primary-400 font-semibold text-lg mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 flex items-start space-x-2"
                      >
                        <span className="text-primary-400 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">
            Leadership Impact
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
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
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {counters[index]}
                  {stat.value.includes("+") && "+"}
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
