import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import type { Easing } from "framer-motion";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

// Skills proficiency data for radar chart
const skillsData = [
  { skill: "Python", A: 95, fullMark: 100 },
  { skill: "SQL", A: 90, fullMark: 100 },
  { skill: "R", A: 85, fullMark: 100 },
  { skill: "ML/AI", A: 88, fullMark: 100 },
  { skill: "Visualization", A: 92, fullMark: 100 },
  { skill: "Statistics", A: 87, fullMark: 100 },
];

// Monthly productivity/contributions data
const contributionsData = [
  { month: "Jan", commits: 45, analysis: 12, models: 3 },
  { month: "Feb", commits: 52, analysis: 18, models: 5 },
  { month: "Mar", commits: 78, analysis: 24, models: 7 },
  { month: "Apr", commits: 65, analysis: 20, models: 4 },
  { month: "May", commits: 89, analysis: 28, models: 8 },
  { month: "Jun", commits: 94, analysis: 32, models: 9 },
];

// Technology usage distribution
const techDistribution = [
  { name: "Python", value: 40, color: "hsl(175, 80%, 50%)" },
  { name: "SQL", value: 25, color: "hsl(200, 80%, 60%)" },
  { name: "R", value: 15, color: "hsl(220, 70%, 55%)" },
  { name: "Spark", value: 12, color: "hsl(280, 65%, 60%)" },
  { name: "Other", value: 8, color: "hsl(0, 0%, 50%)" },
];

// Data pipeline metrics
const pipelineData = [
  { name: "Data Collection", value: 2400, growth: 12 },
  { name: "Processing", value: 1398, growth: 8 },
  { name: "Analysis", value: 9800, growth: 24 },
  { name: "Visualization", value: 3908, growth: 18 },
  { name: "Deployment", value: 4800, growth: 15 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(value * easeOutQuart));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const DataVisualization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="analytics" className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Data in Motion</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse into my data-driven world. Interactive visualizations 
              showcasing skills, contributions, and analytical capabilities.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={itemVariants}
          >
            {[
              { label: "Datasets Analyzed", value: 150, suffix: "+" },
              { label: "ML Models Built", value: 42, suffix: "" },
              { label: "Lines of Code", value: 50, suffix: "K+" },
              { label: "Accuracy Rate", value: 94, suffix: "%" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="p-6 bg-card rounded-lg border border-border text-center"
                whileHover={{ y: -4, borderColor: "hsl(175, 80%, 50%)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills Radar Chart */}
            <motion.div 
              className="p-6 bg-card rounded-lg border border-border"
              variants={itemVariants}
              whileHover={{ borderColor: "hsl(175, 80%, 50%)" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Technical Proficiency</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={skillsData}>
                    <PolarGrid stroke="hsl(0, 0%, 30%)" />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: "hsl(0, 0%, 65%)", fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={{ fill: "hsl(0, 0%, 50%)" }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="hsl(175, 80%, 50%)"
                      fill="hsl(175, 80%, 50%)"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Tech Distribution Pie Chart */}
            <motion.div 
              className="p-6 bg-card rounded-lg border border-border"
              variants={itemVariants}
              whileHover={{ borderColor: "hsl(175, 80%, 50%)" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={techDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {techDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(0, 0%, 10%)", 
                        border: "1px solid hsl(0, 0%, 20%)",
                        borderRadius: "8px"
                      }}
                      itemStyle={{ color: "hsl(0, 0%, 90%)" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {techDistribution.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-xs text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contributions Area Chart */}
            <motion.div 
              className="p-6 bg-card rounded-lg border border-border md:col-span-2"
              variants={itemVariants}
              whileHover={{ borderColor: "hsl(175, 80%, 50%)" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Contribution Activity</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={contributionsData}>
                    <defs>
                      <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAnalysis" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(200, 80%, 60%)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(200, 80%, 60%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(0, 0%, 50%)"
                      tick={{ fill: "hsl(0, 0%, 65%)" }}
                    />
                    <YAxis 
                      stroke="hsl(0, 0%, 50%)"
                      tick={{ fill: "hsl(0, 0%, 65%)" }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(0, 0%, 10%)", 
                        border: "1px solid hsl(0, 0%, 20%)",
                        borderRadius: "8px"
                      }}
                      itemStyle={{ color: "hsl(0, 0%, 90%)" }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="commits" 
                      stroke="hsl(175, 80%, 50%)" 
                      fillOpacity={1} 
                      fill="url(#colorCommits)"
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="analysis" 
                      stroke="hsl(200, 80%, 60%)" 
                      fillOpacity={1} 
                      fill="url(#colorAnalysis)"
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(175,80%,50%)]" />
                  <span className="text-xs text-muted-foreground">Code Commits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(200,80%,60%)]" />
                  <span className="text-xs text-muted-foreground">Analysis Reports</span>
                </div>
              </div>
            </motion.div>

            {/* Pipeline Bar Chart */}
            <motion.div 
              className="p-6 bg-card rounded-lg border border-border md:col-span-2"
              variants={itemVariants}
              whileHover={{ borderColor: "hsl(175, 80%, 50%)" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Data Pipeline Metrics</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pipelineData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                    <XAxis 
                      type="number"
                      stroke="hsl(0, 0%, 50%)"
                      tick={{ fill: "hsl(0, 0%, 65%)" }}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category"
                      stroke="hsl(0, 0%, 50%)"
                      tick={{ fill: "hsl(0, 0%, 65%)" }}
                      width={100}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(0, 0%, 10%)", 
                        border: "1px solid hsl(0, 0%, 20%)",
                        borderRadius: "8px"
                      }}
                      itemStyle={{ color: "hsl(0, 0%, 90%)" }}
                      formatter={(value: number) => [`${value.toLocaleString()} records`, "Processed"]}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="hsl(175, 80%, 50%)"
                      radius={[0, 4, 4, 0]}
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Floating Particles Decoration */}
          <div className="relative mt-12 h-20 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/30"
                style={{
                  left: `${(i * 8) + 4}%`,
                  top: "50%",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + (i * 0.2),
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;
