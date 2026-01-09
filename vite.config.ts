import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-core': ['lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'radix-core': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-slot'],
          'carousel': ['embla-carousel-react'],
          'query': ['@tanstack/react-query'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        dead_code: true,
        unused: true,
        collapse_vars: true,
        reduce_vars: true,
        hoist_funs: true,
        hoist_vars: false,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
        ecma: 2020,
      },
    },
    target: 'es2020',
    modulePreload: {
      polyfill: false,
    },
    chunkSizeWarningLimit: 300,
    reportCompressedSize: false,
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
}));
