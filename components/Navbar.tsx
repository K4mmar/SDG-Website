import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Over Ons', href: '#ensembles' },
    { label: 'Opleiding', href: '#opleiding' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <img 
            src="https://sdgsintjansklooster.nl/wp-content/uploads/2025/01/FB_IMG_1736806082183-768x768.jpg" 
            alt="SDG Logo" 
            className="w-12 h-12 rounded-xl shadow-lg object-cover bg-white" 
          />
          <div className={`flex flex-col ${isScrolled ? 'text-sdg-black' : 'text-white'}`}>
            <span className="font-heading font-bold leading-none text-lg">SDG</span>
            <span className="text-xs uppercase tracking-wider opacity-90">Sint Jansklooster</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide hover:text-sdg-red transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.label}
            </a>
          ))}
          
          <div className={`h-6 w-px ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>

          <div className="flex gap-3">
             <a href="#" className={`transition-colors ${isScrolled ? 'text-slate-600 hover:text-sdg-red' : 'text-slate-200 hover:text-white'}`}>
               <Facebook size={20} />
             </a>
             <a href="#" className={`transition-colors ${isScrolled ? 'text-slate-600 hover:text-sdg-red' : 'text-slate-200 hover:text-white'}`}>
               <Instagram size={20} />
             </a>
          </div>

          <Button variant="primary" className="shadow-none scale-90 ml-2">
            Word Lid
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-sdg-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4">
           {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sdg-black font-semibold py-2 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 py-2">
            <a href="#" className="text-sdg-black hover:text-sdg-red"><Facebook size={24} /></a>
            <a href="#" className="text-sdg-black hover:text-sdg-red"><Instagram size={24} /></a>
          </div>
          <Button fullWidth onClick={() => setMobileMenuOpen(false)}>Word Lid</Button>
        </div>
      )}
    </nav>
  );
};