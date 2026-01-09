import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-portfolio/', // Change to your repo name if different
  plugins: [react()],
});
