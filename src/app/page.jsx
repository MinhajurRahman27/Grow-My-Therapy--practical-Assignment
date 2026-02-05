import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </header>
    </div>
  );
}
