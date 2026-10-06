import React, { useState } from "react";
import { FolderTree, Tag, Plus, Edit, Trash2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockCategories = [
  { id: "cat-1", name: "Công nghệ", slug: "cong-nghe", parent: null, count: 124 },
  { id: "cat-1-1", name: "Trí tuệ nhân tạo (AI)", slug: "ai", parent: "Công nghệ", count: 48 },
  { id: "cat-2", name: "Tài chính", slug: "tai-chinh", parent: null, count: 86 },
  { id: "cat-3", name: "Thể thao", slug: "the-thao", parent: null, count: 52 },
];

const mockTags = [
  { id: "tag-1", name: "Semiconductor", slug: "semiconductor", count: 15 },
  { id: "tag-2", name: "Fintech 2026", slug: "fintech-2026", count: 28 },
  { id: "tag-3", name: "Năng lượng xanh", slug: "nang-luong-xanh", count: 9 },
];

export default function CategoryTagManagementPage() {
  const [activeTab, setActiveTab] = useState("CATEGORIES"); // CATEGORIES | TAGS
  const [categories, setCategories] = useState(mockCategories);
  const [tags, setTags] = useState(mockTags);

  // State form Chuyên mục
  const [catName, setCatName] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [catParent, setCatParent] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!catName) return;
    const newCat = {
      id: `cat-${Date.now()}`,
      name: catName,
      slug: catSlug || catName.toLowerCase().replace(/\s+/g, "-"),
      parent: catParent || null,
      count: 0,
    };
    setCategories([...categories, newCat]);
    setCatName("");
    setCatSlug("");
    setCatParent("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <FolderTree className="w-6 h-6 text-emerald-500" /> Quản lý Chuyên mục & Tags
        </h1>
        <p className="text-xs text-zinc-400">Cấu hình hệ thống phân loại bài viết và các thẻ tìm kiếm SEO</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 text-xs">
        <button
          onClick={() => setActiveTab("CATEGORIES")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
            activeTab === "CATEGORIES"
              ? "bg-zinc-800 text-white border border-zinc-700"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <FolderTree className="w-4 h-4" /> Chuyên mục
        </button>
        <button
          onClick={() => setActiveTab("TAGS")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
            activeTab === "TAGS"
              ? "bg-zinc-800 text-white border border-zinc-700"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Tag className="w-4 h-4" /> Thẻ Tags
        </button>
      </div>

      {activeTab === "CATEGORIES" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form thêm chuyên mục */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 h-fit">
            <h3 className="text-sm font-bold text-white">Thêm Chuyên mục mới</h3>
            <form onSubmit={handleAddCategory} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-zinc-400 font-semibold">Tên chuyên mục</label>
                <Input
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  placeholder="Ví dụ: Xe điện"
                  className="bg-zinc-950 border-zinc-800 text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-zinc-400 font-semibold">Đường dẫn tĩnh (Slug)</label>
                <Input
                  value={catSlug}
                  onChange={(e) => setCatSlug(e.target.value)}
                  placeholder="xe-dien"
                  className="bg-zinc-950 border-zinc-800 text-white font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-zinc-400 font-semibold">Chuyên mục cha (Nếu có)</label>
                <select
                  value={catParent}
                  onChange={(e) => setCatParent(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-md p-2 text-xs"
                >
                  <option value="">-- Không chọn (Gốc) --</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold gap-2">
                <Plus className="w-4 h-4" /> Thêm Chuyên mục
              </Button>
            </form>
          </div>

          {/* Bảng danh sách chuyên mục */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="p-4">Tên chuyên mục</th>
                  <th className="p-4">Slug</th>
                  <th className="p-4">Số bài viết</th>
                  <th className="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-zinc-800/40">
                    <td className="p-4 font-semibold text-white">
                      {cat.parent && <span className="text-zinc-500 mr-2">└──</span>}
                      {cat.name}
                    </td>
                    <td className="p-4 text-xs font-mono text-zinc-400">{cat.slug}</td>
                    <td className="p-4 text-xs font-mono">{cat.count}</td>
                    <td className="p-4 text-right space-x-1">
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-300 hover:bg-zinc-800">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-red-400 hover:bg-zinc-800">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Danh sách Tags */
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-white">Danh sách Thẻ Tags đang sử dụng</h3>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Tạo Tag mới
            </Button>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {tags.map((t) => (
              <div
                key={t.id}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-zinc-200 flex items-center gap-2"
              >
                <Tag className="w-3 h-3 text-emerald-400" />
                <span className="font-semibold">{t.name}</span>
                <span className="text-[10px] bg-zinc-900 text-zinc-400 px-1.5 py-0.5 rounded font-mono">
                  {t.count}
                </span>
                <button className="text-zinc-500 hover:text-red-400 ml-1">×</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}