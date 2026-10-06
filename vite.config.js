import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path" // 1. Import thư viện path

export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    proxy: {
      // Khi frontend gọi proxy bắt đầu bằng '/api', Vite sẽ tự chuyển hướng
      '/api': {
        target: 'http://localhost:3000', // Đường dẫn của backend Node.js
        changeOrigin: true,
        secure: false,
      }}},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 2. Định nghĩa alias @ trỏ vào thư mục src
    },
  },
})
