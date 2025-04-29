import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen font bg-[#1A1A1A] text-gray-300 px-6 md:px-10 pt-[120px] pb-12">
      <div className="max-w-5xl mx-auto space-y-16">

   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-[25px]  text-white font md:text-[30px] font-extrabold mb-2">Get<span className=" text-yellow-400"> in Contact</span></h1>
       
        </motion.div>

   
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-transparent border border-gray-600 rounded-xl p-8 shadow-md shadow-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Contact Form</h2>
            <form 
              action="mailto:pelumiatoyebi06@gmail.com" 
              method="post" 
              encType="text/plain"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-transparent text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-transparent text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 bg-transparent text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>


          <div className="flex flex-col gap-8">


            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="flex-1 bg-transparent border border-gray-600 rounded-xl p-8 shadow-md shadow-yellow-500/20"
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-4">Let's Collaborate</h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Whether it's a creative project, a collaboration, or just a chat about tech — I'm always excited to connect and build new ideas.
              </p>
            </motion.div>

  
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 bg-transparent border border-gray-600 rounded-xl p-8 shadow-md shadow-yellow-500/20"
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Connect with Me</h2>
              <div className="flex space-x-6 text-3xl text-gray-400">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-200">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-200">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-200">
                  <FaTwitter />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}
