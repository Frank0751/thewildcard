import { SiteShell } from "@/components/site/site-shell";
import { HeroSection } from "@/components/site/sections/hero-section";
import { MissionSection } from "@/components/site/sections/mission-section";
import { StatsSection } from "@/components/site/sections/stats-section";
import { PillarsSection } from "@/components/site/sections/pillars-section";
import { WhyYouthSection } from "@/components/site/sections/why-youth-section";
import { ProgramsSection } from "@/components/site/sections/programs-section";
import { ImpactSection } from "@/components/site/sections/impact-section";
import { CtaBand } from "@/components/site/sections/cta-band";
import { NewsletterSignup } from "@/components/site/newsletter-signup";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <PillarsSection />
      <WhyYouthSection />
      <ProgramsSection />
      <ImpactSection />
      <CtaBand />
      <NewsletterSignup />
    </SiteShell>
  );
}
