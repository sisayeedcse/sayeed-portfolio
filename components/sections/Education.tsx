"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";

const educationData = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Premier University, Chattogram",
    period: "2019 - Present",
    semester: "7th Semester",
    details: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Software Engineering",
      "Computer Networking",
      "Database Management Systems",
    ],
    icon: FiBookOpen,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Science Background",
    period: "2017 - 2019",
    semester: "GPA 5.00",
    details: [
      "Perfect Score Achievement",
      "Science Group",
      "Mathematics & Physics Focus",
    ],
    icon: FiAward,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding relative overflow-hidden bg-dark-800/50"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-4">Education</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic journey filled with learning and excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/50 z-10"
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass-card p-8 rounded-xl ml-24 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                } hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex flex-col">
                  <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 text-sm font-semibold rounded-full mb-4 w-fit">
                    {item.period}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {item.degree}
                  </h3>

                  <p className="text-purple-400 font-semibold text-lg mb-2">
                    {item.institution}
                  </p>

                  <p className="text-primary-400 font-medium mb-4">
                    {item.semester}
                  </p>

                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 flex items-start space-x-2"
                      >
                        <span className="text-primary-400 mt-1">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
