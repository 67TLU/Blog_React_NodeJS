import React from "react";
import { BarChart3, Eye, Heart, MessageSquare, Bookmark, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ArticleAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-500" /> Thống kê & Hiệu suất bài viết
        </h1>
        <p className="text-xs text-muted-foreground">Phân tích hành vi tương tác độc giả chi tiết theo bài viết</p>
      </div>

      {/* Thẻ chỉ số tổng quan */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border text-foreground">
          <CardContent className="p-4 space-y-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Lượt xem</span>
            <p className="text-2xl font-black text-foreground">45,280</p>
            <span className="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-0.5"><TrendingUp className="w-3 h-3" /> +18% tuần này</span>
          </CardContent>
        </Card>

        <Card className="bg-card border-border text-foreground">
          <CardContent className="p-4 space-y-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-red-600 dark:text-red-400" /> Lượt thích</span>
            <p className="text-2xl font-black text-foreground">3,120</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border text-foreground">
          <CardContent className="p-4 space-y-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Bình luận</span>
            <p className="text-2xl font-black text-foreground">890</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border text-foreground">
          <CardContent className="p-4 space-y-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-green-600 dark:text-green-400" /> Thời gian đọc TB</span>
            <p className="text-2xl font-black text-foreground">4m 12s</p>
          </CardContent>
        </Card>
      </div>

      {/* Biểu đồ mô phỏng lượt xem theo ngày */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h3 className="text-sm font-bold text-foreground">Lưu lượng truy cập 7 ngày qua</h3>
        <div className="h-44 flex items-end justify-between gap-2 pt-6 border-b border-border pb-2">
          {[
            { day: "Thứ 2", val: 40 },
            { day: "Thứ 3", val: 65 },
            { day: "Thứ 4", val: 30 },
            { day: "Thứ 5", val: 85 },
            { day: "Thứ 6", val: 95 },
            { day: "Thứ 7", val: 50 },
            { day: "Chủ Nhật", val: 75 },
          ].map((bar, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div
                style={{ height: `${bar.val}%` }}
                className="w-full bg-blue-600 hover:bg-blue-500 rounded-t-md transition-all cursor-pointer"
              ></div>
              <span className="text-[10px] text-muted-foreground">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}