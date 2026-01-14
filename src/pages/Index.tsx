import HeroSection from "@/components/lp/HeroSection";
import PainPointsSection from "@/components/lp/PainPointsSection";
import SolutionSection from "@/components/lp/SolutionSection";
import SocialProofSection from "@/components/lp/SocialProofSection";
import ModulesSection from "@/components/lp/ModulesSection";
import BonusCRCSection from "@/components/lp/BonusCRCSection";
import InstructorSection from "@/components/lp/InstructorSection";
import OfferSection from "@/components/lp/OfferSection";
import GuaranteeSection from "@/components/lp/GuaranteeSection";
import FAQSection from "@/components/lp/FAQSection";
import FooterSection from "@/components/lp/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <SocialProofSection />
      <ModulesSection />
      <BonusCRCSection />
      <InstructorSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;