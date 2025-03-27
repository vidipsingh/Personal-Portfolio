import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

type NavLink = {
  id: string;
  title: string;
};

const navLinks: NavLink[] = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white bg-opacity-95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold font-inter text-primary hover:text-secondary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
            }}
          >
            Vidip Singh<span className="text-[#0984E3]">.</span>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="font-medium hover:text-[#0984E3] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.id);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="block font-medium hover:text-[#0984E3] transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavLinkClick(link.id);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
