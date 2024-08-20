"use client";

import Image from "next/image";
import Button from "@/components/Button";

const Header = () => {

  const handleTalkToMe = () => {
    window.open("https://wa.me/6285710000000");
  };

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1AJOoiLBLLLqVcGSsAly8K_CdIW2z7u48/view?usp=sharing");
  };

  return (
    <div id="home" className="flex justify-around items-center h-screen">
      <div className="flex flex-col justify-center w-1/2 gap-10">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-8xl font-bold">
            Hi, I'm <span className="text-emerald-600 glowing-text">Gusti</span>{" "}
            <span className="glowing-text">Treshana Herman</span>
          </h1>
          <h2 className="text-4xl font-bold text-yellow-600">
            I'm a full stack developer
          </h2>
        </div>
        <p className="text-xl text-justify">
          I have experience in developing web and mobile applications using
          various modern technologies. With expertise in both frontend and
          backend, I can create comprehensive and efficient digital solutions
          for various business needs.
        </p>
        <div className="flex gap-4">
          <Button label="Download CV" variant="primary" onClick={handleDownloadCV} />
          <Button label="Talk to me?" variant="secondary" onClick={handleTalkToMe} />
        </div>

        <div className="flex items-center gap-4">
          <Image
            className="cursor-pointer"
            src="/icon-gmail.png"
            alt="gmail"
            width={50}
            height={50}
            onClick={() => window.open("mailto:gustith2105@gmail.com")}
          />
          <Image
            className="cursor-pointer"
            src="/icon-instagram.png"
            alt="instagram"
            width={50}
            height={50}
            onClick={() => window.open("https://www.instagram.com/gustitreshana/")}
          />
          <Image
            className="cursor-pointer"
            src="/icon-linkedin.png"
            alt="linkedin"
            width={30}
            height={30}
            onClick={() =>
              window.open("https://www.linkedin.com/in/gusti-treshana-herman-094064150/?originalSubdomain=id")
            }
          />
          <Image
            className="cursor-pointer"
            src="/icon-github.png"
            alt="github"
            width={35}
            height={35}
            onClick={() => window.open("https://github.com/Gustitreshana")}
          />
        </div>
      </div>

      <div>
        <Image
          src="/Pas-Foto-Jas-Hitam-Gusti.jpg"
          alt="Profile"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Header;