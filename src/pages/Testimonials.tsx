import { TESTIMONIALS } from '@/src/constants/services';
import { FadeIn } from '@/src/components/ui/FadeIn';
import { StarRating } from '@/src/components/ui/StarRating';
import { BadgeCheck } from 'lucide-react';

export const Testimonials = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-nude/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6">Client Stories</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg font-light">
            Real experiences from our valued patients. We take pride in delivering exceptional care and natural results.
          </p>
        </FadeIn>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {TESTIMONIALS.map((review, idx) => (
            <FadeIn 
              key={review.id} 
              delay={idx * 0.1} 
              className="break-inside-avoid"
            >
              <div className="bg-white p-8 rounded-luxury border border-gold/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-1">{review.name}</h3>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold font-bold">
                      <BadgeCheck size={14} />
                      <span>Verified Patient</span>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-charcoal/70 leading-relaxed mb-8 font-sans italic">
                  "{review.text}"
                </p>

                <div className="space-y-2 pt-6 border-t border-charcoal/5">
                  {review.treatment && (
                    <div className="flex gap-2 text-xs">
                      <span className="text-charcoal/40 uppercase tracking-widest font-bold">Treatment:</span>
                      <span className="text-charcoal/70 font-serif italic">{review.treatment}</span>
                    </div>
                  )}
                  {review.practitioner && (
                    <div className="flex gap-2 text-xs">
                      <span className="text-charcoal/40 uppercase tracking-widest font-bold">By:</span>
                      <span className="text-charcoal/70 font-serif italic">{review.practitioner}</span>
                    </div>
                  )}
                  <div className="text-[10px] text-charcoal/30 uppercase tracking-widest mt-4 block">
                    {review.date}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
