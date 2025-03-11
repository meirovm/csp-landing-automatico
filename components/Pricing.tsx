// Цены.tsx
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
  link: string;
}

const Pricing: React.FC = () => {
  const { lowestPrices, loading } = useLowestPrices();

  const getPrice = (type: "rtx4090" | "rtx5090" | "cpu") => {
    if (loading) return "Загрузка...";
    if (!lowestPrices || lowestPrices[type] === null) return "Цена недоступна";

    if (type === "rtx4090" || type === "rtx5090") {
      const price = lowestPrices[type];
      if (price === null) {
        return "Цена недоступна";
      }
      return `$${(price / 100).toFixed(2)} / в час`;
    } else if (type === "cpu") {
      const price = lowestPrices.cpu;
      if (price === null) {
        return "Цена недоступна";
      }
      return `${price.toFixed(2)}¢ / vcpu час`;
    }
    return "Цена недоступна";
  };

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Графические процессоры по запросу",
      price: getPrice("rtx4090"),
      description: "Элитная производительность для сложных проектов",
      features: [
        "Серверы NVidia RTX 4090",
        "Запуск контейнеризованных рабочих нагрузок",
        "Универсальные инструменты для управления и мониторинга кластеров"
      ],
      buttonLabel: "Арендовать GPU сейчас",
      link: "/console",
    },
    {
      id: 2,
      name: "GeForce RTX 5090",
      price: getPrice("rtx5090"),
      description: "Революционные возможности с беспрецедентной мощностью ИИ",
      features: [
        "32 ГБ памяти GDDR7",
        "Архитектура NVIDIA Blackwell",
        "Высочайшая производительность в области глубокого обучения"
      ],
      buttonLabel: "Доступно с февраля 2025",
      link: "#",
    },
    {
      id: 3,
      name: "Процессоры по запросу",
      price: getPrice("cpu"),
      description: "Масштабируемая вычислительная мощность для интенсивных рабочих нагрузок",
      features: [
        "Процессоры AMD EPYC",
        "До 192 ядер ЦП",
        "Оптимизировано для многопоточных приложений"
      ],
      buttonLabel: "Арендовать CPU сейчас",
      link: "/console",
    },
    {
      id: 4,
      name: "Выделенные решения",
      price: "Индивидуальная цена",
      description: "Настраиваемые конфигурации для специализированных нужд",
      features: [
        "Полная настройка оборудования",
        "Решения Bare metal и VDS",
        "Выделенная поддержка и управление аккаунтом"
      ],
      buttonLabel: "Свяжитесь с нами",
      link: "#contactus",
    },
  ];

  return (
    <div className="min-h-4/5 flex items-center justify-center bg-black" id="pricing">
      <NextSeo
      title="Аренда GPU размещенных в дата-центрах Казахстана"
      description="Доступные цены на аренду GPU для ИИ, машинного обучения и майнинга криптовалют. Арендуйте размещенные в дата-центре GPU без посредников, без обязательств и скрытых платежей."
      openGraph={{
        title: 'Аренда GPU размещенных в дата-центрах Казахстана',
        description: 'Посмотрите наши доступные цены на аренду GPU. Дешевле чем у конкурентов, без посредников, без обязательств. Высокоскоростная сеть, идеально подходит для ИИ, машинного обучения и майнинга криптовалют.',
      }}
      additionalMetaTags={[
        {
        name: 'keywords',
        content: 'цены на аренду GPU, RTX 4090, RTX 5090, размещенные в дата-центре GPU, стоимость вычислений для ИИ, цены на оборудование для машинного обучения, стоимость майнинга криптовалют, без посредников, без обязательств, дизайн Tier 3, высокоскоростная сеть'
        }
      ]}
      />

      <div className="w-full max-w-7xl px-2 py-12 text-white">
      <h2 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
        Простое и гибкое ценообразование
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {pricingPlans.map((plan, index) => (
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
