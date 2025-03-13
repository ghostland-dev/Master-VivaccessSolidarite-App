
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  delay = 0
}) => {
  return (
    <div 
      className="feature-card rounded-xl p-6 h-full flex flex-col"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in 0.5s ${delay}ms forwards ease-out`
      }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      <button className="mt-4 text-primary text-sm font-medium flex items-center hover:underline">
        اعرف المزيد
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1"
        >
          <path 
            d="M10 12L6 8L10 4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default FeatureCard;
