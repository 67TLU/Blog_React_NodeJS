import React from "react";
import { Calendar, Clock, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockScheduledArticles = [
  { id: "s1", title: "Phân tích xu hướng công nghệ năm 2027", scheduleAt: "10/10/2026 - 08:00 AM", category: "Công nghệ" },
  { id: "s2", title: "Toàn cảnh giải đấu Thể thao Châu Á", scheduleAt: "12/10/2026 - 18:30 PM", category: "Thể thao" },
];

export default function PublishSchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Calendar className="w-6 h-6 text-amber-500" /> Lịch xuất bản bài viết
        </h1>
        <p className="text-xs text-muted-foreground">Danh sách các bài viết đã được hẹn giờ tự động xuất bản</p>
      </div>

      <div className="space-y-4">
        {mockScheduledArticles.map((item) => (
          <div key={item.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{item.category}</span>
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1 pt-1">
                <Clock className="w-3.5 h-3.5" /> Thời gian xuất bản: <strong>{item.scheduleAt}</strong>
              </p>
            </div>
            <Button size="sm" variant="outline" className="border-border text-foreground">
              <Edit className="w-4 h-4 mr-1" /> Đổi lịch
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}