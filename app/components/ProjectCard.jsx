import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <section className="">
      <div className="relative flex items-center justify-center w-full h-auto group">
        <Image src={imgUrl} alt={title} className="w-full h-full rounded-xl " />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-2">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      {/* <div className="text-white rounded-b-xl bg-[#181818] px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#adb7be}">{description}</p>
      </div> */}
    </section>
  );
};

export default ProjectCard;

// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
//   return (
//     <div>
//       <div
//         className="relative h-52 md:h-72 rounded-t-xl group"
//         style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//       >
//         <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-2">
//           <Link
//             href={gitUrl}
//             className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
//           >
//             <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
//           </Link>
//           <Link
//             href={previewUrl}
//             className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
//           >
//             <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
//           </Link>
//         </div>
//       </div>
//       <div className="text-white rounded-b-xl bg-[#181818] px-4 py-6 mt-3">
//         <h5 className="mb-2 text-xl font-semibold">{title}</h5>
//         <p className="text-[#adb7be}">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;