import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white px-6 py-20 flex items-center justify-center overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-200"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full relative z-10"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let’s Build Something Amazing 🚀
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Whether you have a project idea, want to collaborate, or just want
            to say hi — my inbox is always open!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20">
          <form
            action="https://formspree.io/f/xzzvoqeq" // Replace with your Formspree or EmailJS endpoint
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Send Message ✉️
            </motion.button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="text-center mt-10 space-y-2">
          <p>📧 <a href="mailto:amrit@example.com" className="text-purple-400 hover:underline">amritsmc1@gmail.com</a></p>
          <p>📍 Delhi, India</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/amrit7-glitch" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">LinkedIn</a>
            <a href="https://x.com/Amrit24984888?t=7Mv4LcnPktEvYPOELGhkGw&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Twitter</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
