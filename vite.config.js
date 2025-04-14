// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/RbnbCollegeWebsite/', // Change this to your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // This ensures GitHub Pages can serve the site properly
    emptyOutDir: true
  }
});
