import React, { useState } from "react";
import { Check, X, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPendingArticles = [
  {
    id: "p1",
    title: "Đánh giá chi tiết chipset AI thế hệ mới trên các dòng flagship 2026",
    author: "Nguyễn Văn A",
    category: "Công nghệ",
    submittedAt: "10 phút trước",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80",
  },
  {
    id: "p2",
    title: "Dự báo xu hướng thị trường tài chính toàn cầu quý IV",
    author: "Trần Thị B",
    category: "Tài chính",
    submittedAt: "1 giờ trước",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=80",
  },
];

export default function ArticleModerationPage() {
  const [articles, setArticles] = useState(mockPendingArticles);

  const handleApprove = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
    alert("Bài viết đã được phê duyệt và xuất bản!");
  };

  const handleReject = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
    alert("Đã từ chối bài viết!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Clock className="w-6 h-6 text-amber-500" /> Duyệt bài viết chờ xuất bản
        </h1>
        <p className="text-xs text-zinc-400">Kiểm tra nội dung bài viết từ các tác giả trước khi hiển thị công khai</p>
      </div>

      {articles.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center text-zinc-500">
          Hiện không có bài viết nào đang chờ duyệt.
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((item) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <img src={item.image} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white truncate">{item.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1">
                    <span>Tác giả: <strong className="text-zinc-200">{item.author}</strong></span>
                    <span>•</span>
                    <span>Chuyên mục: {item.category}</span>
                    <span>•</span>
                    <span>{item.submittedAt}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                <Button size="sm" variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300 gap-1">
                  <Eye className="w-4 h-4" /> Xem thử
                </Button>
                <Button size="sm" onClick={() => handleApprove(item.id)} className="bg-green-600 hover:bg-green-700 text-white gap-1">
                  <Check className="w-4 h-4" /> Duyệt
                </Button>
                <Button size="sm" onClick={() => handleReject(item.id)} className="bg-red-600 hover:bg-red-700 text-white gap-1">
                  <X className="w-4 h-4" /> Từ chối
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}