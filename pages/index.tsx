import { NextSeo } from 'next-seo';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import "../app/globals.css";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Home() {
 return (
   <div>
     <NextSeo
       title="Datacenter-Hosted GPUs | Direct Rental, No Middlemen"
       description="Rent GPUs on-demand directly from datacenter for AI, ML, and crypto mining"
       openGraph={{
         url: 'https://automatico.kz',
         title: 'AUTOMATICO - Datacenter-Hosted GPUs',
         description: 'Rent GPUs on-demand directly from datacenter for AI, ML, and crypto mining',
       }}
       additionalMetaTags={[
         {
           name: 'keywords',
           content: 'AUTOMATICO, datacenter-hosted GPUs, direct GPU rental, no middlemen, AI computing, machine learning, cryptocurrency mining, [[Keywords]]'
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
     <ContactUs />
      <Footer />
   </div>
 );
}