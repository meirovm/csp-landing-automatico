import React from "react";
import Link from "next/link";

const JoinUsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[600px] px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Присоединяйтесь к нам
        </h2>
        <p className="text-foreground/70 text-lg mb-12 leading-relaxed">
          Присоединяйтесь к сообществу, где технологии сочетаются с доверием, производительность с прозрачностью,
          а отношения с клиентами ценятся превыше всего. В AUTOMATICO мы видим себя не просто вашим поставщиком услуг,
          но и вашим преданным партнером в навигации по сложному миру вычислений на GPU.
          Позвольте нам усилить ваши проекты решениями, которые тщательно разработаны с учетом ваших конкретных потребностей.
        </p>
        
        <div className="mb-12">
          <p className="text-foreground font-semibold text-xl mb-4">
            Испытайте разницу с AUTOMATICO
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Откройте для себя сервис, где передовые технологии сочетаются с
            непоколебимым доверием и прозрачностью. Взаимодействуйте с нами и давайте
            доведем ваши проекты до их полного потенциала, чтобы каждое решение
            было не только эффективным, но и эталоном само по себе.
          </p>
        </div>

        <Link 
          href="/console" 
          className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-md transition-colors duration-200 text-lg hover:bg-primary-dark hover:text-foreground"
        >
          Начать сейчас
        </Link>
      </div>
    </section>
  );
};

export default JoinUsSection;
