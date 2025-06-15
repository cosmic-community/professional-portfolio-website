import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Full Stack Developer &{' '}
              <span className="text-primary-600">Problem Solver</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crafting innovative digital experiences with modern technologies. 
              Specializing in React, TypeScript, and scalable web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
              >
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <a href="#projects" className="inline-block">
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}