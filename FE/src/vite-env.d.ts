import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src', // Use the alias directly without __dirname or path
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/tailwind.css";`, // Use the alias directly here too
            },
        },
    },
});