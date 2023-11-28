"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-16">
      <div class="hidden md:block">
        <div class="absolute top-5 right-10 bg-purpleOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 pointer-events-none"></div>
        <div class="absolute top-5 left-10 bg-blueOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-7000 pointer-events-none"></div>
        <div class="absolute bottom-5 left-1/3 bg-pinkOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
      </div>
      <div class="md:hidden absolute top-1/4 right-1/4 bg-pinkOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <section className="relative flex flex-col items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row md:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center place-self-center md:text-left p-6"
          >
            <h1 className="mb-4 text-4xl font-extrabold text-darkPurple sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purpleTwo to-pinkOne">
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
            <p className="text-greyOne text-base sm:text-lg lg:text-xl mb-6">
              I&apos;m Tugba, a frontend web developer <br />
              based in Los Angeles.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative place-self-center"
          >
            <div className="rounded-full bg-gray-100 bg-opacity-50 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
              <Image
                src="/images/profile.png"
                alt="profile image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={500}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/TugbaEsatSahin-Resume.pdf" download="Resume">
            <button className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purpleOne to-pinkOne group-hover:from-purpleOne group-hover:to-pinkOne text-purpleTwo focus:ring-4 focus:outline-none focus:ring-purpleOne">
              <span className="block px-5 py-2 transition-all duration-75 ease-in bg-pinkOne bg-opacity-50 rounded-full group-hover:bg-opacity-0">
                Download CV
              </span>
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
