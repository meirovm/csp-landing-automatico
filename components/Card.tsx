import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChip, HiCheck } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

interface BaseCardProps {
  variant?: 'feature' | 'testimonial' | 'faq' | 'step' | 'pricing' | 'team';
  className?: string;
}

interface FeatureCardProps extends BaseCardProps {
  variant?: 'feature';
  title: string;
  description: string;
  icon: ReactNode;
}

interface TestimonialCardProps extends BaseCardProps {
  variant: 'testimonial';
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

interface FAQCardProps extends BaseCardProps {
  variant: 'faq';
  question: string;
  answer: string;
}

interface StepCardProps extends BaseCardProps {
  variant: 'step';
  stepNumber: number;
  title: string;
  description: string;
}

interface PricingCardProps extends BaseCardProps {
  variant: 'pricing';
  tier?: 'Premium' | 'Professional' | 'Value';
  model: string;
  specs: string;
  price: string;
  features: string[];
  buttonLabel?: string;
  buttonLink?: string;
}

interface TeamCardProps extends BaseCardProps {
  variant: 'team';
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

type CardProps = FeatureCardProps | TestimonialCardProps | FAQCardProps | StepCardProps | PricingCardProps | TeamCardProps;

const Card: React.FC<CardProps> = (props) => {
  const baseStyles = "rounded-xl border bg-card-bg";
  
  const borderColorClass = props.className && props.className.includes('border-') 
    ? props.className 
    : 'border-border-color';
  
  const getTierStyles = (tier: string) => {
    switch(tier) {
      case 'Premium':
        return {
          badge: 'bg-[rgba(59,130,246,0.10)]',
          text: 'text-[#3B82F6]',
        };
      case 'Professional':
        return {
          badge: 'bg-[rgba(139,92,246,0.10)]',
          text: 'text-[#8B5CF6]',
        };
      case 'Value':
        return {
          badge: 'bg-[rgba(16,185,129,0.10)]',
          text: 'text-[#10B981]',
        };
      default:
        return {
          badge: '',
          text: '',
          icon: ''
        };
    }
  };

  if (props.variant === 'testimonial') {
    return (
      <div className={`${baseStyles} ${borderColorClass} p-6 flex flex-col gap-6 w-full lg:max-w-[360px]`}>
        <div className="flex items-center gap-4">
          {props.avatar && (
            <div className="relative w-12 h-12">
              <Image 
                src={props.avatar} 
                alt={props.name} 
                fill
                className="rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="text-foreground font-semibold">{props.name}</h4>
            <p className="text-foreground text-sm">{props.role}</p>
          </div>
        </div>
        <p className="text-foreground">{props.testimonial}</p>
      </div>
    );
  }

  if (props.variant === 'faq') {
    return (
      <div className={`${baseStyles} ${borderColorClass} p-8 flex flex-col gap-4`}>
        <h3 className="text-foreground text-xl font-semibold">{props.question}</h3>
        <p className="text-foreground">{props.answer}</p>
      </div>
    );
  }

  if (props.variant === 'step') { 
    return (
      <div className={`${baseStyles} ${borderColorClass} w-full flex items-start gap-6 p-5`}>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
          {props.stepNumber}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-foreground">{props.title}</h3>
          <p className="text-foreground">{props.description}</p>
        </div>
      </div>
    );
  }

  if (props.variant === 'pricing') {
    const styles = getTierStyles(props.tier || '');
    const buttonLabel = props.buttonLabel || 'Арендовать';
    const buttonLink = props.buttonLink || '/console';

    const pricingBorderClass = props.className && props.className.includes('border-') 
      ? props.className 
      : 'border-accent';

    return (
      <div className={`${baseStyles} ${pricingBorderClass} w-full md:max-w-[360px] p-8 flex flex-col h-full`}>
        <div className="flex justify-between items-center mb-6">
          <HiChip className={`w-6 h-6 text-accent`} />
          {props.tier && (
            <div className={`px-3 py-1 rounded-full ${styles.badge}`}>
              <span className={`text-sm font-medium ${styles.text}`}>{props.tier}</span>
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{props.model}</h3>
        <p className="text-foreground text-sm mb-6">{props.specs}</p>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-foreground">{props.price}</span>
          <span className="text-foreground">/час</span>
        </div>
        <div className="flex flex-col gap-4 flex-grow">
          {props.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <HiCheck className={`w-4 h-4 text-accent`} />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        <Link href={buttonLink} className="block w-full py-2 px-4 text-center bg-accent text-primary rounded-lg hover:bg-primary-dark hover:text-foreground transitions transition-colors duration-200 mt-8" >
            {buttonLabel}
        </Link>
      </div>
    );
  }

  if (props.variant === 'team') {
    const teamBorderClass = props.className && props.className.includes('border-') 
      ? props.className 
      : '';
    
    return (
      <div className={`rounded-xl ${teamBorderClass} bg-card-bg p-6 flex flex-col items-center text-center`}>
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={props.image}
            alt={props.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-1">{props.name}</h3>
        <p className="text-accent mb-4">{props.role}</p>
        <div className="flex gap-4">
          {props.linkedin && (
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {props.twitter && (
            <a href={props.twitter} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
              <FaTwitter className="w-5 h-5" />
            </a>
          )}
          {props.github && (
            <a href={props.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    );
  }

  // Default feature card
  return (
    <div className={`${baseStyles} ${borderColorClass} p-6 flex flex-col gap-5 w-full lg:max-w-[360px]`}>
      <div className="flex items-center gap-4">
        <div className="text-accent">
          {props.icon}
        </div>
        <h3 className="text-foreground text-xl font-bold">
          {props.title}
        </h3>
      </div>
      <p className="text-foreground text-base">
        {props.description}
      </p>
    </div>
  );
};

export default Card;

