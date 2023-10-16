"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-col gap-2 pl-2 list-disc">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-col gap-2 pl-2 list-disc">
        <li>
          <span className="font-bold">Front-end Web Development Bootcamp</span>,
          Re:Coded
        </li>
        <li>
          {" "}
          <span className="font-bold">
            Master of Science in Construction Management and Engineering
          </span>
          , Middle East Technical University
        </li>
        <li>
          {" "}
          <span className="font-bold">
            Bachelor of Science in Civil Engineering
          </span>
          , Middle East Technical University
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="flex flex-col gap-2 pl-2 list-disc">
        <li>
          <span className="font-bold">Civil Engineer</span>, EFK Engineering
        </li>
        <li>
          <span className="font-bold">Intern</span>, Astaldi-Turkerler Joint
          Venture
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen px-16 bg-gray-50 text-slate-400"
    >
      <div className="absolute top-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 bg-pink-300 rounded-full -right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-0 bg-yellow-300 rounded-full -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="flex flex-col h-full mt-4 text-center md:text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-blue-700">About Me</h2>
          <p className="text-base lg:text-lg text-[#adb7be]">
          As a former civil engineer who&apos;s made the exciting transition to software engineering, I bring a unique blend of experiences and a passion for front-end web development. My journey includes recent graduation from a dynamic front-end web development bootcamp, where I honed my skills in crafting visually appealing, user-centric websites that deliver exceptional user experiences.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8 text-left">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
