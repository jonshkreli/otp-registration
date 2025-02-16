import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path"; // ✅ Import from 'node:path' explicitly

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://demo6681851.mockable.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    hmr: {
      overlay: false
    }
  },
});
