"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiHeart,
  FiInstagram,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    link: "https://github.com/sisayeedcse",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/sisayeedofficial/",
    color: "hover:text-primary-400",
  },
  {
    name: "Email",
    icon: FiMail,
    link: "mailto:tech.sisayeed@gmail.com",
    color: "hover:text-purple-400",
  },
  {
    name: "Facebook",
    icon: FiFacebook,
    link: "https://www.facebook.com/S.I.Sayeed.official/",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    link: "https://www.instagram.com/s.i.s_sayeed/",
    color: "hover:text-pink-400",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    link: "https://x.com/SISayeed31",
    color: "hover:text-sky-400",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-900 border-t border-dark-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              Sayeed.
            </motion.h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              CSE undergraduate passionate about building scalable digital
              solutions, high-performance eCommerce platforms, and leading tech
              communities in Bangladesh.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`p-3 bg-dark-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                Chattogram, Bangladesh
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <a
                  href="mailto:tech.sisayeed@gmail.com"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  tech.sisayeed@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-sm"
              >
                Open to freelance opportunities
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Sayeed Ibne Saif. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center space-x-2">
            <span>Built with experience and lots of</span>
            <FiHeart className="text-red-500 animate-pulse" />
            <span>love</span>
          </p>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500" />
    </footer>
  );
}
