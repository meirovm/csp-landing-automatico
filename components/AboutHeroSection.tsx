import React from 'react';

const AboutHeroSection: React.FC = () => {
  return (
    <section 
      className="pt-24 pb-16 px-4 min-h-screen flex flex-col justify-center"
      style={{
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0.04) 50%, rgba(58, 58, 58, 0.20) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          GPU-Powered Innovation
        </h1>
        <p className="text-base md:text-lg text-foreground max-w-2xl">
          В AUTOMATICO мы не просто поставщик услуг хостинга GPU — мы новаторы в сложном мире технологий. 
          Наш подход выходит за рамки традиционных услуг. 
          Мы предлагаем трансформационные решения, адаптированные к уникальным вычислительным потребностям каждого клиента.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;

