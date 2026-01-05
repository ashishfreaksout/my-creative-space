import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A comprehensive web application that solves real-world problems. Built with modern technologies and best practices for optimal performance and user experience.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Project Two",
    description: "An innovative mobile-first platform designed to streamline workflows and enhance productivity for teams of all sizes.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Project Three",
    description: "A creative tool that helps designers and developers collaborate more effectively on projects.",
    technologies: ["Vue.js", "Firebase", "SCSS"],
    github: "https://github.com",
  },
  {
    title: "Project Four",
    description: "An API service that provides real-time data processing capabilities for enterprise applications.",
    technologies: ["Python", "FastAPI", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Five",
    description: "A machine learning project that uses natural language processing to analyze sentiment in text.",
    technologies: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com",
  },
  {
    title: "Project Six",
    description: "A browser extension that enhances productivity by blocking distracting websites during work hours.",
    technologies: ["JavaScript", "Chrome API", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}>
      <div className="h-full p-6 md:p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <Folder className="w-10 h-10 text-primary" />
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="View GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="View live project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects I've built. Each one taught me something new 
            and helped me grow as a developer.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
