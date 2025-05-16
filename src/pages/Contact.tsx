import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    className="min-h-screen container py-24"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-konrad-blue">Contact Me</h2>
    <form className="max-w-xl space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-3 border rounded h-40"
      />
      <button type="submit" className="bg-konrad-blue text-white px-6 py-3 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
  </motion.section>
);

export default Contact;
