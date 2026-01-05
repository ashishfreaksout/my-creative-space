import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-primary font-mono text-sm mb-4">What's Next?</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          I'm currently open to new opportunities and would love to hear from you. 
          Whether you have a question, a project idea, or just want to say hi, 
          feel free to reach out!
        </p>
        
        {/* CTA Button */}
        <a href="mailto:hello@example.com">
          <Button 
            size="lg" 
            className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Say Hello
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
