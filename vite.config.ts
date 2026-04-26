import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    dts({ 
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src'] 
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SnapPort',
      fileName: 'snap-port',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [], 
      output: {
        globals: {

        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': 'process.env.NODE_ENV',
    'import.meta.env.MODE': 'import.meta.env.MODE'
  }
});
