import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { FaBriefcase } from "react-icons/fa";
import zeropoint from "../assets/zeropoint_logo.png";

type Experience = {
  company: string;
  logo: StaticImageData;
  location: string;
  position: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Zeropoint Pvt Ltd",
    logo: zeropoint,
    location: "Colombo, Sri Lanka",
    position: "Software Engineer",
    duration: "September 2024 -Present",
    description:
      "I am currently working as a Software Developer at Zeropoint. My responsibilities include modeling, code generation, and UI design within the Odoo framework, utilizing XML, Python, and JavaScript for both backend and frontend development.",
  },
  {
    company: "Zeropoint Pvt Ltd",
    logo: zeropoint,
    location: "Colombo, Sri Lanka",
    position: "Associate Software Engineer",
    duration: "JJanuary 2023 - September 2024",
    description:
      "I worked as an Associate Software Developer at Zeropoint for 1 year and 8 months. During my tenure, I was involved in modeling, code generation, UI design, API connectivity, and server implementation. I utilized technologies such as React.js, MongoDB, Node.js, Express.js, and the VS Code platform. My role primarily focused on providing internal framework support for the Zeropoint application.",
  },
  {
    company: "Zeropoint Pvt Ltd",
    logo: zeropoint,
    location: "Colombo, Sri Lanka",
    position: "Trainee Software Developer",
    duration: "January 2022 - January 2023",
    description:
      "I was employed as a Trainee Software Developer at Zeropoint for one year. During my tenure, I developed modeling, code generation, middleware, and server implementations using technologies such as React.js, SQL, Node.js, Express.js, and the VS Code platform. My role focused on providing internal framework support for the Zeropoint application.",
  },
  
];

const groupByCompany = (experiences: Experience[]): Record<string, Experience[]> => {
  return experiences.reduce((acc, exp) => {
    if (!acc[exp.company]) {
      acc[exp.company] = [];
    }
    acc[exp.company].push(exp);
    return acc;
  }, {} as Record<string, Experience[]>);
};

export function Experience() {
  const groupedExperiences = groupByCompany(experiences);

  return (
    <Card className="shadow-lg rounded-lg border border-gray-200">
      <CardContent className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <FaBriefcase className="text-blue-500" size={24} />
          Experience
        </h2>
        <div className="space-y-8">
          {Object.entries(groupedExperiences).map(([company, roles], index) => (
            <div key={index} className="space-y-4">
              {/* Company Header */}
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={roles[0].logo}
                    alt={`${company} Logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                {/* Company Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
                  <p className="text-sm text-gray-500">{roles[0].location}</p>
                </div>
              </div>

              {/* Roles Section */}
              <div className="relative space-y-4">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 w-px bg-gray-300 h-full"></div>
                {roles.map((role, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className="relative  left-2 top-6 z-20">
                      <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                    </div>

                    <div className="flex-1 p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <span className="absolute top-2 right-2 text-xs text-gray-700 font-medium">
                        {role.duration}
                      </span>
                      <Badge className="text-gray-900 rounded-full text-sm">
                        {role.position}
                      </Badge>
                      <p className="mt-3 ms-2 text-gray-700 leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
