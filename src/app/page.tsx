import { Header } from "@/components/Header";
import { ContactInfo } from "@/components/ContactInfo";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Gallery } from "@/components/Gallery";
import { Certification } from "@/components/Certification";
import { Footer } from "@/components/footer";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 sm:pt-24 md:pt-32">
        {/* Page Header */}
        <div className="mb-8 mt-2 text-center"></div>

        {/* Main Grid */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8 md:col-span-1">
            <About />
            <ContactInfo />
            <Education />
            <Certification />
            {/* <Skills /> */}
          </div>

          {/* Right Column */}
          <div className="space-y-12 md:col-span-2">
            <Experience />
           
            <Projects />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-12">
          {/* Uncomment when the Gallery component is ready */}
          {/* <Gallery /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
