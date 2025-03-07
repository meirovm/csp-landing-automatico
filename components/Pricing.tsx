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
  link: string;
}

const Pricing: React.FC = () => {
  const { lowestPrices, loading } = useLowestPrices();

  const getPrice = (type: "rtx4090" | "rtx5090" | "cpu") => {
    if (loading) return "Loading...";
    if (!lowestPrices || lowestPrices[type] === null) return "Price unavailable";

    if (type === "rtx4090" || type === "rtx5090") {
      const price = lowestPrices[type];
      if (price === null) {
        return "Price unavailable";
      }
      return `$${(price / 100).toFixed(2)} / per hour`;
    } else if (type === "cpu") {
      const price = lowestPrices.cpu;
      if (price === null) {
        return "Price unavailable";
      }
      return `${price.toFixed(2)}¢ / vcpu hour`;
    }
    return "Price unavailable";
  };

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "On-Demand GPUs",
      price: getPrice("rtx4090"),
      description: "Elite performance for advanced projects",
      features: [
        "NVidia RTX 4090 servers",
        "Run containerized workloads",
        "Versatile tooling for cluster management & monitoring"
      ],
      buttonLabel: "Rent a GPU Now",
      link: "/console",
    },
    {
      id: 2,
      name: "GeForce RTX 5090",
      price: getPrice("rtx5090"),
      description: "Game-changing capabilities with unprecedented AI horsepower",
      features: [
        "32GB GDDR7 memory",
        "NVIDIA Blackwell architecture",
        "Superior deep learning performance"
      ],
      buttonLabel: "Coming February 2025",
      link: "#",
    },
    {
      id: 3,
      name: "On-Demand CPUs",
      price: getPrice("cpu"),
      description: "Scalable compute power for intensive workloads",
      features: [
        "AMD EPYC processors",
        "Up to 192 CPU cores",
        "Optimized for multi-threaded applications"
      ],
      buttonLabel: "Rent a CPU Now",
      link: "/console",
    },
    {
      id: 4,
      name: "Dedicated Solutions",
      price: "Custom pricing",
      description: "Customized configurations for specialized needs",
      features: [
        "Full hardware customization",
        "Bare metal and VDS solutions",
        "Dedicated support and account management"
      ],
      buttonLabel: "Contact Us",
      link: "#contactus",
    },
  ];

  return (
    <div className="min-h-4/5 flex items-center justify-center bg-black" id="pricing">
      <NextSeo
        title="GPU Rental Pricing | 85% Less for Datacenter-Hosted GPUs"
        description="Affordable GPU rental pricing for AI, ML, and crypto mining. Rent datacenter-hosted GPUs with no middlemen, no commitment, and no hidden fees. Tier 3 design with high-speed network."
        openGraph={{
          title: 'GPU Rental Pricing | 85% Less for Datacenter-Hosted GPUs',
          description: 'View our affordable GPU rental pricing. 85% less than competitors, no middlemen, no commitment. High-speed network, ideal for AI, ML, and crypto mining.',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'GPU rental pricing, RTX 4090, RTX 5090, datacenter-hosted GPUs, AI computing costs, machine learning hardware pricing, cryptocurrency mining costs, no middlemen, no commitment, Tier 3 design, high-speed network'
          }
        ]}
      />

      <div className="w-full max-w-7xl px-2 py-12 text-white">
        <h2 className="mb-8 text-5xl text-center font-bold text-white sm:text-4xl md:text-5xl">
          Simple and Flexible Pricing
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
