import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import type { Easing } from "framer-motion";

const skills = {
  "Technical": ["Python", "R", "SQL", "PostgreSQL", "MongoDB", "C++", "Java", "JavaScript"],
  "Machine Learning": ["PyTorch", "TensorFlow", "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
  "NLP": ["Language Models", "Semantic Parsing", "Natural Language Generation"],
  "Data Visualization": ["IBM Cognos Analytics", "Matplotlib", "Seaborn", "Data Storytelling"],
  "Analysis": ["Statistical Inference", "Causal Inference", "Hypothesis Testing", "Quantitative Analysis"],
};

const experience = [
  {
    title: "Junior Data Analyst Intern",
    company: "NPower Canada",
    period: "Jan 2024 - Apr 2024",
    highlights: [
      "Data manipulation with Excel, Pandas, NumPy",
      "Built interactive dashboards with IBM Cognos",
      "Capstone: EDA, hypothesis testing, forecasting",
    ]
  },
  {
    title: "IT Support Analyst",
    company: "Nordia Inc.",
    period: "Mar 2022 - Sep 2023",
    highlights: [
      "L1/L2 IT support for hardware, software, OS, network issues",
      "Managed Active Directory, Microsoft 365, device setup",
    ]
  },
  {
    title: "Technical Support Representative",
    company: "Nordia Inc.",
    period: "Jan 2020 - Feb 2022",
    highlights: [
      "Enhanced Layer 2 troubleshooting procedures",
      "Conducted fiber attenuation assessments",
    ]
  },
  {
    title: "IT Faculty",
    company: "Information Point Society",
    period: "Jul 2016 - Jul 2017",
    highlights: [
      "Taught Java, Python, C++",
      "Mentored students on Git, SQL, IDEs",
    ]
  },
];

const education = [
  {
    degree: "Master's, Statistics (Data Science)",
    school: "Cal State University East Bay",
    period: "Sep 2024 - Jun 2026",
    gpa: "3.565"
  },
  {
    degree: "Post-Grad Diploma, Wireless Networking",
    school: "Fleming College",
    period: "Sep 2017 - Jun 2019",
    gpa: "3.6"
  },
  {
    degree: "B.Tech., Electronics & Communication",
    school: "Punjab Technical University",
    period: "Aug 2012 - Jun 2016",
    gpa: "3.0"
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Data Scientist with hands-on experience in statistical analysis, forecasting 
              and causal inference. Skilled at manipulating large datasets, building 
              interactive dashboards, and crafting clear data visualizations to guide 
              strategic decisions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-semibold text-foreground">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div 
                    key={category}
                    className="p-4 bg-card rounded-lg border border-border"
                    whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-primary text-sm font-mono mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <motion.span 
                          key={skill}
                          className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded-md border border-border"
                          whileHover={{ 
                            borderColor: "hsl(var(--primary) / 0.5)", 
                            color: "hsl(var(--primary))",
                            scale: 1.05
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience & Education */}
            <div className="space-y-8">
              {/* Experience */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">Experience</h3>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                      <h4 className="font-medium text-foreground">{exp.title}</h4>
                      <p className="text-primary text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-xs font-mono mb-2">{exp.period}</p>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-card rounded-lg border border-border"
                      whileHover={{ borderColor: "hsl(var(--primary) / 0.5)", x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-medium text-foreground text-sm">{edu.degree}</h4>
                      <p className="text-primary text-sm">{edu.school}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-muted-foreground text-xs font-mono">{edu.period}</p>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">GPA: {edu.gpa}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
