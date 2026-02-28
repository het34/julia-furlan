import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { FadeIn } from '@/src/components/ui/FadeIn';
import { Key, useState } from 'react';
import { PricingOption } from '@/src/constants/services';
import { cn } from '@/src/lib/utils';

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  options?: PricingOption[];
  key?: Key;
}

export const ServiceCard = ({ title, category, price, duration, image, description, options }: ServiceCardProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <FadeIn className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-luxury mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block px-3 py-1 bg-gold text-nude text-[10px] uppercase tracking-widest mb-2 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-xl md:text-2xl text-charcoal leading-tight">{title}</h3>
        <span className="font-medium text-gold whitespace-nowrap ml-4">{price}</span>
      </div>
      
      <div className="flex items-center gap-2 text-charcoal/50 text-[10px] uppercase tracking-widest mb-4">
        <Clock size={12} />
        <span>{duration}</span>
      </div>
      
      <p className="text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>

      {options && options.length > 0 && (
        <div className="mb-6">
          <button 
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-charcoal transition-colors mb-4"
          >
            View Course Options <ChevronDown size={14} className={cn("transition-transform", showOptions && "rotate-180")} />
          </button>
          
          {showOptions && (
            <div className="space-y-2 bg-nude/50 p-4 rounded-luxury border border-charcoal/5 animate-in fade-in slide-in-from-top-2 duration-300">
              {options.map((opt, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-charcoal/60">{opt.label}</span>
                  <span className="font-bold text-charcoal">{opt.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <Link 
        to="/booking" 
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-gold transition-colors group/link"
      >
        Quick Book 
        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </FadeIn>
  );
};
