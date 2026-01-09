import React from 'react';
import Image from 'next/image';

const PhilosophySection: React.FC = () => {
  const philosophies = [
    {
      title: "Технический опыт",
      description: "Проектируя, создавая, тестируя и поддерживая все наше оборудование, мы имеем непревзойденный контроль над качеством и надежностью наших услуг."
    },
    {
      title: "Персонализированный подход",
      description: "Наша философия основана на глубоком техническом опыте и персонализированном взаимодействии с клиентами."
    },
    {
      title: "Превосходная производительность",
      description: "Комплексный подход позволяет нам обеспечивать превосходную производительность, на которую могут рассчитывать наши клиенты."
    }
  ];

  return (
    <section className="flex justify-center items-center min-h-[900px] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/gpu-center.jpeg" 
            alt="Дата-центр GPU"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text Column */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Наша философия</h2>
          <p className="text-foreground mb-8">
            В AUTOMATICO мы стремимся не только предоставлять передовые решения для GPU, но и трансформировать то, 
            как наши клиенты воспринимают технологии.
          </p>
          <div className="space-y-8">
            {philosophies.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-1 bg-accent mr-4"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
