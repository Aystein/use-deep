import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    lib: {
      entry: {
        index: './src/index.ts'
      },
      formats: ['es'],
    },
    rollupOptions: {
        external: ['react'],
    }
  },
})
