import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/invitaciones-demo/', // <-- AÑADE ESTA LÍNEA (con el nombre que le darás a tu repo)
})