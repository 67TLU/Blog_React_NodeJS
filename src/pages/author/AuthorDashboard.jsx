import React from "react";
import { Link } from "react-router-dom";
import { FileText, Eye, CheckCircle2, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockArticles } from "@/data/mockArticles";

export default function AuthorDashboard() {
  const stats = [
    { title: "Tổng bài viết", value: "12", icon: FileText, color: "text-blue-500" },
    { title: "Đã xuất bản", value: "8", icon: CheckCircle2, color: "text-green-500" },
    { title: "Bài chờ duyệt", value: "2", icon: Clock, color: "text-amber-500" },
    { title: "Tổng lượt xem", value: "45.2k", icon: Eye, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">Author Dashboard</h1>
          <p className="text-sm text-zinc-400">Quản lý bài viết và theo dõi hiệu suất nội dung của bạn.</p>
        </div>
        <Link to="/author/create">
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2 font-semibold">
            <Plus className="w-4 h-4" /> Viết bài mới
          </Button>
        </Link>
      </div>

      {/* Thống kê dạng Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400 font-medium mb-1">{item.title}</p>
                  <p className="text-2xl font-black">{item.value}</p>
                </div>
                <div className={`p-3 bg-zinc-800 rounded-xl ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Danh sách bài viết gần đây */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Bài viết gần đây</h2>
          <Link to="/author/articles" className="text-xs text-blue-400 hover:underline">
            Xem tất cả
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-800">
          {mockArticles.slice(0, 4).map((article) => (
            <div key={article.id} className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <img src={article.image} alt={article.title} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white truncate">{article.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.publishedAt}</span>
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 flex-shrink-0">
                Đã xuất bản
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}