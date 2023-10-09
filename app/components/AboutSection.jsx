"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className='list-disc pl-2 flex flex-col gap-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className='list-disc pl-2 flex flex-col gap-2'>
                <li><span className='font-bold'>Front-end Web Development Bootcamp</span>, Re:Coded</li>
                <li> <span className='font-bold'>Master of Science in Construction Management and Engineering</span>, Middle East Technical University</li>
                <li> <span className='font-bold'>Bachelor of Science in Civil Engineering</span>, Middle East Technical University</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content: (
            <ul className='list-disc pl-2 flex flex-col gap-2'>
                <li><span className='font-bold'>Civil Engineer</span>, EFK Engineering</li>
                <li><span className='font-bold'>Intern</span>, Astaldi-Turkerler Joint Venture</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white '>
<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image src="/images/about.png" alt='about image' width={500} height={500}/>
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
<p className='text-base lg:text-lg text-[#adb7be]'>As a civil engineer transitioning to software engineering, I have knowledge in HTML, CSS, JavaScript, React and Next.js providing a comprehensive foundation in front-end web development. Also, I am familiar with version control systems such as Git. I have recently graduated from a front-end web development bootcamp, where I have learnt to create visually appealing, user-friendly websites that deliver outstanding user experiences.</p>
<div className='flex flex-row mt-8'>
    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
</div>
<div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
</div>
    </section>
  )
}

export default AboutSection