import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import ProjectResults from "@/components/project/ProjectResults";
import CodeBlock from "@/components/project/CodeBlock";
import ProjectConclusion from "@/components/project/ProjectConclusion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="pt-16">
        <ProjectHero project={project} />
        <ProjectConclusion
          conclusion={project.conclusion}
          problem={project.problem}
          currentSlug={project.slug}
        />
        <ProjectTimeline methodology={project.methodology} />
        <ProjectResults
          results={project.results}
          chartData={project.chartData}
          insights={project.insights}
        />
        {project.codeSnippets && <CodeBlock snippets={project.codeSnippets} />}
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;
