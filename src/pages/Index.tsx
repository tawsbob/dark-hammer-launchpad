
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ComingSoonSection } from '@/components/ComingSoonSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <ComingSoonSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
