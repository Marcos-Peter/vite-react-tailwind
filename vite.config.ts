import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@providers': path.resolve(__dirname, 'src/providers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@tests': path.resolve(__dirname, 'src/tests'),
        },
    },
});
