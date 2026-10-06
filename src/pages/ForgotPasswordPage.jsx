import React, { useState } from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
      <div className="flex justify-center items-center py-12">
        <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Khôi phục mật khẩu</CardTitle>
            <CardDescription className="text-zinc-400">
              Nhập email liên kết với tài khoản để nhận hướng dẫn đặt lại mật khẩu
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sent ? (
              <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm">
                Chúng tôi đã gửi link khôi phục mật khẩu tới email của bạn. Vui lòng kiểm tra hộp thư!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Email tài khoản</label>
                  <Input type="email" placeholder="name@example.com" required className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-semibold gap-2">
                  <Mail className="w-4 h-4" /> Gửi link xác nhận
                </Button>
              </form>
            )}

            <div className="text-center pt-2">
              <Link to="/login" className="text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-1">
                <ArrowLeft className="w-3 h-3" /> Quay lại Đăng nhập
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}