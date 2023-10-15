import ProjectsSection from '@/app/components/ProjectsSection'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Navbar/>
    <div className="container px-12 py-4 mx-auto mt-24">
        <ProjectsSection/>
    </div>
    <Footer/>
    </main>
  )
}

export default projects