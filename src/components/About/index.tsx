import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="h-screen bg-gradient-to-t from-black via-emerald-600 to-black">
      <div className="flex items-center justify-center pt-20">
        <h2 className="text-6xl font-bold text-gray-300">
          About <span className="text-emerald-600">Me</span>
        </h2>
      </div>

      <div className="flex justify-center mt-20">
        <div className="relative w-[300px] h-[300px]">
          <Image
            className="rounded-full object-cover"
            src="/Pas-Foto-Tuxedo-Gusti-BG-Black.png"
            alt="Gusti Treshana Herman"
            fill
            objectPosition="50% 20%"
          />
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <p className="text-xl text-justify max-w-[900px] text-gray-300">
          I am Gusti Treshana Herman, a software engineer with expertise in
          full-stack development, specializing in{" "}
          <span className="text-yellow-6000">JavaScript</span>,{" "}
          <span className="text-yellow-600">TypeScript</span>,{" "}
          <span className="text-yellow-600">React</span>,
          <span className="text-yellow-600">Next.js</span>,{" "}
          <span className="text-yellow-600">Python</span>, and{" "}
          <span className="text-yellow-600">MySQL</span>. I create efficient
          and user-friendly web applications with a focus on quality and
          innovation. With experience as a private pilot and operational
          manager, I bring strong <span className="text-red-500">problem-solving skills</span> and attention to detail
          to my projects. I am committed to leveraging the latest technologies
          to deliver impactful solutions that meet client needs and exceed
          expectations.
        </p>
      </div>
    </div>
  );
};

export default About;