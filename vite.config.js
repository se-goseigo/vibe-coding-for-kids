import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                setup: resolve(__dirname, 'setup.html'),
                creation: resolve(__dirname, 'creation.html'),
                mvp: resolve(__dirname, 'mvp.html'),
                defense: resolve(__dirname, 'defense.html'),
                github: resolve(__dirname, 'github.html'),
                vercel: resolve(__dirname, 'vercel.html'),
                qa: resolve(__dirname, 'qa.html'),
                ending: resolve(__dirname, 'ending.html'),
            },
        },
    },
});
