import React, { useState } from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { Clock, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockArticles } from "@/data/mockArticles";

export default function ReadingHistoryPage() {
  const [history, setHistory] = useState([
    { ...mockArticles[0], readAt: "10 phút trước" },
    { ...mockArticles[1], readAt: "Hôm qua, 14:30" },
    { ...mockArticles[2], readAt: "2 ngày trước" },
  ]);

  const clearAll = () => {
    setHistory([]);
  };

  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="border-b border-border pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-500" /> Lịch sử đã đọc
            </h1>
            <p className="text-xs text-muted-foreground">Các bài viết bạn đã xem gần đây</p>
          </div>
          {history.length > 0 && (
            <Button size="sm" variant="outline" onClick={clearAll} className="border-border text-red-600 dark:text-red-400 hover:bg-muted gap-1">
              <Trash2 className="w-4 h-4" /> Xóa toàn bộ lịch sử
            </Button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-12 text-center text-muted-foreground">
            Lịch sử đọc trống.
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((article, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <img src={article.image} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <Link to={`/article/${article.id}`} className="text-sm font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 truncate block">
                      {article.title}
                    </Link>
                    <span className="text-xs text-muted-foreground mt-1 block">Đã xem: {article.readAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}