// GPURentalCard.tsx
import React from "react";
import Link from "./foundational/Link";
import Button from "./foundational/Button";

interface CardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  className?: string;
  buttonLabel?: string;
  buttonStyleExtras?: string;
  link: string;
}

const GPURentalCard: React.FC<CardProps> = ({
  name,
  price,
  description,
  features,
  className = "",
  buttonLabel = "",
  buttonStyleExtras = "border-white font-bold text-white",
  link,
}) => {
  return (
    <div
      className={`w-full md:w-1/2 lg:w-1/3 h-140 mx-auto max-w-sm rounded-xl bg-zinc-900 p-6 text-white shadow-lg transition duration-300 hover:bg-gray-800 ${className} group`}
    >
      <div className="font mb-2 text-xl">{name}</div>
      <div className="mb-4 text-3xl font-bold">{price}</div>
      <div className="mb-6 text-sm text-zinc-400">{description}</div>
      <hr className="mx-auto my-10 h-0.5 rounded border-0 bg-gray-100 dark:bg-gray-700"></hr>
      <ul className="mb-6 list-disc pl-5">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link href={link}>
        <Button className={`w-full rounded-full border bg-zinc-900 px-4 py-4 transition-colors duration-200 group-hover:border-transparent group-hover:bg-[#191970] ${buttonStyleExtras}`}>
          {buttonLabel || "Rent a GPU Now"}
        </Button>
      </Link>
    </div>
  );
};


export default GPURentalCard;
