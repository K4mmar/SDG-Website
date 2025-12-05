import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyJoin: React.FC = () => {
  const benefits = [
    "Instrument in bruikleen (gratis)",
    "Professionele dirigenten & docenten",
    "Gezellige 'derde helft' na repetities",
    "Unieke concerten en uitjes",
    "Lage contributie",
    "Voor alle leeftijden (8 - 90+)"
  ];

  return (
    <section className="py-24 bg-sdg-red text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & Benefits */}
          <div>
            <div className="inline-block bg-black/20 rounded-full px-4 py-1.5 text-white/90 font-semibold text-sm uppercase tracking-wider mb-4 border border-white/10">
              Jong & Oud
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Muziek kent geen <br />
              <span className="text-sdg-black">leeftijd.</span>
            </h2>
            <p className="text-red-100 text-lg mb-8 font-medium">
              Bij SDG Sint Jansklooster zitten generaties naast elkaar. 
              Het maakt niet uit of je 12 bent of 92, de passie voor muziek verbindt ons.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-sdg-black rounded-full p-1 text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-white">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Testimonial Box - Ep & Mark Story */}
            <div className="p-6 bg-sdg-black/90 rounded-xl border border-white/10 shadow-xl relative">
              <div className="absolute -top-4 -right-4 bg-white text-sdg-red font-bold py-2 px-4 rounded-lg shadow-md transform rotate-3">
                Bijzonder verhaal
              </div>
              <p className="italic text-lg mb-4 text-slate-200">
                "Ze schelen 80 jaar, maar dat maakt niks uit als ze samen muziek maken. 
                Ep (92) en Mark (12) zitten gebroederlijk naast elkaar in het orkest."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="flex -space-x-3">
                   {/* Placeholders for Ep & Mark avatars */}
                   <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-sdg-black flex items-center justify-center text-xs font-bold text-black overflow-hidden">
                     <span className="sr-only">Ep</span>
                     <img src="https://ui-avatars.com/api/?name=Ep&background=random" alt="" />
                   </div>
                   <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-sdg-black flex items-center justify-center text-xs font-bold text-black overflow-hidden">
                     <span className="sr-only">Mark</span>
                     <img src="https://ui-avatars.com/api/?name=Mark&background=random" alt="" />
                   </div>
                </div>
                <div>
                  <p className="font-bold text-white">Ep & Mark</p>
                  <p className="text-xs text-red-400 uppercase font-bold">Slagwerkers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Image */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] md:aspect-square">
                <div className="absolute inset-0 bg-sdg-black rounded-2xl transform rotate-3 opacity-20"></div>
                {/* Updated Image Source */}
                <img 
                  src="https://images.destentor.nl/ZWQyZDJiNDM1NTI4MTliNTU5MDAvZGlvLzI1NDUwNjA5NC9maXQtd2lkdGgvMTIwMA/ep-rook-92-en-mark-de-jonge-12-we-hebben-het-altijd-gezellig" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20" 
                  alt="Ep en Mark samen aan het drummen" 
                />
                
                {/* Overlay Caption */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg">
                  <p className="text-sdg-black font-bold text-lg leading-tight">
                    "Het mooiste is dat je elkaar helpt. Jong leert van oud, en andersom."
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};