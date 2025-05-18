import React from "react";

const AboutDetails = () => (
  <section className="min-h-screen bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-konrad-blue mb-10">More About Me</h1>

    <p className="mb-6">
      I'm Konrad Francuz, an IT specialist who enjoys solving real-world problems
      with technology. With a background in programming, data analysis, and modern web
      development, I transform ideas into efficient, scalable solutions.
    </p>

    {/* Edu*/}
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-konrad-blue mb-4">Education</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Informatyka Stosowana</strong> – WSEI Kraków (2024–2027)
        </li>
        
      </ul>
    </div>

    {/* WExp */}
    <div>
      <h2 className="text-2xl font-semibold text-konrad-blue mb-4">Work Experience</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Frontend Developer</strong> – XYZ Software House (2023–present)  
          <br />
          Working on modern, responsive interfaces using React and Tailwind CSS.
        </li>
        <li>
          <strong>Data Analyst Intern</strong> – ABC Analytics (2022)  
          <br />
          Built dashboards and predictive models for client business data.
        </li>
      </ul>
    </div>
  </section>
);

export default AboutDetails;
