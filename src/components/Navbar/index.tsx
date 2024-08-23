"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (menuOpen && target && !target.closest('.dropdown-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-black bg-opacity-80 py-4 px-20 z-10 md:px-5 lg:px-10">
      <div>
        <h1 className="text-2xl font-bold text-emerald-600 glowing-text md:text-xl lg:text-2xl">
          Gusti
        </h1>
      </div>

      <div className="md:hidden">
        <ul className="flex items-center gap-8">
          {["home", "about", "education", "skills", "projects"].map((section) => (
            <li
              key={section}
              className={`text-xl font-bold cursor-pointer transition-all duration-300 md:text-lg ${
                activeSection === section ? "text-emerald-600 underline underline-offset-4" : "hover:text-yellow-600"
              }`}
            >
              <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <button
          className="text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-0 bg-black bg-opacity-80 shadow-lg p-4 md:block dropdown-menu">
          <ul className="flex flex-col items-start gap-4">
            {["home", "about", "education", "skills", "projects"].map((section) => (
              <li
                key={section}
                className={`text-xl font-bold cursor-pointer transition-all duration-300 md:text-lg ${
                  activeSection === section ? "text-emerald-600 underline underline-offset-4" : "hover:text-yellow-600"
                }`}
              >
                <a href={`#${section}`} onClick={() => setMenuOpen(false)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;