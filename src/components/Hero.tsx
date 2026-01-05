import { Github, Linkedin, Mail, ArrowDown, Phone } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/ashishfreaksout", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-160124126/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aashish@horizon.csueastbay.edu", label: "Email" },
  { icon: Phone, href: "tel:+16692431540", label: "Phone" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p 
          className="text-muted-foreground text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>
        
        {/* Name */}
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="gradient-text">Ashish</span>
        </motion.h1>
        
        {/* Title */}
        <motion.h2 
          className="font-display text-2xl md:text-4xl text-muted-foreground font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Data Scientist
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build data-driven solutions with statistical analysis, machine learning, and 
          interactive visualizations. Transforming complex data into actionable insights.
        </motion.p>
        
        {/* Location */}
        <motion.p 
          className="text-primary text-sm font-mono mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          📍 San Jose, CA
        </motion.p>
        
        {/* Social Links */}
        <motion.div 
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label === "Phone" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.a 
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
