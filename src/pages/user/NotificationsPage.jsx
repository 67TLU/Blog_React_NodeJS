import React, { useState } from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { Bell, CheckCircle, MessageSquare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockNotifications = [
  {
    id: "n1",
    type: "COMMENT",
    title: "Nguyễn Văn B đã trả lời bình luận của bạn",
    time: "5 phút trước",
    isRead: false,
  },
  {
    id: "n2",
    type: "SYSTEM",
    title: "Bài viết 'Xu hướng AI 2026' của bạn đã được phê duyệt",
    time: "2 giờ trước",
    isRead: false,
  },
  {
    id: "n3",
    type: "LIKE",
    title: "Trần Thị C đã thích bài viết của bạn",
    time: "1 ngày trước",
    isRead: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <PublicLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="border-b border-zinc-800 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Bell className="w-6 h-6 text-yellow-500" /> Thông báo
            </h1>
            <p className="text-xs text-zinc-400">Cập nhật tương tác và tin tức từ hệ thống</p>
          </div>
          <Button size="sm" variant="ghost" onClick={markAllAsRead} className="text-xs text-blue-400 hover:bg-zinc-800">
            Đánh dấu tất cả đã đọc
          </Button>
        </div>

        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                n.isRead ? "bg-zinc-900 border-zinc-800 text-zinc-400" : "bg-zinc-800/80 border-blue-500/30 text-white"
              }`}
            >
              <div className="p-2 rounded-lg bg-zinc-800 mt-0.5">
                {n.type === "COMMENT" && <MessageSquare className="w-4 h-4 text-blue-400" />}
                {n.type === "SYSTEM" && <CheckCircle className="w-4 h-4 text-green-400" />}
                {n.type === "LIKE" && <Heart className="w-4 h-4 text-red-400" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{n.title}</p>
                <span className="text-xs text-zinc-500">{n.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}