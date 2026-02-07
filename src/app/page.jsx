import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import SecondSection from "./Components/SecondSection";
import Specialities from "./Components/Specialities";
import SuggestionSection from "./Components/SuggestionSection";
import Footer from "./Components/Footer";
import IntroductionSection from "./Components/IntroductionSection";

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
        {/* <Footer></Footer> */}
      </header>
    </div>
  );
}
