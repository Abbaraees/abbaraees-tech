import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import Image from '../assets/bg.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <Header />
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <motion.img 
          src={Image}
          alt="Muhammad Lawal" 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6"
          whileHover={{ scale: 1.5, rotate: 15 }}
          transition={{ duration: 0.3 }}
        />
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Hi, I'm Muhammad Lawal
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          A Passionate Mobile Developer & Cybersecurity Enthusiast
        </p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-primary hover:bg-primary-dark transition-all duration-300 text-white rounded-xl shadow-lg text-lg"
        >
          View My Work
        </Link>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex space-x-4 mt-8"
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
  );
}