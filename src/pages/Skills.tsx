import { motion } from "framer-motion";
import { Code, Database, Cloud } from "lucide-react";

const skills = [
  { icon: <Code size={32} />, name: "Frontend: React, Tailwind, TypeScript" },
  { icon: <Database size={32} />, name: "Backend: Node.js, Express, SQL" },
  { icon: <Cloud size={32} />, name: "DevOps: Docker, CI/CD, Cloud" },
];

const Skills = () => (
  <motion.div
    className="min-h-screen container py-24"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-konrad-blue">Skills</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {skills.map((s, i) => (
        <div
          key={i}
          className="p-6 rounded border shadow-sm hover:shadow-md transition text-center bg-white"
        >
          <div className="mb-4 text-konrad-blue">{s.icon}</div>
          <p className="font-medium">{s.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
