import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import { CLINIC_INFO } from '@/src/constants/services';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl tracking-widest uppercase text-charcoal">
            {CLINIC_INFO.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold',
                location.pathname === link.href ? 'text-gold' : 'text-charcoal/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="luxury-button text-sm py-2 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nude border-t border-charcoal/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-charcoal"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="luxury-button text-center"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
