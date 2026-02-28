import { useState } from 'react';
import { FadeIn } from '@/src/components/ui/FadeIn';
import { ServiceCard } from '@/src/components/marketing/ServiceCard';
import { cn } from '@/src/lib/utils';
import { SERVICES } from '@/src/constants/services';

const CATEGORIES = ['All', 'IPL Laser', 'BTL Treatments', 'Facials', 'Aesthetics'];

export const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTreatments = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(t => t.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6">Treatment Menu</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg font-light">
            Explore our comprehensive range of medical-grade aesthetic treatments, from advanced laser therapy to non-invasive body sculpting.
          </p>
        </FadeIn>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                activeCategory === cat 
                  ? "bg-charcoal text-nude shadow-lg" 
                  : "bg-white text-charcoal/40 hover:text-charcoal hover:bg-nude border border-charcoal/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {filteredTreatments.map((treatment) => (
            <ServiceCard 
              key={treatment.id} 
              id={treatment.id}
              title={treatment.title}
              category={treatment.category}
              price={treatment.basePrice}
              duration={treatment.duration}
              image={treatment.image}
              description={treatment.description}
              options={treatment.options}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-20">
            <p className="text-charcoal/40 italic">No treatments found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
