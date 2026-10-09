import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DialogProvider } from "./context/DialogProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { ArticleProvider } from "./context/ArticleContext";
import AnnouncementModal from "./components/modals/AnnouncementModal";
import { ThemeProvider } from "./context/ThemeContext";
import AbilityProvider from "./ability/AbilityProvider.jsx"; 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <ArticleProvider>
            <BrowserRouter>
            <AbilityProvider>
              <DialogProvider>
                <AnnouncementModal>
                  {import.meta.env.DEV
                    ? "Trang web sử dụng dữ liệu giả lập!\nChi tiết tài khoản demo nằm trong README / docs."
                    : `Chào mừng bạn đến với !${import.meta.env.DEV}`}
                </AnnouncementModal>
                <App></App>
              </DialogProvider>
              </AbilityProvider>
            </BrowserRouter>
          </ArticleProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
