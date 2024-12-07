import React from "react";
import { Card, CardContent } from "./ui/card";
import { FaUserAlt } from "react-icons/fa";

export function About() {
  return (
    <div className="space-y-4 text-center md:text-left">

      {/* Card Component */}
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <FaUserAlt className="text-blue-500" size={24} />
            About Me
          </h2>
          <h5 className="text-2xl font-semibold text-gray-800">
            Hello! I'm Umesh Ranthilina
          </h5>
          <h3 className="text-xl font-medium text-yellow-600 mt-2"></h3>
          <p className="text-gray-600 leading-relaxed mt-4">
            I'm a dedicated and reliable engineering undergraduate with excellent self-learning abilities. I strive to expand my knowledge and always look forward to finding interesting opportunities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
