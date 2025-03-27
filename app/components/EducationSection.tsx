import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award } from "lucide-react";

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

interface Certification {
  title: string;
  issuer: string;
  description: string;
}

const educations: Education[] = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    institution: "Jaypee Insitute of Information Technology",
    location: "Noida, India",
    period: "2022 - 2026",
    highlights: [
    ]
  },
  {
    degree: "Higher Secondary Education",
    field: "Science (PCM)",
    institution: "Indirapuram Public School",
    location: "Ghaziabad, Uttar Pradesh",
    period: "2009 - 2022",
    highlights: [
    ]
  }
];

const certifications: Certification[] = [
  {
    title: "The Complete Web Development Bootcamp by Dr. Angela Yu",
    issuer: "Udemy",
    description: "Learned full-stack web development using HTML, CSS, JavaScript, Node.js, and React, with hands-on experience in building real-world projects, advanced React concepts, RESTful APIs, and MongoDB database management."
  },
  {
    title: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation",
    description: "Learned essential Linux skills including command-line operations, file management, navigating Linux systems, and gained practical knowledge in managing users, permissions, and running shell scripts."
  },
  {
    title: "Flipkart Grid 6.0",
    issuer: "Flipkart",
    description: "Worked on solving real-world e-commerce problems through innovative solutions, gaining experience in AI, machine learning, full-stack development, and focusing on scalable application design and cloud-based infrastructure."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">Education</h2>
          <div className="w-20 h-1 bg-[#0984E3] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educations.map((edu, index) => (
            <Card 
              key={index}
              className="p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold font-inter">{edu.degree}</h3>
                  <p className="text-[#0984E3]">{edu.field}</p>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-[#0984E3] px-3 py-1 rounded-full text-sm font-medium">
                  {edu.period}
                </Badge>
              </div>
              
              <p className="text-lg font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-600 mb-4">{edu.location}</p>
              
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {edu.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold font-inter mb-8 text-center">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-[#0984E3] mb-4">
                  <Award />
                </div>
                <h4 className="font-medium text-lg mb-2">{cert.title}</h4>
                <p className="text-gray-500 mb-3">Issued by: {cert.issuer}</p>
                <p className="text-gray-600">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
