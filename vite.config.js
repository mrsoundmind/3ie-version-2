import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // Listen on all local IPs
        proxy: {
            // Proxy 3ie assets so the iframe renders styling correctly
            '^/(sites|core|modules|themes)/.*': {
                target: 'https://www.3ieimpact.org',
                changeOrigin: true,
                secure: false, // Bypass SSL verification if needed
            },
            // Proxy 3ie HTML pages and strip the iframe blockers
            '/proxy-3ie': {
                target: 'https://www.3ieimpact.org',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/proxy-3ie/, ''),
                configure: (proxy, options) => {
                    proxy.on('proxyRes', (proxyRes, req, res) => {
                        // Strip security headers that block iframing
                        delete proxyRes.headers['x-frame-options'];
                        delete proxyRes.headers['content-security-policy'];
                        delete proxyRes.headers['content-security-policy-report-only'];
                        delete proxyRes.headers['strict-transport-security']; // Sometimes interferes with local HTTP
                    });
                }
            }
        }
    }
})
