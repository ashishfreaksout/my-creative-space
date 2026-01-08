import { ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Easing } from "framer-motion";

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
    title: "Data Analysis: Hypothesis Testing",
    description: "Comprehensive data analysis project using R and R Markdown, focusing on hypothesis testing to derive insights. Performed data exploration and statistical analysis to identify trends and patterns.",
    technologies: ["R", "R Markdown", "Statistical Analysis", "Data Visualization"],
    github: "https://github.com/ashishfreaksout/Data-Analysis-project",
    featured: true,
  },
  {
    title: "IBM Data Analyst Capstone",
    description: "Comprehensive analysis of programming language and database trends using the 2019 Stack Overflow Developer Survey. Utilized yfinance library to extract stock data for Tesla and GameStop.",
    technologies: ["Python", "IBM Cognos", "yfinance", "Data Analysis"],
    github: "https://github.com/ashishfreaksout1/Final_assignment",
    featured: true,
  },
  {
    title: "Stock Data Analysis Dashboard",
    description: "Financial analysis dashboard leveraging yfinance library to extract and analyze stock data, creating comprehensive financial datasets for trend analysis and visualization.",
    technologies: ["Python", "yfinance", "Pandas", "Matplotlib"],
    github: "https://github.com/ashish",
  },
  {
    title: "Developer Survey Analysis",
    description: "Deep dive into the Stack Overflow Developer Survey data to identify programming language trends, technology adoption patterns, and developer preferences.",
    technologies: ["Python", "Pandas", "Seaborn", "Statistical Analysis"],
    github: "https://github.com/ashish",
  },
  {
    title: "Interactive Data Dashboard",
    description: "Built interactive dashboards using IBM Cognos Analytics to monitor success metrics and drive strategic, data-informed decisions.",
    technologies: ["IBM Cognos", "SQL", "Data Storytelling"],
    github: "https://github.com/ashish",
  },
  {
    title: "ML Classification Project",
    description: "Machine learning project implementing various classification methods using supervised learning techniques with PyTorch and TensorFlow frameworks.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/ashish",
  },
];

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  },
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full p-6 md:p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Folder className="w-10 h-10 text-primary" />
          </motion.div>
          <div className="flex gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="View GitHub repository"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="View live project"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
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
              className="text-xs text-primary/80 font-mono bg-primary/5 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of data science and analysis projects. Each one involved 
              statistical analysis, data visualization, and actionable insights.
            </p>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
