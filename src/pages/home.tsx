import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Image from '../assets/abba.png';
import Post from "../components/Post";
import Project, {  ProjectPropsType as ProjectType } from "../components/Project";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { client } from "../sanity/client";


const PROJECTS_QUERY = `*[_type == "project"]{_id, title, image, description, technologies, github, live}`

export default function Home() {
  const posts = [
    {
      title: "Understanding React Native Navigation",
      description: "A comprehensive guide to implementing navigation in React Native applications...",
      link: "#"
    },
    {
      title: "Building Secure Mobile Apps",
      description: "Best practices and tips for implementing security in your mobile applications...",
      link: "#"
    },
    {
      title: "State Management with MobX",
      description: "An in-depth look at implementing MobX for state management in React applications...",
      link: "#"
    },
    {
      title: "SQLite Database Integration",
      description: "Step-by-step guide to implementing local database storage in mobile apps...",
      link: "#"
    }
  ];
  
  // State to hold projects data
  const [projects, setProjects] = useState<ProjectType[]>([]);

  // Fetch projects data from Sanity CMS
  // This effect runs once when the component mounts
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.fetch(PROJECTS_QUERY);
        console.log("Fetched Projects:", response);
        setProjects(response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="mt-16 flex flex-col md:flex-row items-center justify-center"
      >
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Hi, I'm Muhammad Lawal
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A Passionate Full Stack & Mobile App Developer
          </p>
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start space-x-4 mt-8"
          >
            <a href="https://github.com/Abbaraees" className="text-gray-400 hover:text-white" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/muhammad-lawal" className="text-gray-400 hover:text-white" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/abba_raees" className="text-gray-400 hover:text-white" target="_blank" rel="noreferrer">
              <FaTwitter size={30} />
            </a>
          </motion.div>
        </div>

        <img 
          src={Image}
          alt="Muhammad Lawal" 
          className=" mb-6 md:mb-0 md:mr-8"
          style={{ width: "400px", height: "460px", objectFit: "cover"}}
        />
      </motion.div>

      {/* About & Experience Section */}
      <div className="bg-gray-50 py-5 p-4">
        {/* About Me Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-4xl mx-auto text-left w-full"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#B36A10] mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Hi, I'm a Fullstack and Mobile App Developer with a passion for crafting innovative digital solutions. I thrive on transforming complex challenges into intuitive, high-performance applications. My journey in tech has taken me from developing dynamic mobile experiences using React Native and robust state management tools like Redux, Zustand and MobX, to designing sleek, responsive interfaces with React, Tailwind CSS, and Other backend services. I also bring backend expertise to the table, working with Python frameworks such as Flask and Django to build scalable, secure systems.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed mt-4">
            Whether I'm building privacy-focused apps, dynamic websites, or streamlining user experiences with smooth animations, my goal is to merge creativity with cutting-edge technology to deliver solutions that truly make an impact. Let's build something amazing together!
            </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-4xl mx-auto text-left w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-[#B36A10]">Experience</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-gray-600 mb-2">Co-Founder & CTO</h4>
            <h5 className="text-xl text-gray-700 font-bold text-primary mb-2">Edutracka</h5>
            <p className="text-lg text-gray-500 mb-4">Jan 2025 - Present</p>
            <p className="text-lg text-gray-700 mb-4">
            I lead the technical vision and development of EduTracka, a cloud-based school management platform designed to streamline administrative tasks and improve parent-teacher communication. My responsibilities include:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Architect the System: I designed the platform using clean architecture and multi-tenant principles to ensure scalability and data isolation for each school.</li>

              <li>Build Core Features: From student records and attendance to results computation, fees tracking, and parent-teacher communication — I’ve built the core backend services using Flask and SQLAlchemy.</li>

              <li>Develop Mobile & Web APIs: I create and maintain APIs that power both the web-based admin panel and mobile apps for parents and teachers.</li>

              <li>Ensure Platform Security: I implement role-based access, secure authentication, and database-level controls to protect sensitive data.</li>

              <li>Oversee DevOps & Cloud Infrastructure: I manage cloud deployments, automated testing, and CI/CD pipelines to ensure reliable updates and performance.</li>

              {/* <li>Collaborate on UI/UX: I work closely with our design team to shape intuitive user interfaces for school admins, teachers, and parents.</li> */}
            </ul>
          </motion.div>
        </motion.section>
      </div>

      {/* Projects Section */}
      <div className="py-2 px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-4xl  mx-auto pb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Projects</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              reverse={index % 2 === 0}
              live={project.live}
              github={project.github}
              />
            ))}
          </div>
        </motion.section>
      </div>

      {/* Recent Blog Posts Section */}
      <div className="bg-gray-50 py-5 px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B36A10] mb-8 text-center">Recent Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Post
              key={index}
              title={post.title}
              description={post.description}
              link={post.link}
              />
            ))}
            </div>
            <div className="text-center mt-8">
              <Link 
              to="/blog" 
              className="inline-block px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#B36A10] to-[#FF8C00] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
              Explore More Posts
              </Link>
            </div>
        </motion.section>
      </div>
    </>
  );
}