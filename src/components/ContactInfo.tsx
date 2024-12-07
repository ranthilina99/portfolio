import Image from "next/image";
import { Mail, MapPin, X, Contact } from "lucide-react"; // Added X icon
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GrContact } from "react-icons/gr";

import {
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

export function ContactInfo() {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-100">
      <CardContent className="p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <GrContact className="text-blue-500" size={24} />
            Contact Me
          </h2>
          {/* Black Image */}
          <div className="flex items-center gap-2">
            {/* <Contact className="h-6 w-6 text-gray-900" /> */}
            {/* <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_XRGE9j0tQkvkYFKQU5MlZw86IXuV9TbfA&s"
              alt="Black Icon"
              width={40}
              height={40}
              className="object-cover"
            /> */}
          </div>
        </div>
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-center gap-3">
            <IoLocationSharp className="h-6 w-6 text-gray-900" />
            <span className="text-lg text-gray-700">Colombo, Sri Lanka</span>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center gap-3">
            <FaPhone className="h-6 w-6 text-gray-900" />
            <a
              href="tel:+94714914133"
              className="text-lg text-gray-700 hover:text-gray-700"
            >
              +94 71 94 84164
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="h-6 w-6 text-gray-900" />
            <a
              href="tel:+94768938710"
              className="text-lg text-gray-700 hover:text-gray-700"
            >
              +94 77 031 3651
            </a>
          </div>

          {/* Email Addresses */}
          <div className="flex items-center gap-3">
            <MdEmail className="h-6 w-6 text-gray-900" />
            <a
              href="mailto:umeshranthilina111@gmail.com"
              className="text-lg text-gray-700 hover:text-gray-700"
            >
              umeshranthilina111@gmail.com
            </a>
          </div>

          {/* Separator */}
          <Separator className="my-6 border-gray-900" />

          {/* Social Links */}
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect with Me</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/umesh-ranthilina-209b071a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-2 bg-[#0077B5] text-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <FaLinkedin size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ranthilina99"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-2 bg-[#181717] text-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <FaGithub size={20} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/umesh.ranthilina.902"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-2 bg-[#1877F2] text-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <FaFacebook size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/umesh_ranthilina/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <FaInstagram size={20} />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fumesh90181268"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-2 bg-[#1DA1F2] text-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <X size={20} />
              </a>
            </div>
          </div>


        </div>
      </CardContent>
    </Card>
  );
}
