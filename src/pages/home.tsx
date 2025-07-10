import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Image from '../assets/abba.png';
import Post from "../components/Post";
import Project, {  ProjectPropsType as ProjectType } from "../components/Project";
import { Link } from "react-router-dom";

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
  
  const projects: ProjectType[] = [
    {
      title: "MyCircle",
      description: "A privacy-focused group activity app that enables secure event planning and group communication.",
      link: "https://github.com/yourusername/mycircle",
      technologies: ["React Native", "MobX", "Expo-SQLite", "Supabase"],
      coverImage: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "EduTracka",
      description: "School Management Platform that allows administrators to manage and track there school activities from student and staff management to fees and results management all in simple and a unified interface",
      link: "https://github.com/yourusername/edutracka",
      technologies: ["React Native", "Supabase", "Drizzle ORM", "Expo Router"],
      coverImage: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "Al-Mudarris",
      description: "A class management app designed to help teachers organize classes, manage schedules, and track student progress effectively.",
      link: "https://github.com/yourusername/al-mudarris",
      technologies: ["React Native", "Supabase", "Drizzle ORM", "Expo-SQLite"],
      coverImage: "https://picsum.photos/400/250?random=3",
    },
    {
      title: "Developer Portfolio",
      description: "A personal portfolio website showcasing projects, blogs, and professional experience with a dynamic CMS.",
      link: "https://yourportfolio.com",
      technologies: ["React", "Vite", "TailwindCSS", "Sanity.io", "Framer Motion"],
      coverImage: "https://picsum.photos/400/250?random=4",
    },
    {
      title: "Promptium",
      description: "AI Prompt generation and experimentation tool that allow users to craft excellent Prompt through a simple step by step processs.",
      link: "https://promptium.netlify.app",
      technologies: ["React", "Flask", "Azure Cloud", "Google Gemini API", "TailwindCSS"],
      coverImage: "/img/promptium.resized.jpeg"
    }
  ];  
  

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
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">Edutracka</h3>
              <h4 className="text-xl font-semibold text-gray-500">CTO and Lead Developer</h4>
              <p className="text-lg text-gray-700">Jan 2025 - Present</p>
              <p className="text-lg text-gray-700">
                <ul className="list-disc pl-6">
                  <li>Developed MyCircle – a privacy-focused group activity app.</li>
                  <li>Currently working on Al-Mudarris – a class management app for teachers.</li>
                  <li>Utilized MobX, Expo-SQLite, and Supabase for state management and data synchronization.</li>
                </ul>
              </p>
            </div>
            
          </div>
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
              coverImage={project.coverImage}
              reverse={index % 2 === 0}
              link={project.link}
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