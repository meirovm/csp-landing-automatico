import React from 'react';
import Card from './Card';
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/cloudrift";

type PricingTier = 'Premium' | 'Professional' | 'Value';

interface PricingItem {
  tier?: PricingTier;
  model: string;
  specs: string;
  price: string;
  features: string[];
  buttonLabel: string;
  buttonLink?: string;
}

interface InstanceTypeInfo {
  name: string;
  brand_short: string;
  variants: {
    cost_per_hour: number;
    gpu_count: number;
    cpu_count: number;
    available_nodes: number;
  }[];
}

interface ListInstanceTypeResponse {
  instance_types: InstanceTypeInfo[];
}

interface LowestPrices {
  rtx4090: number | null;
  rtx5090: number | null;
  rtx6000: number | null;
  l40: number | null;
  a100: number | null;
  h100: number | null;
  h200: number | null;
  cpu: number | null;
}

const fetchInstanceTypes = async (): Promise<ListInstanceTypeResponse> => {
  const response = await apiRequest<{ data: ListInstanceTypeResponse }>(
    "/api/v1/instance-types/list",
    { selector: "All" }
  );
  return response.data;
};

const calculateLowestPrices = (data: ListInstanceTypeResponse): LowestPrices => {
  const rtx4090Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('4090'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const rtx5090Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('5090'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const rtx6000Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('6000'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const l40Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('L40'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const a100Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('A100'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const h100Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('H100'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const h200Prices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.brand_short.includes('H200'))
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].gpu_count);

  const cpuPrices = data.instance_types
    .filter((instance: InstanceTypeInfo) => instance.variants.find(variant => variant.gpu_count === 0) !== undefined)
    .map((instance: InstanceTypeInfo) => instance.variants[0].cost_per_hour / instance.variants[0].cpu_count);

  return {
    rtx4090: rtx4090Prices.length > 0 ? Math.min(...rtx4090Prices) : null,
    rtx5090: rtx5090Prices.length > 0 ? Math.min(...rtx5090Prices) : null,
    rtx6000: rtx6000Prices.length > 0 ? Math.min(...rtx6000Prices) : null,
    l40: l40Prices.length > 0 ? Math.min(...l40Prices) : null,
    a100: a100Prices.length > 0 ? Math.min(...a100Prices) : null,
    h100: h100Prices.length > 0 ? Math.min(...h100Prices) : null,
    h200: h200Prices.length > 0 ? Math.min(...h200Prices) : null,
    cpu: cpuPrices.length > 0 ? Math.min(...cpuPrices) : null
  };
};

const useLowestPrices = () => {
  const { data, isLoading } = useQuery<ListInstanceTypeResponse>({
    queryKey: ['instanceTypes'],
    queryFn: fetchInstanceTypes
  });

  const lowestPrices = data ? calculateLowestPrices(data) : {
    rtx4090: null,
    rtx5090: null,
    rtx6000: null,
    l40: null,
    a100: null,
    h100: null,
    h200: null,
    cpu: null
  };

  return { lowestPrices, loading: isLoading };
};

const PricingSection: React.FC = () => {
  const { lowestPrices, loading } = useLowestPrices();

  const formatPrice = (price: number | null): string => {
    if (price === null) return 'Цена недоступна';
    return `$${(price / 100).toFixed(2)}`;
  };

  const formatCpuPrice = (price: number | null): string => {
    if (price === null) return 'Цена недоступна';
    return `${price.toFixed(2)}¢`;
  };

  // Datacenter GPUs
  const datacenterPricing: PricingItem[] = [
    {
      tier: 'Premium',
      model: 'NVidia H200',
      specs: '141GB HBM3e VRAM',
      price: formatPrice(lowestPrices.h200),
      features: [
        'Революционные возможности ИИ',
        'Архитектура NVIDIA Hopper',
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Доступно с апреля 2025'
    },
    {
      tier: 'Premium',
      model: 'NVidia H100',
      specs: '96GB HBM2e VRAM',
      price: formatPrice(lowestPrices.h100),
      features: [
        'Высочайшая производительность',
        'Архитектура NVIDIA Hopper',
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Доступно с апреля 2025'
    },
    {
      tier: 'Professional',
      model: 'NVidia A100',
      specs: '80GB VRAM',
      price: formatPrice(lowestPrices.a100),
      features: [
        'Доступное обучение моделей ИИ',
        'Архитектура NVIDIA Ampere',
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Свяжитесь с нами',
      buttonLink: '#contact'
    },
    {
      tier: 'Professional',
      model: 'NVidia L40S',
      specs: '48GB VRAM',
      price: formatPrice(lowestPrices.l40),
      features: [
        'Экономичное выполнение инференса',
        'Архитектура NVIDIA Ada',
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Доступно с апреля 2025'
    }
  ];

  // Consumer GPUs
  const consumerPricing: PricingItem[] = [
    {
      tier: 'Value',
      model: 'RTX 6000 Ada',
      specs: '48GB VRAM',
      price: formatPrice(lowestPrices.rtx6000),
      features: [
        'Максимальная производительность рендеринга',
        'Инференс больших моделей'
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Доступно с апреля 2025'
    },
    {
      tier: 'Value',
      model: 'GeForce RTX 5090',
      specs: '32GB GDDR7 VRAM',
      price: formatPrice(lowestPrices.rtx5090),
      features: [
        'Максимальная производительность в играх',
        'Ультра-быстрый AI инференс'
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Доступно с апреля 2025'
    },
    {
      tier: 'Value',
      model: 'GeForce RTX 4090',
      specs: '24GB VRAM',
      price: formatPrice(lowestPrices.rtx4090),
      features: [
        'Высокая производительность в играх',
        'Лучшее соотношение цены и производительности для AI инференса'
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Арендуй GPU Сейчас',
      buttonLink: '/console'
    }
  ];

  // Extra services
  const extraPricing: PricingItem[] = [
    {
      model: 'Процессоры по запросу',
      specs: 'Процессоры AMD EPYC',
      price: formatCpuPrice(lowestPrices.cpu) + ' / vcpu',
      features: [
        'Масштабируемая вычислительная мощность для интенсивных рабочих нагрузок',
        'До 192 ядер CPU',
        'Оптимизировано для многопоточных приложений'
      ],
      buttonLabel: loading ? 'Загрузка...' : 'Арендуй CPU Сейчас',
      buttonLink: '/console'
    },
    {
      model: 'Выделенные решения',
      specs: 'Полная настройка оборудования',
      price: 'Индивидуально',
      features: [
        'Полная настройка оборудования',
        'Решения Bare metal и VDS',
        'Выделенная поддержка и управление кластерами'
      ],
      buttonLabel: 'Свяжитесь с нами',
      buttonLink: '#contact'
    }
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        {/* Datacenter GPUs */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Высокопроизводительные <span className="text-accent">Дата-центр</span> GPU
          </h2>
          <p className="text-foreground/60 text-xl">Выберите из нашего широкого ассортимента NVIDIA GPU</p>
        </div>
        <div className="flex flex-col gap-6 max-w-8xl mx-auto lg:grid lg:grid-cols-4 lg:gap-7 mb-20">
          {datacenterPricing.map((pricing, index) => (
            <Card
              key={index}
              variant="pricing"
              {...pricing}
            />
          ))}
        </div>

        {/* Consumer GPUs */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-accent">Доступные</span> GPU для рабочих станций и игр
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-5xl mx-auto lg:grid lg:grid-cols-3 lg:gap-7 mb-20">
          {consumerPricing.map((pricing, index) => (
            <Card
              key={index}
              variant="pricing"
              {...pricing}
            />
          ))}
        </div>

        {/* Extra Services */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            CPU Инстансы и <span className="text-accent">Другие Услуги</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto lg:grid lg:grid-cols-2 lg:gap-7">
          {extraPricing.map((pricing, index) => (
            <Card
              key={index}
              variant="pricing"
              {...pricing}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

