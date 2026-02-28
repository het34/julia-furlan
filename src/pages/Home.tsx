import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { FadeIn } from '@/src/components/ui/FadeIn';
import { CLINIC_INFO, SERVICES } from '@/src/constants/services';

export const Home = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Spa Interior"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nude/20 via-transparent to-nude" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-8xl text-charcoal leading-[1.1] mb-8 mt-5">
              {CLINIC_INFO.tagline.split('in')[0]} <br />
              <span className="italic">in {CLINIC_INFO.tagline.split('in')[1]}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <span className="py-2 px-4 mt-2 rounded bg-gray-200 inline-block text-xs font-bold uppercase tracking-[0.3em] text-yellow-600 mb-6">
              {CLINIC_INFO.locations.join(' • ')}
            </span>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience the pinnacle of medical precision and artistic vision at {CLINIC_INFO.name}. We reveal your natural radiance through bespoke aesthetic care.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking" className="luxury-button w-full sm:w-auto">
              Book Appointment
            </Link>
            <Link to="/treatments" className="luxury-button-outline w-full sm:w-auto">
              Explore Menu
            </Link>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-charcoal/30">
          <div className="w-[1px] h-12 bg-charcoal/20 mx-auto" />
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn direction="left" className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                Popular <br /> Services
              </h2>
              <p className="text-charcoal/60 leading-relaxed">
                Discover our most requested treatments, from advanced skin analysis to revolutionary body sculpting.
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <Link to="/treatments" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold hover:text-charcoal transition-colors">
                View All Services <ArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredServices.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <Link to="/treatments" className="group cursor-pointer block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-luxury mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/30 transition-colors" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 bg-nude">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center gap-1 text-gold mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={i < 4.8 ? "currentColor" : "none"} />
              ))}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-10 italic">
              "{CLINIC_INFO.featuredTestimonial.text}"
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40">
              — {CLINIC_INFO.featuredTestimonial.author} • {CLINIC_INFO.rating} Stars on Treatwell
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000"
                alt="Practitioner at work"
                className="rounded-luxury shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
              The Art of <br /> Subtle Enhancement
            </h2>
            <p className="text-charcoal/70 text-lg mb-10 leading-relaxed font-light">
              We believe the best work is the work that goes unnoticed. Our philosophy centers on "The Invisible Touch"—enhancing your natural features while maintaining the integrity of your unique expression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-nude rounded-full flex items-center justify-center text-gold shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Medical Safety</h4>
                  <p className="text-sm text-charcoal/60">Highest clinical standards and premium products.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-nude rounded-full flex items-center justify-center text-gold shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Expert Care</h4>
                  <p className="text-sm text-charcoal/60">Practitioners with years of specialized experience.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-charcoal p-16 md:p-24 rounded-[3rem] text-nude relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 text-gold/20">
              <Sparkles size={120} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 relative z-10">
              Ready to Begin Your <br /> Transformation?
            </h2>
            <p className="text-nude/60 mb-12 text-lg font-light relative z-10">
              Join our exclusive clientele and experience the pinnacle of aesthetic care.
            </p>
            <Link to="/booking" className="luxury-button bg-gold hover:bg-white hover:text-charcoal relative z-10">
              Book Your Consultation
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
