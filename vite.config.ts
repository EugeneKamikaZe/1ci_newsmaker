import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '~', replacement: '/src' }],
    },
    server: {
        host: true,
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:3000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
