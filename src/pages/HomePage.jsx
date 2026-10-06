import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import ArticleCard from "@/components/cards/ArticleCard";
import { mockArticles } from "@/data/mockArticles";

export default function HomePage() {
  const featuredArticle = mockArticles[0];
  const otherArticles = mockArticles.slice(1);

  return (
    <PublicLayout>
      <div className="space-y-6">
        {/* Section: Tin nổi bật (Featured) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ArticleCard article={featuredArticle} variant="featured" />
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex flex-col justify-between">
            <h3 className="font-bold text-lg mb-3 border-b border-zinc-800 pb-2">Câu chuyện hàng đầu</h3>
            <div className="space-y-4">
              {otherArticles.slice(0, 3).map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <span className="text-xs text-blue-400 font-medium">{item.category}</span>
                  <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-zinc-500">{item.publishedAt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Lưới bài viết (Grid layout) */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-5 bg-blue-500 rounded-full inline-block"></span>
            Tin tức mới nhất
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}