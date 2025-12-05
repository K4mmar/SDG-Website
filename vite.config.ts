import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Laad environment variables op basis van de mode (development/production)
  // Cast process to any to avoid TS error if Node types are missing
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Dit zorgt ervoor dat process.env.API_KEY werkt in de browser code
      // De prompt vereist specifiek het gebruik van process.env.API_KEY
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
    },
  };
});