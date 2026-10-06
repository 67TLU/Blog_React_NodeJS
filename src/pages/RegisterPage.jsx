import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import PublicLayout from "@/layouts/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      login({ email, name });
      navigate("/");
    }
  };

  return (
    <PublicLayout>
      <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-950 text-white shadow-2xl shadow-black/40">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500">
              <User className="h-5 w-5" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Tạo tài khoản</CardTitle>
            <CardDescription className="text-zinc-400 text-sm">
              Đăng ký để lưu bài, bình luận và theo dõi tác giả yêu thích
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Họ và tên</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                    <User className="h-4 w-4" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 bg-zinc-900 border-zinc-800 pl-10 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Địa chỉ Email</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 bg-zinc-900 border-zinc-800 pl-10 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Mật khẩu</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Tối thiểu 6 ký tự"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 bg-zinc-900 border-zinc-800 pl-10 pr-10 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="h-11 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                Đăng ký tài khoản
              </Button>
            </form>

            <div className="text-center text-sm text-zinc-400">
              Đã có tài khoản?{" "}
              <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                Đăng nhập ngay
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  );
}