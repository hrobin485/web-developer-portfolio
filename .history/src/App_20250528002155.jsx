import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider text-gray-800">Your Name</h1>
          <ul className="flex space-x-6 text-sm md:text-base font-medium text-gray-800">
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center px-4"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Hi, I'm <span className="text-yellow-300">[Your Name]</span>
        </h2>
        <p className="mt-6 text-xl md:text-2xl max-w-xl">
          A Web Developer passionate about building modern and responsive web applications using React, Node.js, and Tailwind CSS.
        </p>
        <a
          href="#contact"
          className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-700">
            I’m a dedicated full-stack developer focused on crafting clean and user-friendly experiences. I’m always eager to learn and improve, with a strong focus on building applications that are fast, accessible, and scalable.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["React", "Node.js", "Tailwind CSS", "MongoDB", "Express.js", "JavaScript", "Firebase", "Git"].map(skill => (
              <div key={skill} className="bg-white shadow rounded-lg p-4 hover:bg-blue-50 transition font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl">
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of the project goes here. What it does, tech stack, and your role.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  View Project →
                </a>
              </div>
            </div>
            {/* You can copy-paste more projects below */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg mb-6">Let’s work together! Feel free to reach out via email.</p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            your-email@example.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
