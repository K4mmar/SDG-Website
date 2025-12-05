import React from 'react';
import { Drum, Users, GraduationCap } from 'lucide-react';

const ensembles = [
  {
    icon: <Users size={40} />,
    title: "Fanfareorkest",
    desc: "Het A-orkest speelt op hoog niveau en verzorgt diverse concerten per jaar. Een mix van klassiek, pop en koralen.",
    time: "Dinsdagavond 19:30 - 21:45"
  },
  {
    icon: <Drum size={40} />,
    title: "Slagwerkgroep",
    desc: "Ritme, spektakel en melodisch slagwerk. Een dynamische groep die regelmatig van zich laat horen.",
    time: "Donderdagavond 20:00 - 22:00"
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Jeugdopleiding",
    desc: "Professionele lessen voor jong en oud. Via Music4Kids en het B-orkest stroom je door naar het grote werk.",
    time: "Diverse lestijden"
  }
];

export const Ensembles: React.FC = () => {
  return (
    <section id="ensembles" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sdg-black font-heading font-bold text-3xl md:text-4xl mb-4">
            Onze Onderdelen
          </h2>
          <p className="text-slate-600 text-lg">
            Bij SDG is er voor ieder niveau en interesse een plek. Waar sluit jij bij aan?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ensembles.map((item, idx) => (
            <div key={idx} className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-sdg-red hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sdg-red/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="text-sdg-black mb-6 group-hover:text-sdg-red transition-colors">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-sdg-black mb-3">{item.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.desc}
              </p>
              
              <div className="flex items-center text-sm text-slate-500 font-semibold bg-white py-2 px-4 rounded-lg inline-block shadow-sm">
                🕒 {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};