import { defineConfig } from 'vite';

export default defineConfig({
  // Root directory (where index.html is located)
  root: process.cwd(),
  
  // Public directory for static assets
  publicDir: 'public',
  
  // Build configuration
  build: {
    // Output directory for build files
    outDir: 'dist',
    
    // Empty output directory before build
    emptyOutDir: true,
    
    // Sourcemap generation
    sourcemap: false,
    
    // Rollup options
    rollupOptions: {
      // Entry point
      input: {
        main: './index.html'
      },
      
      // Output configuration
      output: {
        // No chunking for single page app
        manualChunks: undefined,
        
        // File naming
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // Minification
    minify: 'esbuild',
    
    // Target browsers
    target: 'es2015'
  },
  
  // Development server configuration
  server: {
    // Server port
    port: 3000,
    
    // Listen on all addresses
    host: true,
    
    // Auto-open browser
    open: true,
    
    // CORS configuration
    cors: true
  },
  
  // Preview server (for built app)
  preview: {
    port: 4173,
    host: true
  },
  
  // Plugin configuration
  plugins: [
    // Vite will auto-configure basic plugins
  ],
  
  // Define global constants
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version)
  },
  
  // CSS configuration
  css: {
    // CSS modules configuration
    modules: {
      scopeBehaviour: 'global'
    },
    
    // Pre-processor configuration
    preprocessorOptions: {
      scss: {
        // Additional SCSS options if needed
      }
    }
  },
  
  // Optimize dependencies
  optimizeDeps: {
    // Force dependency pre-bundling
    include: [],
    
    // Exclude from dependency pre-bundling
    exclude: []
  }
});
