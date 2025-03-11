import React from "react";
import "../app/globals.css";

const AboutUsHeroSection: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="text-7xl font-extrabold text-white ">
        GPU-Powered Innovation
      </h1>
      <p className="mt-8 max-w-7xl text-xl font-light text-[#717177]">
        В AUTOMATICO мы не просто поставщик услуг
        хостинга GPU — мы новаторы в сложном мире технологий. Наш подход выходит
        за рамки традиционных услуг. Мы предлагаем трансформационные решения,
        адаптированные к уникальным вычислительным потребностям каждого клиента.
      </p>
    </div>
  );
};

export default AboutUsHeroSection;
