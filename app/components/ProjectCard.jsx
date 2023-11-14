import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  key,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <section
      key={key}
      className="group relative overflow-hidden bg-neutral-200 rounded-md"
    >
      <div className="relative flex items-center justify-center w-full h-2/3 group">
        <Image src={imgUrl} alt={title} className="w-full h-full" />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center pt-6 px-2">
          <div className="text-center text-[#adb7be]">
            <h5 className="mb-2 text-sm font-semibold">{title}</h5>
            <p className="text-[#adb7be] text-xs overflow-auto h-24">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="text-[#adb7be] bg-gray-100 h-1/3 rounded-b-lg flex items-center justify-center gap-6">
        <div className="flex flex-col gap-2 items-center justify-center group/link cursor-pointer">
          <Link
            href={gitUrl}
            className="h-12 w-12 border-2 relative rounded-full border-[#adb7be] hover:border-white group-hover/link:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
          <span className="group-hover/link:text-white">CODE</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center group/link cursor-pointer">
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 relative rounded-full border-[#adb7be] hover:border-white group-hover/link:border-white"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
          <span className="group-hover/link:text-white">DEMO</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
