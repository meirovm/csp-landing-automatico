import { NextSeo } from 'next-seo';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import "../app/globals.css";

export default function Home() {
 return (
   <div>
     <NextSeo
       title="Datacenter-Hosted GPUs | Direct Rental, No Middlemen"
       description="Rent GPUs on-demand directly from datacenter for AI, ML, and crypto mining"
       openGraph={{
         url: 'https://[[Domain]]',
         title: '[[Brand]] - Datacenter-Hosted GPUs',
         description: 'Rent GPUs on-demand directly from datacenter for AI, ML, and crypto mining',
       }}
       additionalMetaTags={[
         {
           name: 'keywords',
           content: '[[Brand]], datacenter-hosted GPUs, direct GPU rental, no middlemen, AI computing, machine learning, cryptocurrency mining, [[Keywords]]'
         }
       ]}
     />
     <Navbar />
     <div className="pt-12">
       <HeroSection />
       <Pricing />
       <Testimonials />
       <FAQ />
     </div>
   </div>
 );
}