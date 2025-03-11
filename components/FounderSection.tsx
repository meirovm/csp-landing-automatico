import React from "react";
import "../app/globals.css";
import Image from "next/image";

const FounderSection: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center bg-[#191970] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:mr-10 md:w-auto md:items-start">
            <Image
              src="/founder-image.png"
              alt="[[Founder]]"
              width={400}
              height={400}
              className="mb-4 h-auto"
            />
            <div className="text-center md:text-left">
              <h3 className="mb-2 mt-6 text-lg font-bold">Label White</h3>
              <p className="mb-2 text-[#BABAD4]">Owner and Your Guide</p>
            </div>
          </div>
          <div className="text-top flex w-full flex-col  md:w-auto md:items-start md:text-left">
            <h2 className="mb-6 text-6xl font-medium">Основатель</h2>
            <p className="max-w-lg text-xl font-light text-[#BABAD4]">
              ХХХХХХХ имеет более 18-лет опыт работы в корпоративном секторе Казахстана в области разработки приложений, компьютерного оборудования и эксплуатации дата-центров, 
              разработки инфраструктуры ИИ и страсть к решениям для вычислений ИИ. 
              Его обширный опыт и практический подход в области оборудования и инфраструктуры, 
              а также ориентация на клиента стали движущей силой успеха AUTOMATICO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
