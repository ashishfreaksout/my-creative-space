import { Mail, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Easing } from "framer-motion";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.p 
          className="text-primary font-mono text-sm mb-4"
          variants={itemVariants}
        >
          What's Next?
        </motion.p>
        <motion.h2 
          className="font-display text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          variants={itemVariants}
        >
          I'm currently pursuing my Master's in Statistics and open to data science 
          opportunities. Whether you have a project idea or just want to connect, 
          feel free to reach out!
        </motion.p>

        {/* Contact Info */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.a 
            href="tel:+16692431540"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-mono">+1-669-243-1540</span>
          </motion.a>
          <motion.div 
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-mono">San Jose, CA</span>
          </motion.div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.a 
            href="mailto:aashish@horizon.csueastbay.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Say Hello
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
