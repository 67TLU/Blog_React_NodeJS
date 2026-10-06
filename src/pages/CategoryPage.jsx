import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import ArticleCard from "@/components/cards/ArticleCard";
import { mockArticles } from "@/data/mockArticles";

// Icons & UI
import { SlidersHorizontal, Home, ChevronRight, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const { slug } = useParams();
  const [activeFilter, setActiveFilter] = useState("latest"); // 'latest', 'popular'
  const [visibleCount, setVisibleCount] = useState(8);
  const [loadingMore, setLoadingMore] = useState(false);

  // Bản đồ tên chuyên mục chuẩn
  const categoryNames = {
    "the-thao": "Thể thao",
    "tin-tuc": "Tin tức",
    "tai-chinh": "Tài chính",
    "cong-nghe": "Công nghệ",
    "thoi-tiet": "Thời tiết",
    "all": "Tất cả chuyên mục",
  };

  const currentCategoryName = categoryNames[slug] || "Tất cả chuyên mục";

  // Lọc bài viết theo chuyên mục
  let filteredArticles = mockArticles.filter(
    (item) => item.categorySlug === slug || slug === "all"
  );

  // Nếu không có bài viết trùng slug, dùng tất cả làm bài ví dụ
  if (filteredArticles.length === 0) {
    filteredArticles = mockArticles;
  }

  // Sắp xếp bài viết theo bộ lọc
  if (activeFilter === "popular") {
    filteredArticles = [...filteredArticles].sort(
      (a, b) => parseFloat(b.views || 0) - parseFloat(a.views || 0)
    );
  }

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setLoadingMore(false);
    }, 600);
  };

  return (
    <PublicLayout>
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground font-medium flex-wrap">
          <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Trang chủ</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold capitalize">{currentCategoryName}</span>
        </nav>

        {/* Header Chuyên mục — dùng semantic tokens */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-border rounded-xl p-6 md:p-8">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">Chuyên mục</span>
          <h1 className="text-3xl md:text-5xl font-black text-foreground mt-1 mb-2 capitalize">
            {currentCategoryName}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            Cập nhật những tin tức mới nhất, chính xác và chuyên sâu về chủ đề{" "}
            {currentCategoryName}.
          </p>
        </div>

        {/* Thanh Bộ lọc & Sắp xếp — dùng semantic tokens */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-card p-3 rounded-lg border border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span>Sắp xếp theo:</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={activeFilter === "latest" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setActiveFilter("latest");
                setVisibleCount(8);
              }}
              className="cursor-pointer"
            >
              Mới nhất
            </Button>
            <Button
              variant={activeFilter === "popular" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setActiveFilter("popular");
                setVisibleCount(8);
              }}
              className="cursor-pointer"
            >
              Nhiều lượt xem
            </Button>
          </div>
        </div>

        {/* Lưới bài viết (Article Grid) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArticles.slice(0, visibleCount).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground bg-card border border-border rounded-xl">
            Chưa có bài viết nào trong chuyên mục này.
          </div>
        )}

        {/* Nút Load More */}
        {visibleCount < filteredArticles.length && (
          <div className="flex justify-center pt-4">
            <Button
              variant="outline"
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="gap-2 px-8 py-2 font-medium cursor-pointer border-border hover:bg-muted"
            >
              {loadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  Đang tải thêm...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Xem thêm bài viết
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}