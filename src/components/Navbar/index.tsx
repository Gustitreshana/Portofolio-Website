"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 px-20 z-10">
      <div>
        <h1 className="text-2xl font-bold text-emerald-600 glowing-text">
          Gusti
        </h1>
      </div>

      <div>
        <ul className="flex items-center gap-8">
          {["home", "about", "education", "skills", "projects"].map((section) => (
            <li
              key={section}
              className={`text-xl font-bold cursor-pointer transition-all duration-300 ${
                activeSection === section ? "text-emerald-600 underline underline-offset-4" : "hover:text-yellow-600"
              }`}
            >
              <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;