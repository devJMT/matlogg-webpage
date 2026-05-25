import { AppPreview } from "@/components/AppPreview";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SubscribeSection } from "@/components/SubscribeSection";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main id="hovedinnhold">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <TrustSection />
        <AppPreview />
        <FAQ />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}
