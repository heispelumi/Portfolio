import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="w-screen  h-screen  mb-[90px]  md:mb-[100px]   font  bg-[#1A1A1A] text-white flex items-center justify-center px-6 font-sans relative">
            <div className="max-w-4xl text-left space-y-10">
                {/* Intro line */}
                <motion.p
                    className="text-sm uppercase tracking-wide text-gray-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Code, crafted with clarity.
                </motion.p>

                {/* Heading */}
                <motion.h1
                    className="text-[32px] md:text-[60px] font-bold leading-snug"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                   I'm whatever your project  <br />
                   necessitates me to be.
                </motion.h1>

                {/* Description */}
                <motion.p
                    className=" text-[14px] md:text-[30px] md:text-xl text-gray-300 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                  I’m <span className="text-yellow-500  font-medium">Atoyebi Pelumi</span> — a front-end developer focused on
                    transforming ideas into elegant digital experiences that feel effortless to use.
                </motion.p>

                {/* Call to Action */}
                <motion.div
                    className="flex gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <Link
                        to="/projects"
                        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                    >
                        View My Work <FaArrowRight />
                    </Link>


                    <a
  href="https://drive.google.com/file/d/1K2pZzKqt3wLzKtGyXOVbwNYaGdcV-6OW/preview"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
>
  My Resume
</a>



                </motion.div>
            </div>

            {/* Hidden Easter Egg Text */}
            <span className="absolute bottom-4 text-[3px] md:text-[7px] right-4 text-sm text-gray-700 opacity-40 select-none pointer-events-none">
                I might also be Batman lol .
            </span>
        </section>
    );
};

export default Hero;
