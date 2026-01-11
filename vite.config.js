import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                setup: resolve(__dirname, 'setup.html'),
                defense: resolve(__dirname, 'defense.html'),
                deploy: resolve(__dirname, 'deploy.html'),
                qa: resolve(__dirname, 'qa.html'),
                ending: resolve(__dirname, 'ending.html'),
                deploy: resolve(__dirname, 'deploy.html'),
                qa: resolve(__dirname, 'qa.html'),
                ending: resolve(__dirname, 'ending.html'),
            },
        },
    },
});
