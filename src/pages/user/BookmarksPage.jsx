import React, { useState } from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { Bookmark, Trash2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockArticles } from "@/data/mockArticles";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState(mockArticles.slice(0, 3));

  const handleRemove = (id) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="border-b border-zinc-800 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Bookmark className="w-6 h-6 text-amber-500" /> Bài viết đã lưu
            </h1>
            <p className="text-xs text-zinc-400">Danh sách các bài viết bạn lưu lại để đọc sau</p>
          </div>
          <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full font-semibold">
            {bookmarks.length} bài viết
          </span>
        </div>

        {bookmarks.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center text-zinc-500">
            Bạn chưa lưu bài viết nào.
          </div>
        ) : (
          <div className="space-y-4">
            {bookmarks.map((article) => (
              <div
                key={article.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img src={article.image} alt="" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-blue-400">{article.category}</span>
                    <h3 className="text-base font-semibold text-white truncate">{article.title}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{article.publishedAt}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link to={`/article/${article.id}`}>
                    <Button size="icon" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      <ExternalLink className="w-4 h-4 text-zinc-300" />
                    </Button>
                  </Link>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleRemove(article.id)}
                    className="text-red-400 hover:bg-zinc-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}