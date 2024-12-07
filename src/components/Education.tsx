import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { FaGraduationCap } from "react-icons/fa";
import aloysius from "../assets/aloysius.png";
import sliit from "../assets/sliit.png";

const educationData = [
  {
    degree: "B.Sc. Special (Hons) – Information Technology (Specialization – Software Engineering)",
    institution: "Sri Lanka Institute of Information Technology",
    years: "January  2019 - January  2023",
    image: sliit,
  },
  {
    degree: "Advanced Level",
    institution: "St. Aloysius' College, Galle",
    years: "2013 - 2016",
    image: aloysius,
  },
];

export function Education() {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-200">
      <CardContent className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <FaGraduationCap className="text-blue-500" size={24} />
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4 items-center"
            >
              <div className="w-15 h-20 flex-shrink-0">
                <Image
                  src={edu.image}
                  alt={`${edu.institution} logo`}
                  width={60} 
                  height={60} 
                  className="rounded-md object-contain"
                />
              </div>
              <div>
                <h6 className="text-md font-semibold text-gray-800 mb-1">
                  {edu.degree}
                </h6>
                <p className="text-md text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
