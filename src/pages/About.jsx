import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUserTie } from "react-icons/fa";

export default function AboutMePage() {
  return (
    <div className="min-h-screen font bg-[#1A1A1A] text-gray-300 px-6 md:px-10 pt-[120px] pb-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-[25px] text-white font md:text-[30px] font-extrabold mb-2">
            <span className="text-yellow-500">Behind</span> the Code.
          </h1>
        </motion.div>

        <Divider />

        {/* Background & Experience */}
        <Section title="About Me" icon={<FaUserTie />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative border border-gray-700 rounded-3xl shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 p-6 md:p-10 flex flex-col md:flex-row items-start gap-8 md:gap-14"
          >
            <div className="w-full md:w-1/2">
              <p className="text-[15px] md:text-[18px] text-gray-400 leading-relaxed">
                I'm Atoyebi Pelumi, a Frontend Developer holding a degree in Computer Science from Redeemer's University. My passion lies in creating seamless, user-friendly digital experiences that make an impact.
                <br /><br />
                While my current focus is on frontend development, I have a strong interest in Mobile app development and blockchain technology. These fields excite me due to their potential to transform the way we interact with the digital world, and I’m eager to dive deeper into them as I continue to grow and evolve in the tech industry.
              </p>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <Experience
                role="Frontend Developer — Freelance"
                period="2023 - Present"
                details="Built responsive, user-centered apps with React, Tailwind, and modern APIs."
              />
              <Experience
                role="Intern Web Developer — Ehizhua Hub"
                period="2023"
                details="Enhanced UX/UI for SaaS platforms using React.js and Tailwind."
              />
            </div>
          </motion.div>
        </Section>

        <Divider />

        {/* Skills Section */}
        <Section title="Skills & Tools" icon={<FaCode />}>
          <SkillGrid skills={[
            "React.js", "Next.js", "Tailwind CSS", "Framer Motion",
            "TypeScript", "JavaScript", "Firebase", "Git & GitHub"
          ]} />
        </Section>

        <Divider />

        {/* Other Strengths */}
        <Section title="Other Strengths" icon={<FaLaptopCode />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 text-gray-400 text-sm md:text-base"
          >
            {[
              "Problem Solving & Critical Thinking",
              "Creative Ideation & UI Design Thinking",
              "Adaptability & Continuous Learning",
              "Team Collaboration & Time Management",
              "Effective Communication"
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </Section>
      </div>
    </div>
  );
}

/* Divider Component */
const Divider = () => (
  <div className="w-full h-[1px] bg-gray-700"></div>
);

/* Section Wrapper */
const Section = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="text-yellow-400 text-2xl">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">{title}</h2>
    </div>
    {children}
  </motion.div>
);

/* Experience Block */
const Experience = ({ role, period, details }) => {
  const [position, company] = role.split("—").map(part => part.trim());
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">
        <span className="text-yellow-500">{position}</span> — {company}
      </h3>
      <p className="text-gray-400 text-sm mb-1">{period}</p>
      <p className="text-gray-400 text-sm">{details}</p>
    </div>
  );
};

/* Skill Grid */
const SkillGrid = ({ skills }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {skills.map((skill, index) => (
      <span
        key={index}
        className="bg-gray-800 border border-yellow-500 text-yellow-300 px-3 py-1 rounded-full text-xs"
      >
        {skill}
      </span>
    ))}
  </div>
);
