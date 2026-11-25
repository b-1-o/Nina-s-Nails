import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Nina-s-Nails/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
