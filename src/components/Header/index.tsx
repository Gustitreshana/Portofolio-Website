"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Header = () => {
  const texts = ["I'm a software engineer", "I love coding", "Welcome to my portofolio"];
  const [currentText, setCurrentText] = useState(texts[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleTalkToMe = () => {
    window.open("https://wa.me/6285710000000");
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1AJOoiLBLLLqVcGSsAly8K_CdIW2z7u48/view?usp=sharing"
    );
  };

  return (
    <div id="home" className="flex justify-around items-center h-screen sm:flex-col-reverse sm:h-auto">
      <div className="flex flex-col justify-center w-1/2 gap-10 sm:w-full md:gap-6 md:px-6 lg:px-6">
        <div className="flex flex-col justify-center gap-6 md:gap-2 md:w-96 lg:w-96">
          <h1 className="text-8xl font-bold text-gray-300 md:text-4xl lg:text-4xl">
            Hi, I&apos;m <span className="text-emerald-600 glowing-text">Gusti</span>{" "}
            <span className="glowing-text">Treshana Herman</span>
          </h1>
          <div className="container-typing">
            <h2 className="text-4xl font-bold text-yellow-600 typing-text md:text-xl lg:text-2xl">
              {currentText}
            </h2>
          </div>
        </div>
        <p className="text-xl text-justify text-gray-300 md:text-base">
          I have experience in developing web and mobile applications using
          various modern technologies. With expertise in both frontend and
          backend, I can create comprehensive and efficient digital solutions
          for various business needs.
        </p>
        <div className="flex gap-4 sm:justify-center sm:items-center">
          <Button
            label="Download CV"
            variant="primary"
            onClick={handleDownloadCV}
          />
          <Button
            label="Talk to me?"
            variant="secondary"
            onClick={handleTalkToMe}
          />
        </div>

        <div className="flex gap-2 sm:justify-center">
          <div className="flex items-center">
            <Image
              className="cursor-pointer"
              src="/icon-gmail.png"
              alt="gmail"
              width={45}
              height={45}
              onClick={() =>
                (window.location.href = "mailto:gustith2105@gmail.com")
              }
            />
            <Image
              className="cursor-pointer"
              src="/icon-instagram.png"
              alt="instagram"
              width={50}
              height={50}
              onClick={() =>
                window.open("https://www.instagram.com/gustitreshana/")
              }
            />
          </div>
          <div className="flex gap-4 items-center">
            <Image
              className="cursor-pointer"
              src="/icon-linkedin.png"
              alt="linkedin"
              width={25}
              height={25}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gusti-treshana-herman-094064150/?originalSubdomain=id"
                )
              }
            />
            <Image
              className="cursor-pointer"
              src="/icon-github.png"
              alt="github"
              width={30}
              height={30}
              onClick={() => window.open("https://github.com/Gustitreshana")}
            />
          </div>
        </div>
      </div>

      <div className="flex sm:w-3/4 sm:h-3/4 sm:mt-10 md:justify-center md:items-center">
        <Image
          className="md:w-10/12 md:h-10/12"
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