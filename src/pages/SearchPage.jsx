import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import { Search, Filter, Calendar, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockArticles } from "@/data/mockArticles";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [keyword, setKeyword] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const results = mockArticles.filter((item) => {
    const matchKeyword = item.title.toLowerCase().includes(queryParam.toLowerCase());
    const matchCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    return matchKeyword && matchCategory;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: keyword });
  };

  return (
    <PublicLayout>
      <div className="space-y-6">
        {/* Thanh tìm kiếm chính */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">Tìm kiếm bài viết</h1>
          <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl mx-auto">
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập từ khóa tìm kiếm (ví dụ: AI, Thể thao, Kinh tế)..."
              className="bg-zinc-800 border-zinc-700 text-white h-12"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 h-12 px-6 font-semibold gap-2">
              <Search className="w-4 h-4" /> Tìm
            </Button>
          </form>
        </div>

        {/* Bộ lọc & Kết quả */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar lọc */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-fit space-y-4">
            <h3 className="font-bold text-sm text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Filter className="w-4 h-4 text-blue-500" /> Bộ lọc chuyên mục
            </h3>
            <div className="space-y-1 text-sm">
              {["ALL", "Công nghệ", "Thể thao", "Tài chính", "Thời tiết"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === cat ? "bg-blue-600 text-white font-semibold" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {cat === "ALL" ? "Tất cả chuyên mục" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Danh sách bài viết tìm được */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-sm text-zinc-400">
              Tìm thấy <strong className="text-white">{results.length}</strong> kết quả cho từ khóa "{queryParam}"
            </p>

            {results.length === 0 ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center text-zinc-500">
                Không tìm thấy bài viết nào phù hợp.
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="flex flex-col sm:flex-row gap-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-all group"
                  >
                    <img src={article.image} alt="" className="w-full sm:w-48 h-32 rounded-lg object-cover flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <span className="text-xs font-bold text-blue-400 uppercase">{article.category}</span>
                      <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-xs text-zinc-400 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500 pt-2">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.publishedAt}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}