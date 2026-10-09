import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

import mockUser from '@/data/mockUser'
const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("auth-user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      // localStorage/JSON hỏng → coi như chưa đăng nhập, không crash app
      localStorage.removeItem("auth-user");
      return null;
    }
  });
  // localStorage đọc đồng bộ → không cần loading async ở lần đầu
  const [loading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem("auth-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth-user");
    }
  }, [user]);

  const login = useCallback((credentials) => {
    // Mock logic đăng nhập: phải khớp cả email VÀ password
    const matched = mockUser.find((e) => e.email === credentials.email);
    if (matched && matched.password === credentials.password) {
      const safeUser = { ...matched };
      delete safeUser.password;
      setUser(safeUser);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("auth-user");
  }, []);

  // Hàm chuyển nhanh Role để test giao diện Admin / Author / Reader
  const switchRole = useCallback((newRole) => {
    setUser((prev) => (prev ? { ...prev, role: newRole } : null));
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      role: user?.role || "guest",
      login,
      logout,
      loading,
      switchRole,
    }),
    [user, login, logout, loading, switchRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);