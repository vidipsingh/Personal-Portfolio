import { Card } from "./ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Web Developer",
    company: "The Verse",
    period: "October 2024 - February 2025",
    description: [
      "Leading the full-stack development of the WalkXR website, handling both front-end and back-end tasks independently while building a responsive and scalable UI for seamless user experience across devices.",
      "Actively optimizing website performance, reducing load times by 40% in test environments to ensure smoother deployment upon completion.",
      "Collaborating with stakeholders to refine features, ensuring alignment with business objectives as the project progresses toward production.",
    ]
  },
  {
    title: "Web Developer and Automation Tester",
    company: "Tenet Networks",
    period: "June 2024 - July 2024",
    description: [
      "Led end-to-end development and testing of web applications, achieving an 80% improvement in functionality through the implementation of automated testing frameworks and responsive design principles across multiple projects.",
      "Developed and executed comprehensive test automation scripts using Python, reducing manual testing time by 60% and improving overall efficiency.",
      "Collaborated with cross-functional teams to successfully deliver 3 brand identity projects, including logo design and product photography, while ensuring the projects met strategic business objectives."
    ]
  },
  {
    title: "Graphic Designer",
    company: "Youtube - Shobhit Nirwan",
    period: "Novermber 2022 - December 2022",
    description: [
      "Created 10+ high-converting YouTube thumbnails that contributed to multi-million view counts.",
      "Increased click-through rates by 40% through data-driven thumbnail design optimization.",
      "Spearheaded the creation of 20+ educational materials as part of a 3-person design team."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">Work Experience</h2>
          <div className="w-20 h-1 bg-[#0984E3] mx-auto mt-4"></div>
        </div>
        
        <div className="relative pl-8 md:pl-0">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 mb-12 last:mb-0">
              <div className="md:flex items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold font-inter">{exp.title}</h3>
                  <p className="text-[#0984E3] font-medium">{exp.company}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
                
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-[#0984E3] rounded-full transform -translate-x-1/2 z-10"></div>
                
                {/* Timeline dot and line for mobile */}
                <div className="md:hidden absolute left-0 top-0">
                  <div className="w-4 h-4 bg-[#0984E3] rounded-full"></div>
                  <div className="absolute top-4 left-2 h-full w-px bg-gray-200 -translate-x-1/2"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <Card className="p-6 border border-gray-100">
                    <p className="mb-4">
                      {exp.title === "Software Engineer" ? 
                        "Working as a Full Stack Developer focused on React and Node.js applications. Responsible for:" : 
                        exp.title === "Frontend Developer" ? 
                        "Worked as a Frontend Developer creating responsive web interfaces:" :
                        ""}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
