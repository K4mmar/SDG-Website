import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ensembles } from './components/Ensembles';
import { WhyJoin } from './components/WhyJoin';
import { Events } from './components/Events';
import { SocialFeed } from './components/SocialFeed';
import { JoinCTA } from './components/JoinCTA';
import { Footer } from './components/Footer';
import { RecruitmentBot } from './components/RecruitmentBot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Ensembles />
        <WhyJoin />
        <Events />
        <SocialFeed />
        <JoinCTA />
      </main>
      <Footer />
      <RecruitmentBot />
    </div>
  );
}

export default App;