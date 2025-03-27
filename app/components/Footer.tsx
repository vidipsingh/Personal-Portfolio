import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#2D3436] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button 
              onClick={handleScrollToTop}
              className="text-2xl font-bold font-inter focus:outline-none"
            >
              Vidip Singh<span className="text-[#0984E3]">.</span>
            </button>
            <p className="mt-2 text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <p className="mb-3">Connect with me</p>
            <div className="flex space-x-4">
              <a href="https://github.com/vidipsingh" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vidip-singh-a0aa5b23b/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/vidip2025" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
