import { defineConfig } from 'vite';

export default defineConfig({
  // PLACEHOLDER: set base to a subdirectory path if not deploying to the root
  // base: '/',

  // PLACEHOLDER: add plugins here (e.g. @vitejs/plugin-vue, @vitejs/plugin-react)
  plugins: [],

  build: {
    // PLACEHOLDER: adjust target browsers as needed
    target: 'es2020',
    outDir: 'dist',
    sourcemap: true,
  },

  server: {
    host: true,
    port: 5173,
    open: true,
    allowedHosts: ['host.docker.internal'],
  },
});
