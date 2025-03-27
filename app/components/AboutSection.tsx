// import { Button } from ",/components/ui/button";
import { CheckCircle } from "lucide-react";
import profilePhoto from "./../../public/Screenshot 2024-08-04 140658.png";

export default function AboutSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">About Me</h2>
          <div className="w-20 h-1 bg-[#0984E3] mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center items-center md:items-start gap-12">
          {/* <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00B894] rounded-md opacity-10 transform translate-x-4 translate-y-4"></div>
              <img 
                src={profilePhoto}
                alt="Vidip Singh working" 
                className="rounded-md relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div> */}
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold font-inter mb-6">Full Stack Developer</h3>
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with expertise in React, Next.js, and Node.js ecosystems. 
              I'm actively contributing to open-source projects and have experience in Selenium testing and emerging 
              technologies like Web3. My focus is on creating efficient applications and leveraging cloud technologies 
              for scalable solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Key Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Backend Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Full Stack Web Applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Cloud Technologies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Interests</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Open Source Contribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Web3 & Emerging Tech</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Automation Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#0984E3] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" /> 
                    <span>Cloud Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
