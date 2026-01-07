import React from "react";

function Projects() {
  const projects = [
    {
      title: "Blog App",
      description:
        "A blogging app made using React and Next.js for creating and sharing posts.",
      img: "blog.png",
      link: "https://github.com/amrit7-glitch/Blog",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "LeafLens",
      description:
        "AI-powered plant disease detection tool for Indian farmers. Upload a photo to identify diseases and get treatment suggestions in local languages.",
      img: "green_leaves_logo.jpg",
      link: "https://github.com/amrit7-glitch/HackIndia-Spark-8-2025-FarmBotics",
      color: "from-green-400 to-cyan-500"
    },
    {
      title: "Raffle",
      description:
        "An smart Raffle system with chainlink vrf and automation integrated for fair system.",
      img: "Raffle.jpg",
      link: "https://github.com/amrit7-glitch/raffle-contract",
      color: "from-green-400 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center p-10 text-white">
      
      {/* Background gradient with blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradientX">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse delay-2000" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mt-10 z-10">
        My Projects
      </h1>
      <p className="text-gray-300 text-center mt-4 max-w-2xl z-10">
        Showcasing some of my creations — blending code, design, and innovation into real-world applications.
      </p>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mt-12 z-10">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:scale-[1.03] transition-all duration-500"
            style={{ WebkitTapHighlightColor: "transparent" }} // removes click highlight
          >
            {/* Icon / image container */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-10 h-10 rounded-md object-cover"
              />
            </div>

            <h2 className="text-xl font-bold mb-2 group-hover:text-pink-300 transition">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
