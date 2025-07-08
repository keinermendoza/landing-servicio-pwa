import { defineConfig, fontProviders } from "astro/config";
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

// https://flowbite.com/docs/getting-started/astro/
export default defineConfig({
  experimental: {
      fonts: [
          {
              provider: fontProviders.google(),
              name: "Plus Jakarta Sans",
              cssVariable: "--font-jakarta",
              weights: [400,800] ,
          },
          {
              provider: fontProviders.google(),
              name: "Inter",
              cssVariable: "--font-inter",
              weights: [400,700] ,
          }
      ]
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@assets': path.resolve('./src/assets'),
        '@pages': path.resolve('./src/pages'),

      }
    }
  },
 
});