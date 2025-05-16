import React, { useEffect } from "react";

// Komponent About
const About = () => (
  <section
    id="about"
    className="bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-bold text-konrad-blue mb-6">About Me</h2>
        <p className="mb-4">
          I'm Konrad Francuz, a passionate programmer and data analyst with
          extensive experience in transforming complex data into actionable
          insights and building robust software solutions.
        </p>
        <p className="mb-6">
          My expertise lies at the intersection of software development and data
          science, where I leverage programming skills to extract, analyze, and
          visualize data to drive informed decision-making.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-lg font-bold">5+ Years</p>
            <p className="text-sm text-gray-600">Experience in programming</p>
          </div>
          <div>
            <p className="text-lg font-bold">50+</p>
            <p className="text-sm text-gray-600">Completed projects</p>
          </div>
          <div>
            <p className="text-lg font-bold">20+</p>
            <p className="text-sm text-gray-600">Satisfied clients</p>
          </div>
          <div>
            <p className="text-lg font-bold">3</p>
            <p className="text-sm text-gray-600">Programming languages</p>
          </div>
        </div>

        <a
          href="/AboutDetails"
          className="inline-flex items-center bg-blue-600 text-white font-medium px-5 py-3 rounded hover:bg-blue-700 transition"
        >
          More About Me <span className="ml-2">→</span>
        </a>
      </div>

      {/* Image */}
      <div className="relative rounded overflow-hidden shadow-lg">
        <img
          src="https://sdacademy.pl/sda-assets/uploads/2021/10/Programista-a-informatyk-s.png"
          alt="Konrad Francuz profile"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-4 right-4 bg-blue-700 text-white text-xs p-3 rounded shadow-md">
          <p className="font-semibold">Programming &amp; Data Analysis</p>
          <p className="text-white/80 text-[0.7rem]">Creating valuable insights</p>
        </div>
      </div>
    </div>
  </section>
);

// Komponent Skills z paskami procentowymi
const skillsData = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Docker", level: 70 },
  { name: "AWS", level: 75 },
];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen bg-gray-100 text-gray-900 py-24 px-6 max-w-5xl mx-auto"
  >
    <h2 className="text-4xl font-bold mb-10 text-konrad-blue">Skills</h2>
    <div className="space-y-6">
      {skillsData.map(({ name, level }) => (
        <div key={name}>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">{name}</span>
            <span>{level}%</span>
          </div>
          <div className="w-full bg-gray-300 rounded h-4">
            <div
              className="bg-konrad-blue h-4 rounded"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Komponent Projects z przykładowymi projektami i tagami
const projectsData = [
  {
    title: "Data Analysis Dashboard",
    description:
      "Interactive dashboard for visualizing and analyzing complex datasets with modern tools.",
    tags: ["Python", "Pandas", "React", "D3.js"],
    image: "https://www.itpt.co.uk/wp-content/uploads/2023/03/Data-Analytics-1.jpg",
    link: "#",
  },
  {
    title: "Machine Learning Prediction Model",
    description:
      "Developed a machine learning model to predict customer behavior based on historic data.",
    tags: ["Python", "Scikit-Learn", "TensorFlow", "Jupyter"],
    image: "https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
    link: "#",
  },
  {
    title: "E-Commerce Analytics Platform",
    description:
      "End-to-end analytics solution for tracking user behavior, sales performance, and more.",
    tags: ["SQL", "Power BI", "Python", "AWS"],
    image: "https://cdn.prod.website-files.com/6748ac0fd3dcf26620bd014f/67f4c807518b99a581eb78d5_21.jpg",
    link: "#",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen bg-white text-gray-900 py-24 px-6 max-w-7xl mx-auto"
  >
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-4xl font-bold text-konrad-blue">Featured Projects</h2>
      <a
        href="/allProjects"
        className="text-konrad-blue hover:underline flex items-center gap-1"
      >
        View All Projects <span>→</span>
      </a>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {projectsData.map(({ title, description, tags, image, link }, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              View Project <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Komponent Contact z przesłanego kodu
const Contact = () => (
  <section
    id="contact"
    className="bg-konrad-blue text-white py-24 px-6 md:px-12 lg:px-20"
  >
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      {/* Lewa część - info kontaktowe */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
        <p className="text-white/90">
          Have a project in mind or need expertise in programming and data
          analysis? I’m ready to help you transform your ideas into reality.
        </p>
        <div className="space-y-2">
          <p>
            <strong>Email</strong>
            <br />
            konradfrancuz@icloud.com
          </p>
          <p>
            <strong>Phone</strong>
            <br />
            +48 795-640-555
          </p>
          <p>
            <strong>Location</strong>
            <br />
            Katowice, Poland
          </p>
        </div>
      </div>

      {/* Prawa część - formularz */}
      <div className="bg-white text-gray-900 p-8 rounded shadow-md">
        <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="w-full p-3 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              className="w-full p-3 rounded border border-gray-300 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

// Komponent stopki
const Footer = () => (
  <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12 text-sm">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-3">
          <span className="text-konrad-blue">KF</span>{" "}
          <span className="text-white">Konrad Francuz</span>
        </h4>
        <p className="text-white/80">
          Programming and data analysis expert delivering high-performance
          solutions and actionable insights.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Services</h4>
        <ul className="space-y-2">
          <li>Software Development</li>
          <li>Data Analysis</li>
          <li>Data Visualization</li>
          <li>Machine Learning</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Contact</h4>
        <ul className="space-y-2">
          <li>Email: konradfrancuz@icloud.com</li>
          <li>Phone: +48 795-640-555</li>
          <li>Location: Katowice, Poland</li>
        </ul>
      </div>
    </div>
    <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-white/70">© 2025 Konrad Francuz. All rights reserved.</p>
      <div className="flex gap-4">
        <a
  href="https://www.linkedin.com/in/konrad-francuz-8b0a48328/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  LinkedIn
</a>

<a
  href="https://github.com/PandQ-bot-code"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  GitHub
</a>
        <a
  href="https://www.instagram.com/pand._.q/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  Instagram
</a>
      </div>
    </div>
  </footer>
);

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return null;
};

const Index = () => {
  return (
    <main>
      <ScrollToHash />
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-konrad-blue via-indigo-700 to-indigo-900 text-white flex flex-col justify-center items-center px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Konrad Francuz</h1>
        <p className="text-xl max-w-xl mb-6 text-white/90">
          I'm an IT Specialist focused on crafting seamless digital experiences
          through modern technologies.
        </p>
        <a
          href="#projects"
          className="bg-white text-konrad-blue px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          See My Work
        </a>
      </section>

      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
