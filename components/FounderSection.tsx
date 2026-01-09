import React from "react";
import Image from "next/image";

const FounderSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center min-h-[700px] px-4 py-20 bg-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src="/founder-image.png"
              alt="Основатель"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Label White</h3>
            <p className="text-foreground/70">Owner and Your Guide</p>
          </div>
        </div>

        {/* Text Column */}
        <div>
          <h2 className="text-4xl md:text-6xl font-medium text-foreground mb-8">Основатель</h2>
          <p className="text-foreground/80 text-xl font-light leading-relaxed">
            ХХХХХХХ имеет более 18-лет опыт работы в корпоративном секторе Казахстана в области разработки приложений, 
            компьютерного оборудования и эксплуатации дата-центров, 
            разработки инфраструктуры ИИ и страсть к решениям для вычислений ИИ. 
            Его обширный опыт и практический подход в области оборудования и инфраструктуры, 
            а также ориентация на клиента стали движущей силой успеха AUTOMATICO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
