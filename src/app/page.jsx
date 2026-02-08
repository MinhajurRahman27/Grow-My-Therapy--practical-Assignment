import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import SecondSection from "./Components/SecondSection";
import Specialities from "./Components/Specialities";
import SuggestionSection from "./Components/SuggestionSection";
import Footer from "./Components/Footer";
import IntroductionSection from "./Components/IntroductionSection";
import FAQ from "./Components/FAQ";
import ProfessionalBackground from "./Components/ProfessionalBackground";
import GetStartedTodaySection from "./Components/GetStartedTodaySection";
import Info from "./Components/Info";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <SecondSection></SecondSection>
        <Specialities></Specialities>
        <SuggestionSection></SuggestionSection>
        <IntroductionSection></IntroductionSection>
        <FAQ></FAQ>
        <ProfessionalBackground></ProfessionalBackground>
        <GetStartedTodaySection></GetStartedTodaySection>
        <Info></Info>
        <Footer></Footer>
      </header>
    </div>
  );
}
