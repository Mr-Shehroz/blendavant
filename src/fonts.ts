// src/fonts.ts
import { Comfortaa, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add or remove weights as needed
  variable: '--font-montserrat',
  display: 'swap',
});
export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add or remove weights as needed
  variable: '--font-comfortaa',
  display: 'swap',
});
