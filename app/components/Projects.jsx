import learningApp from "../../public/images/projects/learning-app.png";
import movieApp from "../../public/images/projects/movie-project.png";
import movieNomination from "../../public/images/projects/movie-nomination.png";
import tipCalculator from "../../public/images/projects/tip-calculator.png";
import simonGame from "../../public/images/projects/simon-game.png";
import diceeApp from "../../public/images/projects/dicee-app.png";
import drumKit from "../../public/images/projects/drum-kit.png";
import clipboard from "../../public/images/projects/clipboard-landing.png";
import blogr from "../../public/images/projects/blogr-landing.png";
import reactForm from "../../public/images/projects/react-form-app.png";
import space from "../../public/images/projects/space.png";
import tasks from "../../public/images/projects/tasks-app.png";
import shopping from "../../public/images/projects/shopping-app.png";

const projectData = [
  {
    id: 1,
    title: "Learnification - Education Hub",
    description:
      "The project, serving as the capstone project of a frontend bootcamp, revolves around crafting aninteractive learning application that caters to users of diverse ages and skill levels. It aims to offer abroad spectrum of courses across various subjects, ensuring an engaging and enriching educational experience.",
    properties: [
      "Technology Stack: Develop a dynamic learning platform using React-based web app withNext.js. Implement Tailwind CSS for a sleek, responsive design, and utilize MongoDB forefficient data storage.",
      "Collaborative Development: Adopt a Git workflow for collaborative development, ensuringcode quality, version control, and streamlined teamwork among the development team.",
      "User-Centric Design: Enhance the user experience through internationalization using Next-Intl,enabling users from various regions to access and interact with the platform in their preferredlanguage.",
      "Secure Access: Ensure secure user access and authentication by integrating Next-Auth,providing a robust authentication system for user data and account management.",
    ],

    image: learningApp,
    gitUrl: "https://github.com/tugbaesat/Learnification",
    previewUrl: "https://learn-u-team-7.vercel.app/",
  },
  {
    id: 2,
    title: "PicturePerfect - Cinematic Explorer",
    description:
      "This project is centered around a movie database powered by The Movie DB API, offering users animmersive experience in exploring movies, casts, ratings, trailers, genres, and related content. Theprimary aim is to create a comprehensive and captivating movie browsing platform.",
    properties: [
      "Technology Stack: Develop a dynamic web application utilizing HTML, JavaScript, and TailwindCSS to craft a user-friendly and visually appealing interface.",
      "API Integration: Connect and leverage The Movie DB API to source comprehensive moviedetails, ratings, trailers, and related content, ensuring an expansive database for user exploration.",
      "Universal Navigation: Implement a consistent and easily accessible navigation bar for seamlessmovement across various pages and screen sizes, ensuring a user-friendly experience.",
      "Responsive Design: Utilize Tailwind CSS for responsive design elements, ensuring the platform'sadaptability to different screen types and providing an optimal viewing experience.",
      "Individual Pages for Movies and Actors: Create dedicated pages for each movie and actor,offering in-depth information and an interactive browsing experience for users seeking detailed insights.",
      "Interactive Trailers: Incorporate interactive trailer viewing experiences for a more immersivepresentation of movie content.",
      "Advanced Search and Filtering: Implement advanced search and filtering options for users tonavigate the extensive movie and cast database more efficiently.",
    ],
    image: movieApp,
    gitUrl: "https://github.com/tugbaesat/movie-project",
    previewUrl: "https://movie-project-tugbaesat.vercel.app/",
  },
  {
    id: 3,
    title: "Oscars - Movie Nomination Platform",
    description:
      "The project centers around the creation of a Next.js-based webpage, drawing inspiration from theShopify Web Developer Intern Challenge Summer 2021. It's aimed at enabling users to search theOMDB for movies and nominate their top choices. The primary focus is on crafting a seamless userexperience for discovering, selecting, and managing nominated movies.",
    properties: [
      "Technology Stack: Develop a Next.js project integrated with the OMDB API to enable users tosearch, display movie details, and manage nominations efficiently.",
      "OMDB Integration: Create a robust search functionality connected to the OMDB API, allowingusers to explore comprehensive movie details and nominate their favorite films.",
      "Intuitive Nomination System: Design and implement an intuitive system that enables users toefficiently manage their selections, facilitating easy additions, removals, and organization of nominated movies.",
      "User-Centric Experience: Focus on designing an interactive and engaging user interface thatstreamlines the browsing, selection, and nomination processes.",
    ],
    image: movieNomination,
    gitUrl: "https://github.com/tugbaesat/movie-nomination",
    previewUrl: "https://movie-nomination.vercel.app",
  },
  {
    id: 4,
    title: "Space Tourism Platform",
    description:
      "The project involves creating a comprehensive platform for space tourism enthusiasts, providingengaging and informative content about space travel opportunities. Users will access multi-pagecontent, mirroring a professional design layout for an immersive experience.",
    properties: [
      "Technology Stack: Utilize React with Next.js for seamless page rendering and efficient routing.Implement Tailwind CSS for responsive and sleek design elements.",
      "Multi-Page Experience: Develop a structured multi-page interface, allowing users to seamlesslynavigate through different sections of space tourism information.",
      "Responsive Design: Ensure the platform offers optimal viewing experiences across variousdevices, with layout adjustments for different screen sizes.",
      "Interactive Elements: Incorporate hover states and interactive features for a user-friendly andengaging browsing experience.",
    ],
    image: space,
    gitUrl: "https://github.com/tugbaesat/space-tourism-website",
    previewUrl: "https://space-tourism-website-tugbaesat.vercel.app",
  },
  {
    id: 5,
    title: "Splitter - Tip Calculator",
    description:
      "The Tip Calculator is a Frontend Mentor project designed to accurately calculate the tip and the totalcost of the bill per person. It offers a user-friendly interface for efficiently determining theappropriate tip amount based on the total bill and user input.",
    properties: [
      "Technology Stack: Developed using Next.js and React, the project ensures a seamless andinteractive experience for users seeking an accurate breakdown of the tip and the bill amountper person.",
    ],
    image: tipCalculator,
    gitUrl: "https://github.com/tugbaesat/nextjs-tip-calculator",
    previewUrl: "https://nextjs-tip-calculator.vercel.app/",
  },
  {
    id: 6,
    title: "Simon Game",
    description:
      "The Simon Game is an online adaptation of the classic electronic game involving sequences of lightsand sounds. Players engage by replicating random light sequences by pressing colored lenses in thecorrect order. It's a fast-paced game that challenges players with its combination of lights, sounds,and sequence recall.",
    properties: [
      "Technology Stack: Developed using HTML, CSS, and jQuery, the project focuses on building anengaging and interactive online version of the Simon Game, offering players an immersiveexperience of the classic electronic game's challenges and excitement.",
    ],
    image: simonGame,
    gitUrl: "https://github.com/tugbaesat/simon-game",
    previewUrl: "https://simon-game-tugbaesat.vercel.app/",
  },
  {
    id: 7,
    title: "Dicee App",
    description:
      "The Dicee project offers a simple yet entertaining app for two players to engage in a dice game. Luckand excitement reign as players choose a dice, igniting a thrilling competition to determine thewinner.",
    properties: [
      "Technology Stack: Using HTML, CSS, and jQuery, the project provides a user-friendly interfacefor an engaging dice game experience. Players interact with the virtual dice, fostering an elementof chance and fun within the game.",
    ],
    image: diceeApp,
    gitUrl: "https://github.com/tugbaesat/dicee-challenge",
    previewUrl: "https://dicee-challenge-tugbaesat.vercel.app/",
  },
  {
    id: 8,
    title: "Drum Kit",
    description:
      "The Drum Kit project is an interactive web application allowing users to play various instrumentsusing their keyboard. It provides a virtual drum set, enabling users to create rhythmic tunes andbeats through keyboard inputs.",
    properties: [
      "Technology Stack: Developed using HTML, CSS, and jQuery, the project delivers an engagingand interactive experience, allowing users to produce music by simply using their computer'skeyboard. The implementation provides an accessible and enjoyable platform for musicalexperimentation and expression.",
    ],
    image: drumKit,
    gitUrl: "https://github.com/tugbaesat/drum-kit",
    previewUrl: "https://drum-kit-tugbaesat.vercel.app",
  },
  {
    id: 9,
    title: "Clipboard Landing Page",
    description:
      "The Clipboard Landing Page, sourced from Frontend Mentor, is designed to replicate a specificlanding page layout with a strong emphasis on responsiveness. The primary goal is to closely matchthe provided design, ensuring it functions seamlessly across various screen sizes.",
    properties: [
      "Technology Stack: Developed using HTML and CSS, the project emphasizes not only accuracy indesign replication but also responsiveness, ensuring the landing page adjusts effectively acrossdifferent devices and screen sizes.",
    ],
    image: clipboard,
    gitUrl: "https://github.com/tugbaesat/clipboard-landing-page-challenge",
    previewUrl: "https://clipboard-landing-page-challenge.vercel.app",
  },
  {
    id: 10,
    title: "Blogr Landing Page",
    description:
      "The Blogr Landing Page, sourced from Frontend Mentor, is aimed at replicating a specific landingpage layout with a strong emphasis on responsiveness. The primary objective is to closely match theprovided design, ensuring seamless functionality across various screen sizes.",
    properties: [
      "Technology Stack: Developed using HTML, CSS, and Bootstrap, the project underscoresaccuracy in design replication and responsiveness. The inclusion of Bootstrap further enhancesthe adaptability of the landing page, ensuring effective adjustments across different devices andscreen sizes.",
    ],
    image: blogr,
    gitUrl: "https://github.com/tugbaesat/landing-page-challenge",
    previewUrl: "https://blogr-landing-page-tugbaesat.vercel.app",
  },
  {
    id: 11,
    title: "Form Validation Project with React Hook Form",
    description:
      "The React Hook Form project is dedicated to form validation, leveraging the functionalities providedby React Hook Form. The primary focus is on implementing robust form validation techniques toensure data integrity and accuracy within user input fields.",
    properties: [
      "Technology Stack: Utilizing Next.js and React, the project aims to showcase form validationcapabilities using React Hook Form. This tech stack allows for seamless and efficient renderingand management of form inputs, offering a user-friendly experience while ensuring datavalidation.",
    ],
    image: reactForm,
    gitUrl: "https://github.com/tugbaesat/react-form-app",
    previewUrl: "https://react-form-tugbaesat.vercel.app",
  },
  // {
  //   id: 12,
  //   title: "Tasks App",
  //   description: "Tasks App is built using React.",
  //   image: tasks,
  //   gitUrl:
  //     "https://github.com/tugbaesat/react-hooks-state-events-mini-project",
  //   previewUrl: "https://tasks-app-tugbaesat.vercel.app",
  // },
  // {
  //   id: 13,
  //   title: "Shopping List App",
  //   description: "Shopping List App is built using React.",
  //   image: shopping,
  //   gitUrl:
  //     "https://github.com/tugbaesat/react-hooks-state-and-events-lab/blob/master/README.md",
  //   previewUrl: "https://react-hooks-state-and-events-lab.vercel.app",
  // },
];
export default projectData;
