import React from "react";
import { FaGithub, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] font border-t border-yellow-500/20 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side - Subtle coding quote */}
        <div className="text-center md:text-left text-sm leading-relaxed">
          <p className="text-yellow-500 text-[9px]   md:text-[12px] font-semibold mb-2">
         
          Think I'd be a good fit for your team or project? Let's connect.
          </p>
          <p className="text-[5px] md:text-[10px]">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-500  font-semibold">Pelumi</span>. 
            All rights reserved.
          </p>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex items-center gap-8 text-2xl">
          <a
            href="https://github.com/heispelumi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/heisatoyebi/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3Fhl%3Den%26__coig_login%3D1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
       
          <a
            href="mailto:pelumiatoyebi06@gmail.com"
            className="hover:text-yellow-500 transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>
              <a href="https://x.com/heisatoyebi" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-200">
                              <FaTwitter />
                            </a>
        </div>

      </div>
    </footer>
  );
}
