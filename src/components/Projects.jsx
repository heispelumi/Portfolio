import React from "react";
import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png";
import polasnap from "../assets/polasnap.png";
import zylar from "../assets/zylar.png";
import nexcent from "../assets/nexcent.png";
import payforme from "../assets/payforme.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "PolaroidCreator",
      description:
        "Transform memories into elegant polaroid-style images. Add custom filters, handwritten captions, and download in high quality.",
      features: [
        "Upload and Edit Photos with Filters",
        "Handwritten-style Caption Insertion",
        "Download as JPG or PDF",
        "Optimized for High-Resolution Outputs",
      ],
      techStack: ["React", "Tailwind CSS", "html2canvas", "jspdf"],
      image: polasnap,
      liveLink: "https://polasnap.vercel.app/",
      repoLink: "https://github.com/heispelumi/polasnap",
    },
    {
      title: "Glowroom",
      description:
        "A sleek and powerful dark-themed dashboard built for high-performance business analytics and smart insights.",
      features: [
        "Collapsible Sidebar with Theme Support",
        "Real-time Inventory Stats and Notifications",
        "Financial Reports with Interactive Charts",
        "Advanced Customer & Product Management",
      ],
      techStack: ["React", "Tailwind CSS", "Context API", "Chart.js", "Axios"],
      image: dashboard,
      liveLink: "https://glowroom.vercel.app/",
      repoLink: "https://github.com/heispelumi/Glowroom",
    },
    {
      title: "Zylar",
      description:
        "A bold and stylish streetwear fusion e-commerce platform built for modern fashion enthusiasts.",
      features: [
        "Dynamic Product Listings with Filters and Sorting",
        "Responsive Shopping Cart and Checkout System",
        "User Authentication and Order History",
        "Sleek Animations and Mobile-First Design",
      ],
      techStack: ["React", "Tailwind CSS", "Redux Toolkit", "Stripe API", "Framer Motion"],
      image: zylar,
      liveLink: "https://zylar.vercel.app/",
      repoLink: "https://github.com/heispelumi/zylar",
    },
    {
      title: "Nexcent",
      description:
        "Nexcent is a groundbreaking virtual reality web development tool that lets developers create immersive VR environments with seamless multi-language support.",
      features: [
        "Drag-and-Drop VR Scene Builder",
        "Automatic Language Translation of In-Scene Text",
        "Real-time VR Preview and Editing",
        "Optimized Deployment for Web and WebXR Devices",
      ],
      techStack: ["React", "Three.js", "Tailwind CSS", "WebXR", "i18next"],
      image: nexcent,
      liveLink: "https://virtualr-beige.vercel.app/",
      repoLink: "https://github.com/heispelumi/virtualr",
    },
    {
      title: "PayForMe",
      description:
        "PayForMe streamlines international payments for students, offering secure transactions and easy access to global scholarships.",
      features: [
        "Fast and Secure Tuition Payments",
        "Support for Multiple Currencies",
        "Scholarship Discovery and Application",
        "Real-time Payment Tracking and Notifications",
      ],
      techStack: ["Next.js", "Tailwind CSS", "Stripe API", "Firebase", "React Query"],
      image: payforme,
      liveLink: "https://payforme.vercel.app/",
      repoLink: "https://github.com/heispelumi/payforme",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  return (
    <div
      id="projects"
      className="pt-[120px] min-h-screen font bg-[#1A1A1A] text-gray-300 px-4 mb-[60px] md:px-10 pb-12 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[25px] md:text-[30px] font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          My Featured{" "}
          <span className="text-yellow-500">Projects</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative border border-gray-700 rounded-3xl shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 p-10 flex flex-col md:flex-row items-center gap-10"
              style={{ willChange: "transform, opacity" }}
            >
              {project.image && (
                <div className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="eager"
                    className="rounded-2xl object-cover w-full h-full hover:scale-105 transform transition-all duration-500 ease-in-out"
                    style={{ willChange: "transform" }}
                  />
                </div>
              )}

              <div className="md:w-1/2 w-full flex flex-col space-y-6">
                <h2 className="text-[25px] md:text-[30px] font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-[14px] md:text-[20px] leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-gray-300 text-[10px] md:text-[16px] pl-4 border-l-4 border-yellow-500"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 border border-yellow-500 text-yellow-300 px-4 py-1 rounded-full text-sm hover:bg-yellow-900 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                    >
                      View Live
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                    >
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
