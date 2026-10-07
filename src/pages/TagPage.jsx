import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import ArticleCard from "@/components/cards/ArticleCard";
import { ArticleCardSkeleton } from "@/components/cards/Skeletons";
import { Tag as TagIcon, Calendar, Home, ChevronRight, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockArticles } from "@/data/mockArticles";

export default function TagPage() {
  const { slug } = useParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [loadedSlug, setLoadedSlug] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  // loading được derive ngay trong render — không cần setState đồng bộ trong effect
  const loading = loadedSlug !== slug;

  // Giả lập thời gian fetch dữ liệu — hiển thị Skeleton khi đang tải
  useEffect(() => {
    const timer = setTimeout(() => setLoadedSlug(slug), 600);
    return () => clearTimeout(timer);
  }, [slug]);

  // Tên tag hiển thị từ Slug
  const tagName = slug ? slug.replace(/-/g, " ").toUpperCase() : "TAG";
  const tagDisplay = slug ? slug.replace(/-/g, " ") : "tag";

  // Giả lập danh sách bài có thẻ tag này
  const filteredArticles = mockArticles;

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
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
          <span className="hover:text-foreground">Thẻ chủ đề</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">#{tagDisplay}</span>
        </nav>

        {/* Banner Tag Header — semantic tokens */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <TagIcon className="w-4 h-4" /> Thẻ chủ đề
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">
              #{tagName}
            </h1>
            <p className="text-xs text-muted-foreground">
              Tổng hợp{" "}
              <strong className="text-foreground">{filteredArticles.length}</strong>{" "}
              bài viết liên quan đến chủ đề này
            </p>
          </div>
          <Badge className="hidden sm:flex items-center gap-1.5 bg-primary/10 text-primary border-primary/20 text-sm px-3 py-1.5">
            <TagIcon className="w-3.5 h-3.5" />
            {filteredArticles.length} bài
          </Badge>
        </div>

        {/* Danh sách bài viết — dùng ArticleCard chuẩn, Skeleton khi đang tải */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            Array.from({ length: 9 }).map((_, idx) => (
              <ArticleCardSkeleton key={`skeleton-${idx}`} />
            ))
          ) : (
            <>
              {filteredArticles.slice(0, visibleCount).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
              {/* Skeleton cho các bài sẽ được tải thêm */}
              {loadingMore &&
                Array.from({ length: 6 }).map((_, idx) => (
                  <ArticleCardSkeleton key={`skeleton-more-${idx}`} />
                ))}
            </>
          )}
        </div>

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