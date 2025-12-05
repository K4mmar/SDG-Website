import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sdg-black text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-heading font-bold text-xl mb-4">SDG Sint Jansklooster</h4>
            <p className="max-w-xs mb-4">
              Christelijke Muziekvereniging Soli Deo Gloria. 
              Muziek, passie en gezelligheid sinds 19XX.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-sdg-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-sdg-red transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> info@sdgsintjansklooster.nl</li>
              <li className="flex items-center gap-2"><Phone size={16} /> 06 - 12345678</li>
              <li>Sint Jansklooster</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4">Snel naar</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Lid worden</a></li>
              <li><a href="#" className="hover:text-white">Vriend van SDG</a></li>
              <li><a href="#" className="hover:text-white">Sponsoring</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-slate-800 text-xs">
          &copy; {new Date().getFullYear()} SDG Sint Jansklooster. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};