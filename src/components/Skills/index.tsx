import IconSkill from "../IconSkill";

const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-t from-black via-emerald-600 to-black h-screen">
      <div className="flex justify-center items-center pt-20">
        <h2 className="text-6xl font-bold">
          My <span className="text-emerald-600">Skills</span>
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto mt-44">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-10 p-10 sm:flex-col">
            <IconSkill title="Javascript" image={"/JavaScript-logo.png"} />
            <IconSkill title="Typescript" image={"/Typescript-logo.svg"} />
            <IconSkill title="React" image={"/React-logo.png"} />
            <IconSkill title="Next.js" image={"/Nextjs-logo.jpg"} />
            <IconSkill title="Tailwind CSS" image={"/TailwindCSS-logo.jpg"} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-10 p-10">
            <IconSkill title="Python" image={"/Python-logo.png"} />
            <IconSkill title="Node.js" image={"/Nodejs-logo.png"} />
            <IconSkill title="MySQL" image={"/MySQL-logo.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
