import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'index.ts',
            name: 'Vue3LaraTable',
            fileName: 'index.ts'
        }
    }
})
