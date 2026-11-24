import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/zhu-zhu/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
