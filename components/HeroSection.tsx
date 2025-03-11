import React from "react";
import Button from "./foundational/Button";
import Link from "./foundational/Link";

const HeroSection: React.FC = () => {
  return (
    <div
      className="flex min-h-screen w-full max-w-none flex-col items-center justify-center bg-black px-4 text-center relative"
      style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Темный наложение */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* Контент */}
      <div className="relative z-10 max-w-5xl">
      <h1 className="text-5xl font-extrabold leading-snug text-white sm:text-5xl md:text-6xl tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
        GPU в дата-центрах <span className="text-blue-400">Казахстана</span>
      </h1>

      <p className="mt-2 text-base text-gray-200 sm:text-2xl font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
        Арендуйте напрямую у владельца дата-центра без посредников<br/>
      </p>

      <p className="mt-2 text-base text-gray-300 sm:text-xl font-medium tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
        Без обязательств. Без скрытых или неожиданных сборов. Аренда по минутам.<br/>
        Дизайн Tier 2-3: резервное питание, охлаждение и сеть<br/>
      </p>

      <Link href="/console">
        <Button
        className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-lg text-[#191970] transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:transform hover:scale-105"
        >
        Арендовать GPU сейчас
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default HeroSection;