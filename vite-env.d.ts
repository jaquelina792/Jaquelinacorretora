import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Jaquelinacorretora/', // ESSENCIAL para github pages no subdiretório
});