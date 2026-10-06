import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Edit, Trash2, Eye, Plus, CheckCircle, Clock, FileEdit } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockAuthorArticles = [
  { id: "101", title: "Kỷ nguyên Chip bán dẫn AI thế hệ mới năm 2026", category: "Công nghệ", status: "PUBLISHED", views: 4520, createdAt: "20/09/2026" },
  { id: "102", title: "Xu hướng thị trường Tài chính số Việt Nam 2027", category: "Tài chính", status: "PENDING", views: 0, createdAt: "02/10/2026" },
  { id: "103", title: "Ghi chép về sự phát triển của Năng lượng Xanh", category: "Kinh tế", status: "DRAFT", views: 0, createdAt: "05/10/2026" },
];

export default function MyArticlesPage() {
  const [activeTab, setActiveTab] = useState("ALL"); // ALL | PUBLISHED | PENDING | DRAFT
  const [articles, setArticles] = useState(mockAuthorArticles);

  const filtered = articles.filter((a) => {
    if (activeTab === "ALL") return true;
    return a.status === activeTab;
  });

  const handleDelete = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa bài viết/bản nháp này?")) {
      setArticles(articles.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" /> Bài viết của tôi
          </h1>
          <p className="text-xs text-zinc-400">Quản lý toàn bộ danh sách bài đã đăng, bài chờ duyệt và bản nháp</p>
        </div>
        <Link to="/author/create">
          <Button className="bg-blue-600 hover:bg-blue-700 font-semibold gap-2 text-xs">
            <Plus className="w-4 h-4" /> Viết bài mới
          </Button>
        </Link>
      </div>

      {/* Tabs lọc trạng thái */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 text-xs overflow-x-auto">
        {[
          { key: "ALL", label: "Tất cả bài viết" },
          { key: "PUBLISHED", label: "Đã xuất bản" },
          { key: "PENDING", label: "Chờ phê duyệt" },
          { key: "DRAFT", label: "Bản nháp" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
              activeTab === tab.key
                ? "bg-zinc-800 text-white border border-zinc-700"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bảng bài viết */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-zinc-300">
          <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="p-4">Bài viết</th>
              <th className="p-4">Chuyên mục</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4">Lượt xem</th>
              <th className="p-4">Ngày tạo</th>
              <th className="p-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-800/40">
                <td className="p-4 font-semibold text-white max-w-xs truncate">{item.title}</td>
                <td className="p-4 text-xs text-blue-400">{item.category}</td>
                <td className="p-4">
                  {item.status === "PUBLISHED" && (
                    <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/30 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 w-fit">
                      <CheckCircle className="w-3 h-3" /> Đã xuất bản
                    </span>
                  )}
                  {item.status === "PENDING" && (
                    <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 w-fit">
                      <Clock className="w-3 h-3" /> Chờ duyệt
                    </span>
                  )}
                  {item.status === "DRAFT" && (
                    <span className="text-xs bg-zinc-800 text-zinc-400 border border-zinc-700 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 w-fit">
                      <FileEdit className="w-3 h-3" /> Bản nháp
                    </span>
                  )}
                </td>
                <td className="p-4 text-xs font-mono">{item.views.toLocaleString()}</td>
                <td className="p-4 text-xs text-zinc-500">{item.createdAt}</td>
                <td className="p-4 text-right space-x-1">
                  <Link to={`/author/edit/${item.id}`}>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-300 hover:bg-zinc-800">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(item.id)}
                    className="h-8 w-8 text-red-400 hover:bg-zinc-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}