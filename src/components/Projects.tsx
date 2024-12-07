"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { FaFolderOpen } from "react-icons/fa";
import image1 from "../assets/pr1.png";
import image2 from "../assets/pr2.png";
import image3 from "../assets/petcare.png";
import image4 from "../assets/pr4.png";
import image5 from "../assets/pr5.png";
import image6 from "../assets/Gym Management.png";
import image7 from "../assets/new.png";
import image8 from "../assets/lakwimana.png";
import image9 from "../assets/research.png";
import { TfiWorld } from "react-icons/tfi";

const projects = [
  {
    title: "Online Beauty Salon Booking System",
    description:
      "This makes it quick and easy for customers to book an appointment with the hairdresser they want and get the goods they need..",
    technologies: ["HTML", "CSS3", "Javascript",],
    category: "Web",
    link: "https://github.com/ranthilina99/Stylish-Beauty-Salon",
    image: image1,
    others: [

    ],
  },
  {
    title: "Employee Management System",
    description:
      "A standalone system as well as an online web application where managers can manage almost all the tasks regarding employee management asEmployee attendance, salary, etc.",
    technologies: ["JSP", "MySQL"],
    category: "Web",
    link: "https://github.com",
    image: image2,
    others: [

    ],
  },
  {
    title: "Online PetCare Application",
    description:
      "An Android system that can perform everyday tasks related to essential goods and pet health for pets.",
    technologies: ["Android(java)", "Firebase"],
    category: "Mobile",
    link: "https://github.com/ranthilina99/Pet-Care-App",
    image: image3,
    others: [
      { link: "https://www.linkedin.com/posts/umesh-ranthilina-209b071a1_mobile-application-development-2020-group-ugcPost-6718515233129926656-CEJm", name: "Watch Video", icon: "fa-solid fa-globe", status: "button", color: "bg-blue-500" },
    ],
  },
  {
    title: "Hotel Management System",
    description:
      "A standalone system as well as an online Desktop application where managers can manage almost all the tasks regarding hotel management as Employee attendance, salary, bill calculation, room booking, etc.",
    technologies: ["C#", "SQL", "NET (framework Entities)"],
    category: "Web",
    link: "https://github.com/ranthilina99/Sarasi_HMS",
    image: image4,
    others: [

    ],
  },
  {
    title: "Conference Management System",
    description:
      "Conference Management System developed making the using of REST API technologies with the help of ExpressJS to develop the backend services and ReactJS,or Parcel for the front-end components. The developed project provides the features and functionalities to the users which mainly consist of User, Reviewer, Editor,Guest, and Administrator user roles. Includes client-sideand server-side authentications utilizing JWT tokens and well thought about the security with encrypted data.",
    technologies: ["React.js", "Express.js", "REST API", "Bootstrap", "Node JS", "MongoDB"],
    category: "Web",
    link: "https://github.com/Salika952/AF-Project",
    image: image5,
    others: [

    ],
  },
  {
    title: "Gym Management System",
    description:
      "The gym management system developed the use of Rest API technologies with the help of React JS and ExpressJS for the front and back features to enhance the background services. The developed project provides users with features and activities that are primarily user, employee, and admin user roles. Includes client-side using JWT tokens and security considerations with client-side authentication and encrypted data.",
    technologies: ["React.js", "Express.js", "REST API", "Bootstrap", "Node JS", "MongoDB"],
    category: "Web",
    link: "https://github.com/ranthilina99/SPM_PROJECT",
    image: image6,
    others: [

    ],
  },
  {
    title: "E-commerce Mobile Application",
    description:
      "The primary objective of this application is to enable site managers to control their procurement of goods directly and independently, without the industry common practice of being reliant upon office-based staff to make orders, manages the demand for the goods required on his site from suppliers by initiate the chain of events that result in the creation of a purchase order is a used Android system.",
    technologies: ["Android(Java)", "Firebase(Firestore)"],
    category: "Mobile",
    link: "https://github.com/Yasoja44/CSSEProject",
    image: image7,
    others: [

    ],
  },
  {
    title: "Lakwimana Mobile App",
    description:
      "An on-time activation e-commerce application for essential material requirements for ordering and delivering goods Android system.",
    technologies: ["Android(Java)", "Firebase(RealtimeDatabase)"],
    category: "Mobile",
    link: "https://github.com/ranthilina99/UEE-Project",
    image: image8,
    others: [
    ],
  },
  {
    title: "E-KETHA”: Enriching Rice Farmer's Quality of Life through a Mobile Application",
    description:
      "The mobile application detects problems of farmers such as rice,pets,disease,weed identification,amount of fertilizer and measurement of rice plants",
    technologies: ["Machine Learning", "Image Processing", "Python", "Android", "Firebase"],
    category: "Mobile",
    link: "https://github.com/ranthilina99/research",
    image: image9,
    others: [
      { link: "https://shehanblast.github.io/E-ketha-web/", name: "Visit Website", icon: "fa-solid fa-globe", status: "button", color: "bg-blue-500" },
      { link: "https://www.ijcaonline.org/archives/volume184/number33/jayasundara-2022-ijca-922364.pdf", name: "Research Paper", icon: "fas fa-book", status: "button", color: "bg-blue-600" },
    ],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Card className="shadow-lg rounded-lg">
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaFolderOpen className="text-blue-500" size={28} />
            Projects
          </h2>
          {/* Filters - Hidden on Mobile */}
          <div className="hidden md:flex space-x-4">
            {["All", "Web", "Mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium ${selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="border border-gray-200 rounded-lg">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Left Side Image */}
                  <div className="sm:w-1/3 w-full">
                    <div className="relative w-72 h-64 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Right Side Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:underline"
                    >
                      View on GitHub
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    {project.others?.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700">Additional Links:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.others.map((other, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              {/* Button or Link with Icon */}
                              {other.status === "button" ? (
                                <button
                                  type="button"
                                  onClick={() => window.open(other.link, "_blank")}
                                  className={`flex items-center gap-2 px-3 py-1 text-white ${other.color} rounded-md hover:opacity-80 transition duration-300 text-xs`}
                                >
                                  <i className={`${other.icon} text-white`}></i>
                                  {other.name}
                                </button>
                              ) : (
                                <a
                                  href={other.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-center gap-2 px-3 py-1 text-white ${other.color} rounded-md hover:opacity-80 transition duration-300 text-xs`}
                                >
                                  <i className={`${other.icon} text-white`}></i>
                                  {other.name}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
