import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen container py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-konrad-blue">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Konrad"
          className="rounded-full w-64 h-64 object-cover"
        />
        <p className="text-lg max-w-xl">
          Hi, I’m Konrad Francuz – an experienced IT specialist passionate about building performant, modern applications and infrastructure. My mission is to solve real-world problems through technology, with a special interest in frontend frameworks, backend logic, and cloud deployment.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
