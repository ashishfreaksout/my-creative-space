import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/ashishfreaksout", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-160124126/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aashish@horizon.csueastbay.edu", label: "Email" },
  { icon: Phone, href: "tel:+16692431540", label: "Phone" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.a 
            href="#" 
            className="font-display text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            AS
          </motion.a>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "Phone" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            Designed & Built by <span className="text-primary">Me</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
