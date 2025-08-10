import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import HeroSection from "~/components/HeroSection";
import ServicesSection from "~/components/ServicesSection";
import PopularClassesSection from "~/components/PopularClassesSection";
import TutorsSection from "~/components/TutorsSection";
import TestimonialSection from "~/components/TestimonialSection";
import RecentBlogsSection from "~/components/BlogCard";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('images/coolbackgrounds-fractalize-bleach.png')] ">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PopularClassesSection />
      <TutorsSection />
      <TestimonialSection />
      <RecentBlogsSection />
      <Footer />
    </main>
  );
}
