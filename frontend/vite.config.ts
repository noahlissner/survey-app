import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			// '/api/users/': 'http://localhost:5000',
			// '/api/surveys/': 'http://localhost:5000',
			'/api': {
				target: 'http://localhost:5000',
				changeOrigin: true,
			},
		},
	},
	plugins: [react()],
});
