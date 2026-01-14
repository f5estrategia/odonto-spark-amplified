import { lazy, Suspense } from "react";
import HeroSection from "@/components/lp/HeroSection";
import PainPointsSection from "@/components/lp/PainPointsSection";

// Lazy load below-the-fold sections to reduce initial JS bundle
const SolutionSection = lazy(() => import("@/components/lp/SolutionSection"));
const SocialProofSection = lazy(() => import("@/components/lp/SocialProofSection"));
const ModulesSection = lazy(() => import("@/components/lp/ModulesSection"));
const BonusCRCSection = lazy(() => import("@/components/lp/BonusCRCSection"));
const InstructorSection = lazy(() => import("@/components/lp/InstructorSection"));
const OfferSection = lazy(() => import("@/components/lp/OfferSection"));
const GuaranteeSection = lazy(() => import("@/components/lp/GuaranteeSection"));
const FAQSection = lazy(() => import("@/components/lp/FAQSection"));
const FooterSection = lazy(() => import("@/components/lp/FooterSection"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <PainPointsSection />
      <Suspense fallback={null}>
        <SolutionSection />
        <SocialProofSection />
        <ModulesSection />
        <BonusCRCSection />
        <InstructorSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FooterSection />
      </Suspense>
    </main>
  );
};

export default Index;