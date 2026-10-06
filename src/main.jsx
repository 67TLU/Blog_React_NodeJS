import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import { ArticleProvider } from './context/ArticleContext'
import { ThemeProvider } from './context/ThemeContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <ToastProvider>
      <ArticleProvider>
     <BrowserRouter>
          <App></App>
    </BrowserRouter>
    </ArticleProvider>
    </ToastProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
