import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    build: {
        lib: {
            entry: 'index.js',
            name: 'Vue3LaraTable',
            fileName: 'index'
        }
    }
})
