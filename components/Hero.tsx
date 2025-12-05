import React, { useState } from 'react';
import { Button } from './Button';
import { ChevronRight, PlayCircle, X } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // The Facebook video URL needs to be encoded for the iframe plugin
  const videoUrl = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1637216726974346&show_text=false&t=0";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1757494984301-9420322c47e0?q=80&w=1920&auto=format&fit=crop" 
          alt="SDG Orkest" 
          className="w-full h-full object-cover grayscale blur-[2px]"
        />
        {/* Modern Gradient Overlay: Dark Black/Navy to Deep Red */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 to-red-900/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="text-white space-y-8 animate-fade-in-up">
          <div className="inline-block bg-sdg-red/20 border border-sdg-red/40 rounded-full px-4 py-1.5 text-red-200 font-semibold text-sm uppercase tracking-wider mb-2">
            De gezelligste muziekvereniging
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
            Maak Muziek.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-100">
              Maak Vrienden.
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
            Bij SDG Sint Jansklooster draait het om meer dan alleen noten. 
            Of je nu beginner bent of ervaren muzikant, er is plek voor jou in ons fanfareorkest of de slagwerkgroep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="gap-2">
              Kom een keer kijken <ChevronRight size={18} />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsVideoOpen(true)}
              className="border-white text-white hover:bg-white hover:text-sdg-black gap-2"
            >
              <PlayCircle size={18} /> Bekijk video
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/face${i}/50/50`} className="w-8 h-8 rounded-full border-2 border-sdg-black" alt="Member" />
              ))}
            </div>
            <p>Al meer dan <span className="text-white font-bold">80 leden</span> gingen je voor.</p>
          </div>
        </div>

        {/* Visual / Floating Elements (Hidden on mobile for cleaner view) */}
        <div className="hidden md:block relative h-[600px]">
          <div className="absolute top-10 right-0 w-80 h-96 bg-sdg-red rounded-2xl rotate-3 opacity-20 blur-3xl"></div>
          <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform -rotate-2 hover:rotate-0 transition-all duration-700">
             <img 
               src="https://images.meppelercourant.nl/dma/incoming/d8tlfp-202501312305-1.jpg/alternates/LANDSCAPE_960/202501312305-1.jpg" 
               alt="SDG Jubileumconcert" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
               <p className="text-white font-bold text-xl">"Al 125 jaar muziek en passie"</p>
               <p className="text-sdg-red text-sm uppercase mt-1 font-bold">Jubileumconcert</p>
             </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)}></div>
          
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setIsVideoOpen(false)} 
              className="absolute top-4 right-4 z-10 text-white hover:text-sdg-red bg-black/50 hover:bg-white rounded-full p-2 transition-all"
            >
              <X size={24} />
            </button>
            
            <div className="aspect-video w-full">
              <iframe 
                src={videoUrl}
                width="100%" 
                height="100%" 
                style={{border: 'none', overflow: 'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="SDG Sint Jansklooster Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};