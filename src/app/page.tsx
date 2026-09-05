import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LearningManagementSection from "@/components/sections/LearningManagementSection";
import CorporateTrainingsSection from "@/components/sections/CorporateTrainingsSection";
import IndividualTrainingSection from "@/components/sections/IndividualTrainingSection";
import CapacityDevelopmentSection from "@/components/sections/CapacityDevelopmentSection";
import ManagementDevelopmentSection from "@/components/sections/ManagementDevelopmentSection";
import TransformationHubSection from "@/components/sections/TransformationHubSection";
import TrainingConsultantSection from "@/components/sections/TrainingConsultantSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <LearningManagementSection />

        <CorporateTrainingsSection />

        <IndividualTrainingSection />

        <CapacityDevelopmentSection />

        <ManagementDevelopmentSection />

        <TransformationHubSection />

        <TrainingConsultantSection />

        <TestimonialsSection />

        <GetInTouchSection />
      </main>

      <Footer />
    </>
  );
}