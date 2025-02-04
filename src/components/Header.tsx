import Image from "next/image";
import Profile from "../assets/profile-img.jpg";
import Background from "../assets/hero-bg-new.jpg";
import { FaDownload } from "react-icons/fa";

export function Header() {
  return (
    <header
      className="relative h-80 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      <div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center text-center gap-4 
        sm:flex-row sm:items-center sm:mt-4 sm:text-left sm:left-36 sm:-translate-x-0"
      >
        <div className="rounded-full overflow-hidden border-8 border-white shadow-lg">
          <Image
            src={Profile}
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full object-cover w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl md:mt-48 sm:mt-48 sm:text-3xl md:text-4xl font-bold text-gray-900">
            Umesh Ranthilina
          </h1>
          <p className="text-lg sm:text-xl text-gray-900 mt-2">
            Full-Stack Software Engineer at Zeropoint
          </p>

          <div className="mt-18 w-full flex justify-center sm:justify-start">
            {/* <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm sm:text-lg font-semibold py-2 px-6 rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center gap-3"
            >
              <FaDownload size={20} /> {/* Beautiful download icon */}
              Download CV
            {/* </a> */} 
          </div>
        </div>
      </div>
    </header>
  );
}
