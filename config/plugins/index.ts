import { PluginOption } from 'vite';
import react from '@vitejs/plugin-react'
export default function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react(),
  ];
  return vitePlugins;
}