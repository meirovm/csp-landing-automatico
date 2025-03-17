// Pricing.tsx
import React from "react";
import GPURentalCard from "./GPURentalCard";
import { NextSeo } from 'next-seo';
import { useLowestPrices } from "./GPUInfoFetch";

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonStyleExtras?: string;
  link: string;
}

const Pricing: React.FC = () => {
  const { lowestPrices, loading } = useLowestPrices();

  const getPrice = (type: "rtx4090" | "rtx5090" | "rtx6000" | "l40" | "a100" | "h100" | "h200" | "cpu") => {
    if (loading) return "Загрузка...";
    if (!lowestPrices || lowestPrices[type] === null) return "Цена недоступна";

    if (type === "cpu") {
      const price = lowestPrices.cpu;
      if (price === null) {
        return "Цена недоступна";
      }
      return `${price.toFixed(2)}¢ / vcpu hour`;
    }
    else {
      const price = lowestPrices[type];
      if (price === null) {
        return "Цена недоступна";
      }
      return `$${(price / 100).toFixed(2)} / per hour`;
    }
  };

  const datacenterPricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "NVidia H200",
      price: getPrice("h200"),
      description: "Революционные возможности ИИ",
      features: [
        "141GB HBM3e VRAM",
        "Архитектура NVIDIA Hopper",
      ],
      buttonLabel: "Доступно с апреля 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 2,
      name: "NVidia H100",
      price: getPrice("h100"),
      description: "Высочайшая производительность",
      features: [
        "96GB HBM2e VRAM",
        "Архитектура NVIDIA Hopper",
      ],
      buttonLabel: "Доступно с апреля 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 3,
      name: "NVidia A100",
      price: getPrice("a100"),
      description: "Доступное обучение моделей ИИ",
      features: [
        "80GB VRAM",
        "Архитектура NVIDIA Ampere",
      ],
      buttonLabel: "Свяжитесь с нами",
      link: "#",
    },
    {
      id: 4,
      name: "NVidia L40S",
      price: getPrice("l40"),
      description: "Экономичное выполнение инференса",
      features: [
        "48GB VRAM",
        "Архитектура NVIDIA Ada",
      ],
      buttonLabel: "Доступно с апреля 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
  ];

  const consumerPricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "RTX 6000 Ada",
      price: getPrice("rtx6000"),
      description: "Максимальная производительность рендеринга",
      features: [
        "48GB VRAM",
        "Инференс больших моделей"
      ],
      buttonLabel: "Доступно с апреля 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 2,
      name: "GeForce RTX 5090",
      price: getPrice("rtx5090"),
      description: "Максимальная производительность в играх",
      features: [
        "32GB GDDR7 VRAM",
        "Ультра-быстрый AI инференс"
      ],
      buttonLabel: "Доступно с апреля 2025",
      buttonStyleExtras: "border-[#aaaaaa] text-[#aaaaaa] font-bold",
      link: "#",
    },
    {
      id: 3,
      name: "GeForce RTX 4090",
      price: getPrice("rtx4090"),
      description: "Высокая производительность в играх",
      features: [
        "24GB VRAM",
        "Лучшее соотношение цены и производительности для AI инференса"
      ],
      buttonLabel: "Арендуй GPU Сейчас",
      link: "/console",
    }
  ];

  const extraPricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Процессоры по запросу",
      price: getPrice("cpu"),
      description: "Масштабируемая вычислительная мощность для интенсивных рабочих нагрузок",
      features: [
        "Процессоры AMD EPYC",
        "До 192 ядер CPU",
        "Оптимизировано для многопоточных приложений"
      ],
      buttonLabel: "Арендуй CPU Сейчас",
      link: "/console",
    },
    {
      id: 2,
      name: "Выделенные решения",
      price: "Индивидуальная цена",
      description: "Настраиваемые конфигурации для специализированных нужд",
      features: [
        "Полная настройка оборудования",
        "Решения Bare metal и VDS",
        "Выделенная поддержка и управление кластерами"
      ],
      buttonLabel: "Свяжитесь с нами",
      link: "#contactus",
    },
  ];

  return (
    <div className="min-h-4/5 flex items-center justify-center bg-black" id="pricing">
      <NextSeo
      title="Цены на аренду GPU | На 85% дешевле для GPU в дата-центрах"
      description="Доступные цены на аренду GPU для ИИ, машинного обучения и майнинга криптовалют. Арендуйте GPU в дата-центрах без посредников, без обязательств и скрытых платежей. Дизайн Tier 3 с высокоскоростной сетью."
      openGraph={{
        title: 'Цены на аренду GPU | На 85% дешевле для GPU в дата-центрах',
        description: 'Просмотрите наши доступные цены на аренду GPU. На 85% дешевле, чем у конкурентов, без посредников, без обязательств. Высокоскоростная сеть, идеально подходит для ИИ, машинного обучения и майнинга криптовалют.',
      }}
      additionalMetaTags={[
        {
        name: 'keywords',
        content: 'цены на аренду GPU, RTX 4090, RTX 5090, GPU в дата-центрах, стоимость вычислений для ИИ, цены на оборудование для машинного обучения, стоимость майнинга криптовалют, без посредников, без обязательств, дизайн Tier 3, высокоскоростная сеть'
        }
      ]}
      />

      <div className="w-full max-w-7xl px-2 py-12 text-white">
      <h2 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
        Высокопроизводительные <span className="text-blue-400">Дата-центр</span> GPU
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {datacenterPricingPlans.map((plan, index) => (
        <div
          key={plan.id}
          className={`w-90 ${
          index === 2 ? "rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-[1px]" : ""
          }`}
        >
          <GPURentalCard
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          buttonLabel={plan.buttonLabel}
          buttonStyleExtras={plan.buttonStyleExtras}
          link={plan.link}
          />
        </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <h3 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
        <span className="text-blue-400">Доступные</span> GPU для рабочих станций и игр
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {consumerPricingPlans.map((plan, index) => (
        <div
          key={plan.id}
          className={`w-90 ${
          index === 2 ? "rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-[1px]" : ""
          }`}
        >
          <GPURentalCard
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          buttonLabel={plan.buttonLabel}
          buttonStyleExtras={plan.buttonStyleExtras}
          link={plan.link}
          />
        </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <h3 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
        CPU Инстансы и <span className="text-blue-400">Другие Услуги</span>
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {extraPricingPlans.map((plan, index) => (
        <div
          key={plan.id}
          className={`w-90 ${
          index === 1 ? "rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-[1px]" : ""
          }`}
        >
          <GPURentalCard
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          buttonLabel={plan.buttonLabel}
          buttonStyleExtras={plan.buttonStyleExtras}
          link={plan.link}
          />
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Pricing;