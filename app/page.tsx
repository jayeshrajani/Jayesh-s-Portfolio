import dynamic from 'next/dynamic';
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


// Dynamically import ThreeCylinder to ensure it only renders on the client side
const ThreeCylinder = dynamic(() => import('@/components/ThreeCylinder'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative">
        <FloatingNav navItems={navItems} />
        {/* <ThreeCylinder />  */}
        {/* <IntroAnimation/>  */}
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
