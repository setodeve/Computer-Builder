/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/github-pages-test/' : './',
  plugins: [vue()],
  test:{
    environment: 'jsdom'
  }
})
