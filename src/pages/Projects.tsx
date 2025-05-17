import React from "react";

const projects = [
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

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-konrad-blue mb-2">Featured Projects</h2>
            <p className="text-gray-600 max-w-xl">
              Explore some of my recent work in programming and data analysis, showcasing my technical expertise and problem-solving skills.
            </p>
          </div>
          {}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(({ title, description, tags, image, link }, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
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
      </div>
    </section>
  );
};

export default Projects;
