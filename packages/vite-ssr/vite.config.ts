import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    ssr: {
        // вынуждаем Vite обрабатывать freyr, чтобы его CSS импортировался корректно
        // noExternal: ['@rutube/freyr'],
    },
});
