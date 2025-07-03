import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = () => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(prev => ({ ...prev, [section]: true }));
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location-based forecasts and beautiful animations",
      tech: ["React", "OpenWeather API", "CSS3", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: Zap, items: ["Node.js", "Python", "MongoDB", "PostgreSQL"] },
    { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
              Creating beautiful, functional web experiences that make a difference
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                View Projects
              </button>
              <button className="border border-purple-400 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 text-lg mb-6">
                  I'm a passionate full-stack developer with 5+ years of experience creating digital experiences that combine beautiful design with powerful functionality.
                </p>
                <p className="text-gray-300 text-lg mb-8">
                  I specialize in React, Node.js, and modern web technologies. I love turning complex problems into simple, beautiful solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 transform hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 transform hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 transform hover:scale-110">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
                    <div className="flex items-center mb-4">
                      <skill.icon className="text-purple-400 mr-3" size={24} />
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
                <p className="text-gray-300 text-center mb-8 text-lg">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
                <div className="flex justify-center space-x-6">
                  <a href="mailto:john@example.com" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Say Hello
                  </a>
                  <a href="tel:+1234567890" className="border border-purple-400 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    Call Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;