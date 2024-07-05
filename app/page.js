import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}
