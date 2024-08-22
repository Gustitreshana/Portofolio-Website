"use client";
import Image from "next/image";

const Projects = () => {
  const handleOpenMasakin = () => {
    window.open("https://masakin-fe.vercel.app/");
  };

  const handleOpenZeroHunger = () => {
    window.open(
      "https://final-projec-git-605a51-christopher-jordan-ian-garcias-projects.vercel.app/"
    );
  };

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center h-screen"
    >
      <div className="md:mt-20">
        <h2 className="text-6xl font-bold text-gray-300">
          My <span className="text-emerald-600">Projects</span>
        </h2>
      </div>

      <div className="flex justify-center items-center gap-10 md:flex-col md:gap-0">
        <div
          className="flex justify-center items-center gap-10 mt-20 cursor-pointer transition-all duration-300 hover:scale-105 md:mt-10 sm:flex-col"
          onClick={handleOpenMasakin}
        >
          <div>
            <Image
              src="/Masakin-landing-page.png"
              alt="Masakin Landing Page"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/Masakin-login.png"
              alt="Masakin Login Page"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/Masakin-home.png"
              alt="Masakin Home Page"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div
          className="mt-20 cursor-pointer transition-all duration-300 hover:scale-105 md:mt-6"
          onClick={handleOpenZeroHunger}
        >
          <Image
            src="/ZeroHunger-landing-page.png"
            alt="ZeroHunger Landing Page"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
