import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: '192.168.100.5', // replace with the IP address of the Homestead machine
    cors: false,
    hmr: {
        host: '192.168.100.5', // replace with the IP address of the Homestead machine
    }
},
})
