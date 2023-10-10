import React from "react";
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
        <div className=" absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Feel free to contact me. I&apos;m always open to new opportunities and
          collaborations.{" "}
        </p>
        <div className="socials flex flex-row gap-2 ">
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
              className="text-white block mb-2 text-sm font-medium"
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
              className="text-white block mb-2 text-sm font-medium"
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
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={`Hi, Tugba!
Let's talk about...`}
            />
          </div>
          <button type="submit" className='w-full px-6 py-3 mr-4 text-white rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
