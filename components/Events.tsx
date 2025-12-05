import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  { day: "14", month: "DEC", title: "Kerstconcert", location: "Dorpshuis, Sint Jansklooster" },
  { day: "05", month: "JAN", title: "Nieuwjaarsborrel", location: "Muziekgebouw" },
  { day: "12", month: "FEB", title: "Open Repetitie Avond", location: "Kom meespelen!" },
];

export const Events: React.FC = () => {
  return (
    <section id="agenda" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sdg-black font-heading font-bold text-3xl mb-2">Binnenkort</h2>
            <p className="text-slate-600">Zie waar we te horen zijn of kom langs.</p>
          </div>
          <a href="#" className="text-sdg-red font-bold hover:underline mt-4 md:mt-0">Bekijk volledige agenda &rarr;</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((evt, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 border border-slate-100 group">
              <div className="bg-red-50 text-sdg-red rounded-lg p-3 text-center min-w-[70px] group-hover:bg-sdg-red group-hover:text-white transition-colors">
                <span className="block text-2xl font-bold leading-none">{evt.day}</span>
                <span className="block text-xs font-bold uppercase mt-1">{evt.month}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-sdg-black mb-1">{evt.title}</h3>
                <div className="flex items-center text-slate-500 text-sm gap-1">
                  <Calendar size={14} />
                  {evt.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};