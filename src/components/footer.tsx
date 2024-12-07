import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-600 to-gray-800 py-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Umesh Ranthilina</h3>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/umesh.ranthilina.902"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fumesh90181268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/umesh-ranthilina-209b071a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/ranthilina99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Centered Copyright Text */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            &copy; Copyright 2025 Umesh Ranthilina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
