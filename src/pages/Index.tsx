import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
// import ExperienceSection from "@/components/sections/ExperienceSection"; // Comentado - será adicionado quando houver experiência profissional
import EducationSection from "@/components/sections/EducationSection";
import ResearchSection from "@/components/sections/ResearchSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <EducationSection />
        <ResearchSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
