import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Jaquelinacorretora/', // importante para que o build use caminhos corretos no GitHub Pages
});
