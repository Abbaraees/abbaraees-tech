import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import Image from '../assets/abba.png';

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="mt-16 flex flex-col md:flex-row items-center"
      >
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Hi, I'm Muhammad Lawal
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            A Passionate Mobile Developer & Cybersecurity Enthusiast
          </p>
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start space-x-4 mt-8"
          >
            <a href="https://github.com/Abbaraees" className="text-gray-700 hover:text-white" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/muhammad-lawal" className="text-gray-700 hover:text-white" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/abba_raees" className="text-gray-700 hover:text-white" target="_blank" rel="noreferrer">
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

      <div className="bg-gray-50 w-full">
        {/* About Me Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-4xl mx-auto text-center md:text-left "
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#B36A10] mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              I am a dedicated mobile developer with a passion for creating innovative and secure applications. With a strong background in cybersecurity, I ensure that my projects are not only functional but also secure. I enjoy learning new technologies and continuously improving my skills to stay up-to-date with industry trends.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              In my free time, I love contributing to open-source projects, exploring new programming languages, and sharing my knowledge with the developer community. I believe in the power of collaboration and strive to build solutions that make a positive impact.
            </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-4xl mx-auto text-center md:text-left w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-[#B36A10]">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Freelance Mobile Developer</h3>
              <p className="text-lg text-gray-700">Jan 2024 - Present</p>
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
      <div className="py-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B36A10] mb-8 text-center">Projects</h2>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="https://picsum.photos/400/300" alt="Project 1" className="rounded-lg w-full md:w-1/2" />
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-4">Project One</h3>
                <p className="text-gray-700">A detailed description of your first project. Explain the technologies used, challenges faced, and solutions implemented.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <img src="https://picsum.photos/401/300" alt="Project 2" className="rounded-lg w-full md:w-1/2" />
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-4">Project Two</h3>
                <p className="text-gray-700">Description of your second project. Highlight the key features and your role in development.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="https://picsum.photos/402/300" alt="Project 3" className="rounded-lg w-full md:w-1/2" />
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-4">Project Three</h3>
                <p className="text-gray-700">Overview of your third project. Discuss the impact and results achieved through this implementation.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      
    </div>
  );
}