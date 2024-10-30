import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      dirs: ['src/views', 'src/components'],
      dts: true,
    }),
    AutoImport({
      // eslintrc: {
      //   enabled: true,
      //   filepath: './.eslintrc-auto-import.json',
      // },
      imports: ['vue', 'vue-router','pinia'],
      vueTemplate: true,
    }),
    Pages({
      dirs: ['./src/pages'],
      onRoutesGenerated: routes => [
        // Email filter
        ...routes,
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production'
  ? './'
  : '/'
})
