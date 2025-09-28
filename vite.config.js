import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginPrettier from "vite-plugin-prettier";
export default defineConfig({
  plugins: [react(), vitePluginPrettier()],
});
