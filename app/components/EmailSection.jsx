import React from "react";
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="relative min-h-screen">
      <div className="absolute bottom-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 bg-pink-300 rounded-full -right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 bg-yellow-300 rounded-full -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="mt-4 mb-6 text-4xl font-bold text-center text-blue-700">
        Contact Me
      </h2>
      <div className="grid items-start gap-4 px-4 py-8 md:grid-cols-2 xl:gap-6 sm:py-16 xl:px-16">
        <div>
          <h5 className="my-2 text-xl font-bold text-slate-400">
            Let&apos;s Connect
          </h5>
          <p className="text-[#adb7be] mb-4 max-w-md">
            Feel free to contact me. I&apos;m always open to new opportunities
            and collaborations.{" "}
          </p>
          <div className="flex flex-row gap-2 socials ">
            <Link href="https://github.com/tugbaesat">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/tugbaesat/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-slate-400"
                htmlFor="subject"
              >
                Your Email
              </label>
              <input
                type="text"
                id="email"
                required
                placeholder="example@email.com"
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-slate-400"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="text"
                required
                placeholder="Just saying hi!"
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-slate-400"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={`Hi, Tugba!
Let's talk about...`}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 mr-4 text-white rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default EmailSection;
