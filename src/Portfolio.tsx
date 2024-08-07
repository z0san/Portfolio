import React, { useState } from 'react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Zohar Singer</a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#experience" className="hover:text-gray-300">Experience</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <a href="#about" className="block py-2 hover:text-gray-300">About</a>
          <a href="#experience" className="block py-2 hover:text-gray-300">Experience</a>
          <a href="#skills" className="block py-2 hover:text-gray-300">Skills</a>
          <a href="#projects" className="block py-2 hover:text-gray-300">Projects</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <img src="/api/placeholder/150/150" alt="Zohar Singer" className="rounded-full mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Zohar Singer</h1>
          <p className="text-xl mb-8">Full Stack Software Engineer | CTO at CreativesApp</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/z0san" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
            <a href="https://linkedin.com/in/zohar-singer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
            <a href="mailto:zohar@alumni.upenn.edu" className="hover:text-gray-300">Email</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto">
            As a passionate and innovative software engineer, I thrive on tackling complex challenges and creating elegant solutions. With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to software development. My experience as CTO at CreativesApp has honed my leadership skills and ability to drive projects from conception to completion. I'm constantly seeking new opportunities to learn and grow in the ever-evolving world of technology.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Chief Technology Officer (CTO)</h3>
              <p className="text-gray-300 mb-2">CreativesApp | London, UK | September 2023 - Present</p>
              <ul className="list-disc list-inside">
                <li>Led technical development of a project management and fintech platform for the creative industry</li>
                <li>Architected and implemented core platform features using PHP, Laravel, and MySQL</li>
                <li>Managed a cross-functional team of 4, establishing engineering best practices</li>
                <li>Developed analytics tracking system to measure user engagement and platform performance</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Software Engineer Intern</h3>
              <p className="text-gray-300 mb-2">Pelicargo | Boston, MA | June 2022 - September 2022</p>
              <ul className="list-disc list-inside">
                <li>Designed and developed internal tools to reduce client response times by 50%</li>
                <li>Created APIs using IATA One Record protocol</li>
                <li>Implemented front-end and back-end solutions using TypeScript, React.js, and Appsmith</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Software Development Engineer Intern</h3>
              <p className="text-gray-300 mb-2">Amazon | Seattle, WA | June 2021 - August 2021</p>
              <ul className="list-disc list-inside">
                <li>Built scalable features for AWS - Lookout for Metrics</li>
                <li>Implemented back inference for AI inference on specified past data</li>
                <li>Collaborated with cross-functional teams and gained experience with various AWS services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <ul className="list-disc list-inside">
                <li>C/C++/C#</li>
                <li>PHP/Laravel</li>
                <li>Java/Kotlin</li>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>React/Vue.js</li>
                <li>OCaml</li>
                <li>Verilog</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Software & Technologies</h3>
              <ul className="list-disc list-inside">
                <li>Linux/Bash</li>
                <li>Git</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>SolidWorks</li>
                <li>protoTRAK</li>
                <li>MasterCAM</li>
                <li>Unity</li>
                <li>JUnit</li>
                <li>Android Studio</li>
                <li>Apache Spark</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AWS Services</h3>
              <ul className="list-disc list-inside">
                <li>Lambda</li>
                <li>DynamoDB</li>
                <li>S3</li>
                <li>EC2</li>
                <li>State Machine</li>
                <li>Glue</li>
                <li>SageMaker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">CreativesApp</h3>
              <p className="mb-4">A project management and fintech platform for the creative industry.</p>
              <a href="https://creativesapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">ModelAssistant.ai</h3>
              <p className="mb-4">An AI-powered assistant for model management and optimization.</p>
              <img src="/api/placeholder/400/200" alt="ModelAssistant.ai" className="w-full h-40 object-cover mb-4 rounded" />
              <a href="#" className="text-blue-400 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Zohar Singer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;