import { FadeIn } from '@/src/components/ui/FadeIn';

export const About = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <FadeIn direction="left">
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-8 leading-tight">
              Crafting <br />
              <span className="italic">Timeless</span> Beauty
            </h1>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed font-light">
              Founded in 2024, L'Éclat Clinic was born from a vision to bridge the gap between medical aesthetics and high-end wellness. We believe that beauty is an art form, and every face is a masterpiece waiting to be refined.
            </p>
            <p className="text-charcoal/70 text-lg mb-12 leading-relaxed font-light">
              Our clinic provides a sanctuary where clients can escape the noise of the city and focus on their personal transformation in a space designed for calm and luxury.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">5k+</span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Happy Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">3</span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Global Locations</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" className="relative">
            <div className="aspect-[4/5] rounded-luxury overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Our Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-luxury shadow-xl max-w-xs">
              <p className="font-serif text-xl italic text-charcoal mb-4">"Beauty is not about changing who you are, but revealing the best version of yourself."</p>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">— Dr. Julia Furlan</span>
            </div>
          </FadeIn>
        </section>

        {/* Expertise Section */}
        <section className="py-32 border-t border-charcoal/5">
          <FadeIn className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Our Expertise</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-lg font-light">
              We pride ourselves on our technical mastery and artistic vision. Our team is constantly evolving, staying at the forefront of aesthetic medicine.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Advanced Aesthetics",
                desc: "Specializing in facial harmonization and non-surgical rejuvenation using only premium, FDA-approved products."
              },
              {
                title: "Holistic Wellness",
                desc: "We look at the whole person, integrating skin health with internal wellness for results that truly last."
              },
              {
                title: "Bespoke Care",
                desc: "No two faces are the same. Every treatment plan is uniquely crafted to your specific anatomy and goals."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="bg-white p-12 rounded-luxury shadow-sm border border-charcoal/5 hover:border-gold/30 transition-colors">
                <h3 className="font-serif text-2xl mb-4 text-charcoal">{item.title}</h3>
                <p className="text-charcoal/60 leading-relaxed text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
