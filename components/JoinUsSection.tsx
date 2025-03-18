import React from "react";
import "../app/globals.css";

const JoinUsSection: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">Присоединяйтесь к нам</h2>
        <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl font-light text-[#717177]">
          Присоединяйтесь к сообществу, где технологии сочетаются с доверием, производительность с прозрачностью,
          а отношения с клиентами ценятся превыше всего. В AUTOMATICO мы видим себя не просто вашим поставщиком услуг,
          но и вашим преданным партнером в навигации по сложному миру вычислений на GPU.
          Позвольте нам усилить ваши проекты решениями, которые тщательно разработаны с учетом ваших конкретных потребностей.
        </p>
        <p className="mt-8 sm:mt-20 text-base sm:text-lg md:text-xl font-bold text-[#B2B2B2]">
          Испытайте разницу с AUTOMATICO
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-light text-[#717177]">
          Откройте для себя сервис, где передовые технологии сочетаются с
          непоколебимым доверием и прозрачностью. Взаимодействуйте с нами и давайте
          доведем ваши проекты до их полного потенциала, чтобы каждое решение
          было не только эффективным, но и эталоном само по себе.
        </p>
      </div>
    </div>
  );
};

export default JoinUsSection;
