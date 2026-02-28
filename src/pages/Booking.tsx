import { useState } from 'react';
import { FadeIn } from '@/src/components/ui/FadeIn';
import { Calendar, Clock, User, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { SERVICES } from '@/src/constants/services';

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-nude pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Book Your Experience</h1>
          <p className="text-charcoal/50 uppercase tracking-widest text-xs font-bold">Step {step} of 3</p>
        </FadeIn>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-charcoal/5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Summary */}
            <div className="bg-charcoal p-10 text-nude md:col-span-1">
              <h3 className="font-serif text-2xl mb-8">Your Selection</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-nude/40 mb-1">Service</p>
                    <p className="text-sm font-medium">{selectedService?.title || 'Not selected'}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start opacity-40">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-nude/40 mb-1">Date & Time</p>
                    <p className="text-sm font-medium">TBD</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 pt-8 border-t border-nude/10">
                <p className="text-[10px] uppercase tracking-widest text-nude/40 mb-2">Total Estimate</p>
                <p className="text-3xl font-serif text-gold">
                  {selectedService?.basePrice || '£0'}
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-10 md:col-span-2">
              {step === 1 && (
                <FadeIn direction="none">
                  <h2 className="font-serif text-3xl mb-8">Select a Treatment</h2>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-6 rounded-luxury border transition-all duration-300 group",
                          selectedServiceId === service.id 
                            ? "border-gold bg-gold/5 shadow-md" 
                            : "border-charcoal/5 hover:border-gold/30 hover:bg-nude/5"
                        )}
                      >
                        <div className="text-left">
                          <p className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors">{service.title}</p>
                          <div className="flex items-center gap-3 text-xs text-charcoal/40 uppercase tracking-widest mt-1">
                            <span className="flex items-center gap-1"><Clock size={12} /> {service.duration}</span>
                            <span>•</span>
                            <span className="font-bold text-charcoal/60">{service.basePrice}</span>
                          </div>
                        </div>
                        <ChevronRight size={20} className={cn("transition-transform", selectedServiceId === service.id ? "text-gold translate-x-1" : "text-charcoal/20")} />
                      </button>
                    ))}
                  </div>
                  <button 
                    disabled={!selectedServiceId}
                    onClick={() => setStep(2)}
                    className="luxury-button w-full mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Date & Time
                  </button>
                </FadeIn>
              )}

              {step === 2 && (
                <FadeIn direction="none">
                  <h2 className="font-serif text-3xl mb-8">Select Date & Time</h2>
                  <div className="p-12 border border-dashed border-charcoal/20 rounded-luxury text-center">
                    <Calendar size={48} className="mx-auto text-charcoal/10 mb-4" />
                    <p className="text-charcoal/40 italic">Calendar integration placeholder...</p>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <button onClick={() => setStep(1)} className="luxury-button-outline flex-1">Back</button>
                    <button onClick={() => setStep(3)} className="luxury-button flex-1">Confirm Details</button>
                  </div>
                </FadeIn>
              )}

              {step === 3 && (
                <FadeIn direction="none">
                  <h2 className="font-serif text-3xl mb-8">Finalize Booking</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-charcoal/40 mb-2">Full Name</label>
                      <input type="text" className="w-full p-4 bg-nude/30 border border-charcoal/5 rounded-luxury focus:outline-none focus:border-gold transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-charcoal/40 mb-2">Email Address</label>
                      <input type="email" className="w-full p-4 bg-nude/30 border border-charcoal/5 rounded-luxury focus:outline-none focus:border-gold transition-colors" placeholder="jane@example.com" />
                    </div>
                  </div>
                  <button className="luxury-button w-full mt-10">Complete Booking</button>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
