import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";

interface ProjectConclusionProps {
  conclusion: string;
  problem: string;
  currentSlug: string;
}

const ProjectConclusion = ({ conclusion, problem, currentSlug }: ProjectConclusionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Find current project index and get prev/next
  const currentIndex = projectsData.findIndex(p => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <section className="py-16 px-6 bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Problem Statement */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            The Problem
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {problem}
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Conclusion
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {conclusion}
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {prevProject ? (
            <Link to={`/project/${prevProject.slug}`} className="flex-1">
              <Button variant="outline" className="w-full gap-2 justify-start h-auto py-4">
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="text-sm font-medium truncate max-w-[200px]">{prevProject.title}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link to={`/project/${nextProject.slug}`} className="flex-1">
              <Button variant="outline" className="w-full gap-2 justify-end h-auto py-4">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="text-sm font-medium truncate max-w-[200px]">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectConclusion;
