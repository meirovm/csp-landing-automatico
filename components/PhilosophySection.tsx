import React from "react";
import "../app/globals.css";

const PhilosophySection: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="">
        <h2 className="text-7xl font-extrabold text-white">Наша философия</h2>
        <p className="mt-10 max-w-7xl text-xl font-light text-[#717177]">
          В AUTOMATICO мы стремимся не только предоставлять передовые решения для GPU, но и трансформировать то, 
          как наши клиенты воспринимают технологии. Наша философия основана на глубоком техническом опыте и персонализированном взаимодействии с клиентами. 
          Проектируя, создавая, тестируя и поддерживая все наше оборудование, мы имеем непревзойденный контроль над качеством и надежностью наших услуг. 
          Этот комплексный подход позволяет нам обеспечивать превосходную производительность, на которую могут рассчитывать наши клиенты.
        </p>
      </div>
    </div>
  );
};

export default PhilosophySection;
