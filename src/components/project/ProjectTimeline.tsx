import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

interface ProjectTimelineProps {
  methodology: string[];
}

const ProjectTimeline = ({ methodology }: ProjectTimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-2xl md:text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Methodology & Approach
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline items */}
          <div className="space-y-6">
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                  <p className="text-foreground">
                    <span className="font-semibold text-primary">Step {index + 1}: </span>
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
