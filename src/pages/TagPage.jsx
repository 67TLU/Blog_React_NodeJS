import React from "react";
import { useParams, Link } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import { Tag as TagIcon, Calendar, ArrowRight } from "lucide-react";
import { mockArticles } from "@/data/mockArticles";

export default function TagPage() {
  const { slug } = useParams();
  
  // Tên tag hiển thị từ Slug
  const tagName = slug ? slug.replace(/-/g, " ").toUpperCase() : "TAG";

  // Giả lập danh sách bài có thẻ tag này
  const filteredArticles = mockArticles;

  return (
    <PublicLayout>
      <div className="space-y-6">
        {/* Banner Tag Header */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-wider">
              <TagIcon className="w-4 h-4"/> Thẻ chủ đề
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">#{tagName}</h1>
            <p className="text-xs text-zinc-400">
              Tổng hợp <strong className="text-white">{filteredArticles.length}</strong> bài viết liên quan đến chủ đề này
            </p>
          </div>
        </div>

        {/* Danh sách bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all flex flex-col group" key="{article.id}" to="{`/article/${article.id}`}">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  {article.category}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-xs text-zinc-400 line-clamp-2">{article.excerpt}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 pt-3 border-t border-zinc-800/80">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> {article.publishedAt}</span>
                  <span className="flex items-center gap-1 font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                    Đọc tiếp <ArrowRight className="w-3 h-3"/>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}