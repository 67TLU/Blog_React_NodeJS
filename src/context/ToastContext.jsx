import React, { createContext, useContext, useState } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Render Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-xl border shadow-xl transition-all animate-in fade-in slide-in-from-bottom-3 duration-200 ${
              toast.type === "success"
                ? "bg-zinc-900 border-emerald-500/30 text-emerald-400"
                : toast.type === "error"
                ? "bg-zinc-900 border-red-500/30 text-red-400"
                : "bg-zinc-900 border-blue-500/30 text-blue-400"
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              {toast.type === "success" && <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />}
              {toast.type === "error" && <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />}
              {toast.type === "info" && <Info className="w-4 h-4 shrink-0 text-blue-400" />}
              <span className="text-zinc-200">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-zinc-500 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);