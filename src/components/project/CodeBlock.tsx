import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CodeSnippet } from "@/data/projects";

interface CodeBlockProps {
  snippets: CodeSnippet[];
}

const SingleCodeBlock = ({ snippet }: { snippet: CodeSnippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-primary uppercase">{snippet.language}</span>
          <span className="text-sm text-muted-foreground">{snippet.title}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 w-8 p-0"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90 leading-relaxed">
          {snippet.code}
        </code>
      </pre>
    </div>
  );
};

const CodeBlock = ({ snippets }: CodeBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!snippets || snippets.length === 0) return null;

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-2xl md:text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Code Highlights
        </motion.h2>

        <div className="space-y-6">
          {snippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SingleCodeBlock snippet={snippet} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeBlock;
