import React from 'react';
import { Instagram, Facebook, Heart, MessageCircle } from 'lucide-react';

const socialPosts = [
  {
    type: 'instagram',
    image: 'https://picsum.photos/seed/band1/400/400',
    likes: 45,
    comments: 3,
    caption: 'Wat een avond! 🎺 Het najaarsconcert was een groot succes. Dank aan iedereen die er was!'
  },
  {
    type: 'instagram',
    image: 'https://picsum.photos/seed/band2/400/400',
    likes: 82,
    comments: 12,
    caption: 'De jeugd heeft de toekomst! Onze slagwerkers in opleiding tijdens de repetitie. 🥁'
  },
  {
    type: 'facebook',
    image: 'https://picsum.photos/seed/band3/400/400',
    likes: 24,
    comments: 1,
    caption: 'Throwback naar het concours. De focus, de spanning en de ontlading! #fanfare #sdg'
  },
  {
    type: 'instagram',
    image: 'https://picsum.photos/seed/band4/400/400',
    likes: 112,
    comments: 8,
    caption: 'Gezelligheid na de repetitie hoort er ook bij. Wie doet er volgende keer een drankje mee? 🍻'
  }
];

export const SocialFeed: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sdg-black font-heading font-bold text-3xl md:text-4xl mb-4">
            Volg ons online
          </h2>
          <p className="text-slate-600 text-lg">
            Proef de sfeer en blijf op de hoogte van onze avonturen.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="flex items-center gap-2 text-sdg-black font-bold hover:text-sdg-red transition-colors">
              <Instagram size={20} /> @sdgsintjansklooster
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="flex items-center gap-2 text-sdg-black font-bold hover:text-sdg-red transition-colors">
              <Facebook size={20} /> SDG Sint Jansklooster
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialPosts.map((post, i) => (
            <a key={i} href="#" className="group relative block aspect-square overflow-hidden rounded-xl bg-slate-100">
              <img 
                src={post.image} 
                alt="Social post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-sdg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <div className="mb-4 text-sdg-red">
                  {post.type === 'instagram' ? <Instagram size={32} /> : <Facebook size={32} />}
                </div>
                <p className="text-xs md:text-sm text-center line-clamp-3 mb-4">
                  {post.caption}
                </p>
                <div className="flex gap-4 text-sm font-bold">
                  <span className="flex items-center gap-1"><Heart size={16} className="fill-white" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={16} className="fill-white" /> {post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};