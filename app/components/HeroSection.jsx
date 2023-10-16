"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-16 bg-gray-50">
      <div className="absolute top-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 bg-yellow-300 rounded-full right-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bg-pink-300 rounded-full bottom-15 -right-30 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>
      <section className="relative flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row md:gap-24">
          <div className="text-center place-self-center md:text-left p-6">
            <h1 className="mb-4 text-4xl font-extrabold text-slate-400 sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Tugba",
                  1000,
                  "Frontend Web Developer",
                  1000,
                  "Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
              I&apos;m Tugba, a frontend web developer <br />based in Los Angeles.
            </p>
            <div>
              <a href="/resume.pdf" download="Resume">
                <button className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                  <span className="block px-5 py-2 transition-all duration-75 ease-in bg-gray-50 bg-opacity-50 rounded-full group-hover:bg-opacity-0">
                    Download CV
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative mt-4 place-self-center lg:mt-0">
            <div className="rounded-full bg-gray-100 bg-opacity-50 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
              <Image
                src="/images/profile.png"
                alt="profile image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
