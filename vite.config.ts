const { resolve } = require("path"); //必须要引入resolve
import { defineConfig } from "vite";
// import postcssImport from "postcss-import"
// import postcssNested from "postcss-nested"
// import autoprefixer from 'autoprefixer'
// import tailwindcss from 'tailwindcss'
import { VITE_APP_BASE, VITE_APP_OPEN, VITE_APP_PORT } from "./config";
import createVitePlugins from "./config/plugins";
import proxy from "./config/setupProxy";

// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_APP_BASE,
  plugins: createVitePlugins(),
  // css:{
  //   postcss:{
  //     plugins:[
  //       postcssImport,
  //       postcssNested,
  //       autoprefixer,
  //       tailwindcss
  //     ] as any[]
  //   }
  // },
  server: {
    host: true,
    port: VITE_APP_PORT,
    open: VITE_APP_OPEN,
    proxy,
  },
  optimizeDeps: {
    
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
