import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { CLINIC_INFO } from '@/src/constants/services';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-nude pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-3xl tracking-widest uppercase mb-6">{CLINIC_INFO.name}</h2>
          <p className="text-nude/60 max-w-md mb-8 leading-relaxed">
            {CLINIC_INFO.tagline}. A sanctuary of refined beauty and holistic wellness across Europe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6">Explore</h3>
          <ul className="flex flex-col gap-4 text-nude/60 text-sm">
            <li><Link to="/treatments" className="hover:text-gold transition-colors">Treatments</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
            <li><Link to="/booking" className="hover:text-gold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6">Locations</h3>
          <ul className="flex flex-col gap-4 text-nude/60 text-sm">
            {CLINIC_INFO.locations.map(loc => (
              <li key={loc}>{loc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6">Contact & Hours</h3>
          <ul className="flex flex-col gap-4 text-nude/60 text-sm">
            <li>{CLINIC_INFO.address}</li>
            <li>Tue–Fri: {CLINIC_INFO.hours.tue_fri}</li>
            <li>Sat: {CLINIC_INFO.hours.sat}</li>
            <li>Sun–Mon: {CLINIC_INFO.hours.sun_mon}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-nude/10 flex flex-col md:row justify-between items-center gap-4 text-xs text-nude/40 uppercase tracking-widest">
        <p>© 2026 {CLINIC_INFO.name}. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-nude transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-nude transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
