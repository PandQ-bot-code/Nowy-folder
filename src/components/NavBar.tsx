import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <span className="text-konrad-blue">KF</span>{" "}
          <span className="text-black">Konrad Francuz</span>
        </a>

        {/* Hamburger */}
        <div className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                className="hover:underline transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              download
              className="bg-konrad-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Off-Canvas */}
      {open && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300">
          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col gap-6 text-lg px-6">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={() => setOpen(false)}
                  className="block hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                download
                className="inline-block mt-4 bg-konrad-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
