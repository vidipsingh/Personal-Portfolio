import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePhoto from "./../../public/Screenshot 2024-08-04 140658.png";
import Image from "next/image";

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/5 mt-12 md:mt-0">
            <p className="text-[#0984E3] font-medium mb-2">Full Stack Developer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-6">
              Hi, I'm <span className="text-[#0984E3]">Vidip Singh</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Full Stack Developer with expertise in React, Next.js, and Node.js ecosystems. 
              Active open-source contributor with experience in Selenium testing and emerging technologies like Web3.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="px-6 py-6 bg-[#0984E3] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
                onClick={handleContactClick}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#00B894] rounded-full opacity-20 transform -translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-[#0984E3] rounded-full"></div>
              <Image 
                src={profilePhoto} 
                alt="Vidip Singh" 
                className="rounded-full w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center md:justify-between items-center gap-8">
          <div className="text-center">
            <p className="font-inter text-lg flex items-center">
              <Mail className="mr-2 text-[#0984E3]" /> vidip2025@gmail.com
            </p>
          </div>
          <div className="text-center">
            <p className="font-inter text-lg flex items-center">
              <Phone className="mr-2 text-[#0984E3]" /> +91 9971332181
            </p>
          </div>
          <div className="text-center">
            <p className="font-inter text-lg flex items-center">
              <MapPin className="mr-2 text-[#0984E3]" /> Ghaziabad (U.P), India
            </p>
          </div>
          <div className="text-center">
            <div className="flex space-x-4">
              <a href="https://github.com/vidipsingh" className="text-lg text-[#2D3436] hover:text-[#0984E3] transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vidip-singh-a0aa5b23b/" className="text-lg text-[#2D3436] hover:text-[#0984E3] transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/vidip2025" className="text-lg text-[#2D3436] hover:text-[#0984E3] transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
