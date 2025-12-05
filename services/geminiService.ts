import { GoogleGenAI, Chat } from "@google/genai";

// Ideally, this is strictly server-side, but for this demo, we use client-side with env.
// The prompt ensures we use process.env.API_KEY.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const createRecruitmentChat = (): Chat => {
  const ai = getClient();
  
  // System instructions tailored for SDG Sint Jansklooster recruitment
  const systemInstruction = `
    Je bent de virtuele assistent van Muziekvereniging SDG Sint Jansklooster.
    Je doel is om potentiële nieuwe leden enthousiast te maken en vragen te beantwoorden.
    
    Belangrijke informatie over SDG:
    - Wij zijn een christelijke muziekvereniging met een Fanfareorkest, Slagwerkgroep en Jeugdopleiding.
    - Sfeer: Gezelligheid en muzikale kwaliteit gaan hand in hand.
    - Locatie: Sint Jansklooster.
    - Repetities: 
      - Fanfare: Dinsdagavond.
      - Slagwerkgroep: Donderdagavond.
    - Instrumenten: Leden krijgen een instrument van de vereniging in bruikleen.
    - Opleiding: Professionele docenten voor koperblazers en slagwerkers.
    
    Tone of voice: Vriendelijk, uitnodigend, informeel (gebruik 'je/jij'), en enthousiast.
    Als je het antwoord niet weet, adviseer ze om contact op te nemen via het contactformulier of een proefrepetitie aan te vragen.
    Probeer altijd af te sluiten met een uitnodiging om eens te komen kijken.
  `;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  });
};