import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/resume/',   // <-- назва репозиторію!
  plugins: [react()],
})
