import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react()],
    // .concat(basicSsl()), // включить https
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src'),
        },
    },
});
