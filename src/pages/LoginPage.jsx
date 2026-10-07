import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// Import các icon từ lucide-react
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State ẩn/hiện mật khẩu
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email });
      navigate("/"); 
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-zinc-800  shadow-2xl shadow-black/40 dynamic-fade-in">
        <CardHeader className="space-y-2 text-center">
          {/* Logo giả định hoặc Icon thương hiệu phía trên */}
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500">
            <Lock className="h-5 w-5" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Chào mừng trở lại</CardTitle>
          <CardDescription className="text-zinc-400 text-sm">
            Nhập thông tin của bạn để truy cập hệ thống quản trị
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Form đăng nhập chính */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Trường Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider ">
                Địa chỉ Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                  <Mail className="h-4 w-4" />
                </div>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11  border-zinc-800 pl-10  placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  required
                />
              </div>
            </div>

            {/* Trường Mật khẩu */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider ">
                  Mật khẩu
                </label>
                <Link to="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300 hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                  <Lock className="h-4 w-4" />
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11  border-zinc-800 pl-10 pr-10 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  required
                />
                {/* Nút bấm ẩn hiện mật khẩu tích hợp icon Lucide */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Nút Submit chính */}
            <Button type="submit" className="h-11 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
              Đăng nhập tài khoản
            </Button>
          </form>

          {/* Đường kẻ phân cách giữa Đăng nhập thường và Mạng xã hội */}
          <div className="relative flex items-center justify-center my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-800" />
            </div>
            <span className="relative bg-white dark:bg-zinc-900 px-3 text-xs  uppercase tracking-wider">
              Hoặc tiếp tục với
            </span>
          </div>
{/* Khối nút bấm Đăng nhập mạng xã hội (Social Login) đã sửa đổi */}
<div className="grid grid-cols-2 gap-3">
  {/* Nút đăng nhập Google bằng mã SVG */}
  <Button variant="outline" type="button" className="border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white h-10 transition-colors">
    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://w3.org" viewBox="0 0 488 512">
      <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
    </svg>
    Google
  </Button>

  {/* Nút đăng nhập GitHub bằng mã SVG */}
  <Button variant="outline" type="button" className="border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white h-10 transition-colors">
    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
    GitHub
  </Button>
</div>


          {/* Liên kết Đăng ký */}
          <div className="text-center text-sm text-zinc-400">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors">
              Đăng ký ngay
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
