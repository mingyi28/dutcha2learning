import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/dutcha2learning/', // 替换为你的 GitHub 仓库名
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    server: {
        allowedHosts: [".preview.with.woa.com"]
    }
});
