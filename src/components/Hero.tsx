import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="text-muted-foreground text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hi, my name is
        </p>
        
        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">Your Name</span>
        </h1>
        
        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl text-muted-foreground font-medium mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Full Stack Developer
        </h2>
        
        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-balance opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          I build exceptional digital experiences that live on the web. 
          Passionate about creating elegant solutions to complex problems.
        </p>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <a 
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
