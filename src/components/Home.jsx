import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white px-6 py-20 flex items-center justify-center overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-200"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Profile Image with glassmorphism frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative p-2 rounded-3xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:scale-105 transition-transform duration-500">
            <img
              src="/pic.png"
              alt="Amrit Raj"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
            />
            {/* Neon border glow effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-purple-400 transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Amrit Raj
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a javascript{" "}
            <span className="text-purple-400 font-semibold">
              backend Developer
            </span>{" "}
            specializing in the{" "}
            <span className="font-semibold text-pink-400">MERN stack</span>, 
            crafting modern web apps that solve real problems.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Currently diving deep into{" "}
            <span className="text-indigo-400 font-semibold">
              Blockchain Development
            </span>{" "}
            — building smart contracts & decentralized applications driving Web3 innovation.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I love blending frontend, backend, and blockchain into clean, scalable, and secure solutions.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Always learning, always building — fueled by curiosity and the drive to make meaningful impact.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Let's Connect 🚀
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
