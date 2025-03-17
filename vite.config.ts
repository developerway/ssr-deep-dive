import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@fe": path.resolve("./frontend"),
      "@": path.resolve("./src"),
    },
  },
  plugins: [react()],
});
