import { Card, CardContent } from "./ui/card";
import { FaCertificate } from "react-icons/fa";

const certificationData = [
  {
    title: "Certificate Front-End Web Development",
    institution: "University of Moratuwa",
    year: "April 2024 ",
    description: "Followed a front-end web development certificate course in University of Moratuwa .",
    linkName: "Certificate",
    link: "https://open.uom.lk/lms/mod/customcert/view.php?id=839&downloadown=1",
  },
  {
    title: "Certificate Course on Python",
    institution: "University of Moratuwa",
    year: "April 2024 ",
    description: "Followed a python certificate course in University of Moratuwa .",
    linkName: "Certificate",
    link: "https://open.uom.lk/lms/login/index.php",
  },
  {
    title: "Certificate Course on Bootstrap 4",
    institution: "Coursera",
    year: "Jun 2021 ",
    description: "Completion Certificate for Front-End Web UI Frameworks and Tools: Bootstrap 4.",
    linkName: "",
    link: "",
  },
  {
    title: "Advanced Course on Microsoft Office ",
    institution: "NanaPiyasa",
    year: "Jun 2006",
    description: "Followed a computer certificate course in NanaPiyasa Imaduwa .",
    linkName: "",
    link: "",
  },
];

export function Certification() {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-200">
      <CardContent className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <FaCertificate className="text-blue-500" size={24} />
          Certifications
        </h2>
        <div className="space-y-6">
          {certificationData.map((cert, index) => (
            <div
              key={index}
              className="p-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h6 className="text-md font-semibold text-gray-800 mb-1">
                {cert.title}
              </h6>
              <p className="text-md text-gray-600">{cert.institution}</p>
              <p className="text-sm text-gray-500">{cert.year}</p>
              <p className="text-sm text-gray-700 mt-2">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm mt-2 inline-block hover:underline"
              >
                {cert.linkName}
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
