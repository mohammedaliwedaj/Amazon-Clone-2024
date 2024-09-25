import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Amazon-Clone-2024/", // this is the name of the github repo
  plugins: [react()],
});
