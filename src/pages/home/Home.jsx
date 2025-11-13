import Hero from "./Hero";
import ServicesSection from "./ServicesSection"; // your JSON card section
import WinterTips from "./WinterTips";
import ExpertVets from "./ExpertVets";
import ExtraSection from "./ExtraSection";

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Hero />
      <ServicesSection />
      <WinterTips />
      <ExpertVets />
      <ExtraSection />
    </div>
  );
}
