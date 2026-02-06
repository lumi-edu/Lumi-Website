import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Alias react-router to our custom implementation
      'react-router': path.resolve(__dirname, './src/react-router.ts'),
      // Map figma asset imports to local static assets
      'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png': path.resolve(__dirname, './src/app/assets/lumilogo.png'),
      'figma:asset/53923c95d7ada26d1c087283760beb15c309363e.png': path.resolve(__dirname, './src/app/assets/lumihomepage.png'),
    },
  },
})