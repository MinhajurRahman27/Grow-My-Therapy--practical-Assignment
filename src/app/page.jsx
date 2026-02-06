import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import SecondSection from "./Components/SecondSection";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <SecondSection></SecondSection>
      </header>
    </div>
  );
}
