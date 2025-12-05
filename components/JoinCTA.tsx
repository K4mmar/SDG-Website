import React from 'react';
import { Button } from './Button';

export const JoinCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-sdg-black mb-6">
          Klaar om mee te spelen?
        </h2>
        <p className="text-slate-600 text-lg mb-8">
          Je bent van harte welkom bij een repetitie. Geen verplichtingen, gewoon sfeer proeven en kijken of het bij je past.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" className="text-lg px-8">Meld je aan voor een proefles</Button>
          <Button variant="outline" className="text-lg px-8">Ik heb nog een vraag</Button>
        </div>
      </div>
    </section>
  );
};