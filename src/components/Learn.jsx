import React from "react";
import { motion } from "framer-motion";

function Learn() {
  const skills = [
    {
      title: "Blockchain Development",
      description:
        "Building smart contracts & decentralized apps (DApps) with Solidity and Ethereum.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Web3 Frontend Integration",
      description:
        "Connecting blockchain with user-friendly React interfaces using Web3.js & Ethers.js.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Advanced React & Next.js",
      description:
        "Optimizing performance, SSR, and dynamic routing for modern web applications.",
      color: "from-pink-500 to-yellow-500",
    },
    {
      title: "TailwindCSS Animations",
      description:
        "Creating responsive, futuristic UIs with smooth transitions and glowing effects.",
      color: "from-green-400 to-teal-500",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white px-6 py-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-200"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 overflow-visible">
          <h2 className="inline-block pb-2 text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent 
          leading-relaxed drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Always Learning, Always Evolving
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Technology moves fast — and so do I. Here’s what I’m currently diving into to keep my skills sharp and creativity alive.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 
              shadow-lg hover:shadow-lg hover:shadow-[${skill.color.split(" ")[0]}]/50 
              transition-all duration-500`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}
              ></div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center mt-16 text-gray-400">
          Learning isn’t a phase — it’s part of my lifestyle. The more I learn, the better I build. 🚀
        </div>
      </div>
    </section>
  );
}

export default Learn;
