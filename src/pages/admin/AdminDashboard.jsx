import React from "react";
import { Link } from "react-router-dom";
import { Users, FileText, CheckCircle2, Clock, AlertTriangle, TrendingUp, ShieldAlert, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Bảng điều khiển Quản trị (Admin Dashboard)</h1>
        <p className="text-xs text-zinc-400">Tổng quan tình hình hệ thống, duyệt bài và hoạt động người dùng</p>
      </div>

      {/* Thẻ chỉ số chính */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400 font-semibold">Tổng bài viết</p>
              <p className="text-2xl font-black text-white mt-1">1,248</p>
              <span className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> +12 bài hôm nay
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400 font-semibold">Bài chờ kiểm duyệt</p>
              <p className="text-2xl font-black text-amber-400 mt-1">14</p>
              <span className="text-[10px] text-amber-400 flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" /> Cần xử lý ngay
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400 font-semibold">Tổng Thành viên</p>
              <p className="text-2xl font-black text-white mt-1">8,920</p>
              <span className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> +145 tháng này
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400 font-semibold">Báo cáo vi phạm</p>
              <p className="text-2xl font-black text-red-400 mt-1">3</p>
              <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-1">
                Bình luận & bài viết
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Layout 2 cột: Bài chờ duyệt & Nhật ký hoạt động */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cột trái: Bài chờ duyệt gần nhất */}
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" /> Bài viết chờ phê duyệt gần đây
            </h3>
            <Link to="/admin/articles">
              <Button size="sm" variant="ghost" className="text-xs text-blue-400 hover:text-blue-300 gap-1 p-0">
                Xem tất cả <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>

          <div className="divide-y divide-zinc-800">
            {[
              { id: "1", title: "Ứng dụng AI vào dự báo thời tiết chính xác năm 2026", author: "Nguyễn Văn A", category: "Công nghệ", time: "10 phút trước" },
              { id: "2", title: "Phân tích xu hướng dòng vốn FDI vào ngành Năng lượng xanh", author: "Trần Thị B", category: "Tài chính", time: "35 phút trước" },
              { id: "3", title: "Kết quả lượt trận Champions League rạng sáng nay", author: "Lê Hoàng C", category: "Thể thao", time: "2 giờ trước" },
            ].map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between first:pt-0 last:pb-0">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                    <span className="text-blue-400 font-medium">{item.category}</span>
                    <span>•</span>
                    <span>Tác giả: {item.author}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <Link to="/admin/articles">
                  <Button size="sm" className="bg-amber-600/20 text-amber-400 hover:bg-amber-600/30 border border-amber-500/30 text-[11px] h-7 px-3">
                    Duyệt ngay
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Cột phải: Nhật ký hoạt động (Audit log mini) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-white">Nhật ký hệ thống</h3>
          <div className="space-y-3 text-xs">
            {[
              { action: "Đã xuất bản bài viết #101", user: "Admin", time: "5 phút trước", color: "text-green-400" },
              { action: "Cập nhật quyền vai trò Editor", user: "Admin", time: "1 giờ trước", color: "text-blue-400" },
              { action: "Khóa tài khoản vi phạm #392", user: "Mod_01", time: "3 giờ trước", color: "text-red-400" },
              { action: "Thêm danh mục mới 'Bán dẫn'", user: "Admin", time: "5 giờ trước", color: "text-purple-400" },
            ].map((log, idx) => (
              <div key={idx} className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80 space-y-1">
                <p className={`font-semibold ${log.color}`}>{log.action}</p>
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>Thực hiện: {log.user}</span>
                  <span>{log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}