import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// El sitio vive en https://enmanuel676.github.io/web_portfolio/, no en la raíz
// del dominio, así que los assets del build tienen que colgar de
// /web_portfolio/. `vite dev` y `vite preview` usan el mismo prefijo, de forma
// que lo que se ve en local es exactamente lo que se publica.
// VITE_BASE lo sobreescribe si el repositorio cambia de nombre.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/web_portfolio/',
  plugins: [react()],
})
