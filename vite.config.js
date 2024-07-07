import { resolve } from 'path'
const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/impressum/index.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
};
