const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", 
  "Python", "PostgreSQL", "Tailwind CSS", "Git"
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a passionate developer who loves building things for the web. 
                My journey in programming started when I discovered the magic of turning 
                ideas into reality through code.
              </p>
              <p>
                I specialize in creating responsive, user-friendly applications with 
                modern technologies. When I'm not coding, you can find me exploring 
                new technologies, contributing to open source, or sharing knowledge 
                with the community.
              </p>
              <p>
                I'm always open to new opportunities and collaborations. Feel free 
                to reach out if you'd like to work together!
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-foreground font-medium mb-4">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative border */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4" />
              
              {/* Main image container */}
              <div className="relative bg-secondary rounded-lg overflow-hidden glow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                      <span className="font-display text-4xl font-bold gradient-text">YN</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
