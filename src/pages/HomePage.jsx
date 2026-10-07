import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import ArticleCard from "@/components/cards/ArticleCard";
import { ArticleCardSkeleton } from "@/components/cards/Skeletons";
import { mockArticles } from "@/data/mockArticles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, TrendingUp, Sparkles, ArrowRight, Loader2 } from "lucide-react";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);//Khoi tao so bai viet mac dinh hien thi la 8
  const [loadingMore, setLoadingMore] = useState(false);//khoi tao trang thai loading khi load them bai viet

  // loading được derive ngay trong render — không cần setState đồng bộ trong effect
  const loading = !loaded;

  // Giả lập thời gian fetch dữ liệu để hiển thị Skeleton trước ArticleCard
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const featuredArticle = mockArticles[0];
  const topStories = mockArticles.slice(1, 5);
  const latestArticles = mockArticles.slice(1);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);//tai them 4 trang bai viet moi khi bam xem them 
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <PublicLayout>
      <div className="space-y-8">
        {/* Section: Breaking News Ticker (Dải tin nóng) */}
        <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-2.5 shadow-2xs overflow-hidden">
          <Badge className="bg-red-600 hover:bg-red-700 text-white shrink-0 flex items-center gap-1 text-xs uppercase tracking-wider py-1">
            <Flame className="w-3.5 h-3.5 animate-bounce" /> Tin nóng
          </Badge>
          <div className="overflow-hidden whitespace-nowrap text-sm text-foreground flex-1">
            <Link
              to={`/article/${featuredArticle.slug || featuredArticle.id}`}
              className="hover:text-red-500 transition-colors font-medium inline-block truncate max-w-full"
            >
              {featuredArticle.title} — {featuredArticle.excerpt}
            </Link>
          </div>
          <Link
            to="/category/all"
            className="text-xs text-muted-foreground hover:text-foreground hidden sm:flex items-center gap-1 shrink-0 font-medium"
          >
            Tất cả tin <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Section: Tin nổi bật & Top Stories */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cột trái: Bài Featured lớn */}
          <div className="lg:col-span-2 min-h-[380px]">
            {loading ? (
              <ArticleCardSkeleton variant="featured" />
            ) : (
              <ArticleCard article={featuredArticle} variant="featured" />
            )}
          </div>

          {/* Cột phải: Câu chuyện hàng đầu (Top Stories) */}
          <div className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  <span>Câu chuyện hàng đầu</span>
                </h3>
                <span className="text-xs text-muted-foreground">Cập nhật liên tục</span>
              </div>

              <div className="space-y-4">
                {topStories.map((item, idx) => (
                  <Link
                    key={item.id}
                    to={`/article/${item.slug || item.id}`}
                    className="flex gap-3 group cursor-pointer pb-3 border-b border-border/50 last:border-none last:pb-0"
                  >
                    <span className="text-xl font-black text-muted-foreground/60 group-hover:text-primary transition-colors shrink-0 w-6">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground">{item.publishedAt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/category/tin-tuc"
              className="mt-4 pt-3 border-t border-border flex items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>Xem thêm tiêu điểm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section: Lưới bài viết mới nhất (Latest News Grid) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="w-2 h-5 bg-primary rounded-full inline-block" />
              <span>Tin tức mới nhất</span>
            </h2>
            <div className="flex items-center gap-2">
              <Link to="/category/cong-nghe">
                <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted">
                  Công nghệ
                </Badge>
              </Link>
              <Link to="/category/the-thao">
                <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted">
                  Thể thao
                </Badge>
              </Link>
              <Link to="/category/tai-chinh">
                <Badge variant="outline" className="text-xs cursor-pointer hover:bg-muted">
                  Tài chính
                </Badge>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {loading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <ArticleCardSkeleton key={`skeleton-${idx}`} />
              ))
            ) : (
              <>
                {latestArticles.slice(0, visibleCount).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
                {/* Skeleton cho các bài sẽ được tải thêm */}
                {loadingMore &&
                  Array.from({ length: 4 }).map((_, idx) => (
                    <ArticleCardSkeleton key={`skeleton-more-${idx}`} />
                  ))}
              </>
            )}
          </div>

          {/* Nút Tải thêm bài viết */}
          {visibleCount < latestArticles.length && (
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
                    Xem thêm bài viết khác
                  </>
                )}
              </Button>
            </div>
          )}
        </section>
      </div>
    </PublicLayout>
  );
}