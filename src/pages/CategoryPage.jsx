import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import ArticleCard from "@/components/cards/ArticleCard";
import { mockArticles } from "@/data/mockArticles";

// Icons & UI
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const { slug } = useParams();
  const [activeFilter, setActiveFilter] = useState("latest"); // 'latest', 'popular', 'featured'

  // Bản đồ tên chuyên mục chuẩn
  const categoryNames = {
    "the-thao": "Thể thao",
    "tin-tuc": "Tin tức",
    "tai-chinh": "Tài chính",
    "cong-nghe": "Công nghệ",
    "thoi-tiet": "Thời tiết",
  };

  const currentCategoryName = categoryNames[slug] || "Tất cả chuyên mục";

  // Lọc bài viết theo chuyên mục
  let filteredArticles = mockArticles.filter((item) => item.categorySlug === slug || slug === "all");

  // Nếu không có bài viết trùng slug, dùng tất cả làm bài ví dụ
  if (filteredArticles.length === 0) {
    filteredArticles = mockArticles;
  }

  // Sắp xếp bài viết theo bộ lọc
  if (activeFilter === "popular") {
    filteredArticles = [...filteredArticles].sort((a, b) => parseFloat(b.views || 0) - parseFloat(a.views || 0));
  }

  return (
    <PublicLayout>
      <div className="space-y-6">
        
        {/* Header Chuyên mục */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-6 md:p-8">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Chuyên mục</span>
          <h1 className="text-3xl md:text-5xl font-black text-white mt-1 mb-2 capitalize">
            {currentCategoryName}
          </h1>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base">
            Cập nhật những tin tức mới nhất, chính xác và chuyên sâu về chủ đề {currentCategoryName}.
          </p>
        </div>

        {/* Thanh Bộ lọc & Sắp xếp (Filter/Sort) */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
            <SlidersHorizontal className="w-4 h-4 text-blue-500" />
            <span>Sắp xếp theo:</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={activeFilter === "latest" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter("latest")}
              className={activeFilter === "latest" ? "bg-blue-600 hover:bg-blue-700" : "text-zinc-400"}
            >
              Mới nhất
            </Button>
            <Button
              variant={activeFilter === "popular" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter("popular")}
              className={activeFilter === "popular" ? "bg-blue-600 hover:bg-blue-700" : "text-zinc-400"}
            >
              Nhiều lượt xem
            </Button>
          </div>
        </div>

        {/* Lưới bài viết (Article Grid) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-500">
            Chưa có bài viết nào trong chuyên mục này.
          </div>
        )}

        {/* Phân trang / Nút Load More */}
        <div className="flex justify-center pt-6">
          <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 px-8">
            Xem thêm bài viết
          </Button>
        </div>

      </div>
    </PublicLayout>
  );
}