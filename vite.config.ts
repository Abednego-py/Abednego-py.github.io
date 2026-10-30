import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is set by the GitHub Actions workflow.
// "/" for a user site (<username>.github.io), "/<repo>/" for a project site.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/',
})
