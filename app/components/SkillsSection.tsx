import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code, Users, GitBranch, GitPullRequest } from "lucide-react";
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNpm, 
  FaAws 
} from "react-icons/fa";

interface TechnicalSkill {
  name: string;
  percentage: number;
}

interface ProfessionalSkill {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const technicalSkills: TechnicalSkill[] = [
  { name: "React & Next.js", percentage: 90 },
  { name: "Node.js & Express", percentage: 85 },
  { name: "JavaScript/TypeScript", percentage: 92 },
  { name: "MongoDB & SQL", percentage: 80 },
  { name: "Selenium Testing", percentage: 78 },
  { name: "Web3 Technologies", percentage: 75 },
];

const professionalSkills: ProfessionalSkill[] = [
  {
    name: "Problem Solving",
    description: "Advanced ability to solve complex technical challenges",
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: "Project Management",
    description: "Experienced in managing development workflows",
    icon: <GitPullRequest className="h-6 w-6" />,
  },
  {
    name: "Team Collaboration",
    description: "Strong communication and teamwork skills",
    icon: <Users className="h-6 w-6" />,
  },
  {
    name: "Version Control",
    description: "Advanced Git and collaborative development",
    icon: <GitBranch className="h-6 w-6" />,
  },
];

const technologies = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNodeJs size={32} /> },
  { name: "JavaScript", icon: <FaJs size={32} /> },
  { name: "HTML5", icon: <FaHtml5 size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt size={32} /> },
  { name: "Git", icon: <FaGitAlt size={32} /> },
  { name: "npm", icon: <FaNpm size={32} /> },
  { name: "AWS", icon: <FaAws size={32} /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">My Skills</h2>
          <div className="w-20 h-1 bg-[#0984E3] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold font-inter mb-8">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold font-inter mb-8">Professional Skills</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#0984E3] mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-lg mb-2">{skill.name}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold font-inter mb-8 text-center">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-[#0984E3]">{tech.icon}</div>
                <span className="mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
