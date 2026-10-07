import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const mockUser = {
  id: "u-101",
  name: "Quản trị viên Hệ thống",
  email: "admin@portalnews.com",
  role: "subscriber", // 'admin' | 'editor' | 'author' | 'subscriber'
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("auth-user");
    return saved ? JSON.parse(saved) : mockUser;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      localStorage.setItem("auth-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth-user");
    }
    setLoading(false); // Kết thúc trạng thái loading sau khi kiểm tra user
  }, [user]);

  const login = (credentials) => {
    // Giả lập logic Đăng nhập thành công
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  // Hàm chuyển nhanh Role để test giao diện Admin / Author / Reader
  const switchRole = (newRole) => {
    setUser((prev) => (prev ? { ...prev, role: newRole } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        role: user?.role || "guest",
        login,
        logout,loading,
        switchRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);