import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center h-screen">
      <div>
        <h2 className="text-6xl font-bold">
          My <span className="text-emerald-600">Projects</span>
        </h2>
      </div>

      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-10 mt-20">
          <Image
            src="/Masakin-landing-page.png"
            alt="Masakin Landing Page"
            width={200}
            height={200}
          />
          <Image
            src="/Masakin-login.png"
            alt="Masakin Login Page"
            width={200}
            height={200}
          />
          <Image
            src="/Masakin-home.png"
            alt="Masakin Home Page"
            width={200}
            height={200}
          />
        </div>

        <div className="mt-20">
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
