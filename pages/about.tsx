import { NextSeo } from 'next-seo';
import React from "react";
import Navbar from "../components/Navbar";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import PhilosophySection from "../components/PhilosophySection";
import FounderSection from "../components/FounderSection";
import JoinUsSection from "../components/JoinUsSection";

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <NextSeo
      title="О нас AUTOMATICO | GPU в дата-центре без посредников"
      description="Узнайте, как AUTOMATICO предлагает GPU в дата-центре. ИИ, машинное обучение и майнинг криптовалют."
      openGraph={{
        url: 'https://automatico.kz/about',
        title: 'О нас AUTOMATICO | GPU в дата-центре без посредников',
        description: 'Узнайте, как AUTOMATICO предлагает GPU.',
      }}
      additionalMetaTags={[
        {
        name: 'keywords',
        content: 'AUTOMATICO, GPU в дата-центре, прямая аренда GPU, без посредников, вычисления ИИ, машинное обучение, майнинг криптовалют, [[Keywords]]'
        }
      ]}
      />
      <Navbar />
      <div className="pt-10">
      <AboutUsHeroSection />
      <PhilosophySection />
      <FounderSection />
      <JoinUsSection />
      </div>
    </div>
  );
};

export default AboutUsPage;
