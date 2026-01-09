import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AboutHeroSection from '@/components/AboutHeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import FounderSection from '@/components/FounderSection';
import JoinUsSection from '@/components/JoinUsSection';

const About = () => {
  return (
    <>
      <Head>
        <title>О нас AUTOMATICO | GPU в дата-центре Казахстана без посредников</title>
        <meta
          name="description"
          content="Узнайте, как AUTOMATICO предлагает GPU в дата-центре Казахстана. Прямой доступ к оборудованию для ИИ, машинного обучения. Более 18 лет опыта в корпоративном секторе."
        />
        <meta
          name="keywords"
          content="AUTOMATICO о компании, GPU дата-центр Казахстан, прямая аренда GPU, без посредников, вычисления ИИ, машинное обучение, инфраструктура ИИ, дата-центр Казахстан"
        />
        <link rel="canonical" href="https://automatico.kz/about" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="О нас AUTOMATICO | GPU в дата-центре без посредников" />
        <meta property="og:description" content="Узнайте, как AUTOMATICO предлагает GPU в дата-центре Казахстана. Прямой доступ к оборудованию для ИИ и машинного обучения." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatico.kz/about" />
        <meta property="og:site_name" content="AUTOMATICO" />
        <meta property="og:image" content="https://automatico.kz/logo1.png" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О нас AUTOMATICO | GPU в дата-центре без посредников" />
        <meta name="twitter:description" content="Узнайте, как AUTOMATICO предлагает GPU в дата-центре Казахстана для ИИ и машинного обучения." />
        <meta name="twitter:image" content="https://automatico.kz/logo1.png" />

        {/* About Page Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'О нас AUTOMATICO',
              description: 'AUTOMATICO - инновационный поставщик GPU хостинга в Казахстане с более чем 18-летним опытом в корпоративном секторе.',
              url: 'https://automatico.kz/about',
              mainEntity: {
                '@type': 'Organization',
                name: 'AUTOMATICO',
                description: 'GPU хостинг и вычислительные решения в дата-центрах Казахстана',
                foundingLocation: {
                  '@type': 'Place',
                  name: 'Казахстан',
                },
              },
            }),
          }}
        />
      </Head>

      <Navbar />
      <AboutHeroSection />
      <PhilosophySection />
      <FounderSection />
      <JoinUsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default About;
