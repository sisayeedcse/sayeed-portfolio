"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiInstagram } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "tech.sisayeed@gmail.com",
    link: "mailto:tech.sisayeed@gmail.com",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Chattogram, Bangladesh",
    link: null,
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/sisayeedofficial/",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    value: "@sisayeedcsee",
    link: "https://github.com/sisayeedcsee",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    // Check if EmailJS is configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback to mailto if EmailJS is not configured
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:tech.sisayeed@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus({
        type: "success",
        message: "Opening your email client... Please send the message from there.",
      });
      
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 3000);
      return;
    }

    try {
      // EmailJS configuration
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sayeed",
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      
      // Fallback to mailto on error
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      setStatus({
        type: "error",
        message: "Email service temporarily unavailable. Opening your email client as backup...",
      });
      
      setTimeout(() => {
        window.location.href = `mailto:tech.sisayeed@gmail.com?subject=${subject}&body=${body}`;
      }, 2000);
    }

    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);
  };

  return (
    <section
      id="contact"
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
          <h2 className="text-section-title gradient-text mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's talk about your project
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you need a full-scale eCommerce platform,
                WordPress development, or digital marketing strategy, I'm here to
                help bring your vision to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card p-6 rounded-xl group hover:shadow-xl transition-all duration-300"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4"
                    >
                      <div className="p-4 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
                        <p className="text-white font-semibold group-hover:text-primary-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-6 rounded-xl"
            >
              <p className="text-gray-400 leading-relaxed">
                <span className="text-primary-400 font-semibold">
                  Response Time:
                </span>{" "}
                I typically respond within 24 hours. For urgent inquiries, feel
                free to reach out via LinkedIn or Instagram.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.type === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? (
                  <>
                    <div className="spinner border-white border-t-transparent w-5 h-5" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : status.type === "error"
                      ? "bg-red-500/20 text-red-400 border border-red-500/50"
                      : ""
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
