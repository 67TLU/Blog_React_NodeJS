import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, Send, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function CreateArticlePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "cong-nghe",
    imageUrl: "",
    content: "",
  });

  const handleSubmit = (e, status = "SUBMITTED") => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("Vui lòng điền tiêu đề và nội dung bài viết!");
      return;
    }

    // Ở đây sau này sẽ gọi API POST /api/articles
    alert(status === "DRAFT" ? "Đã lưu bản nháp thành công!" : "Đã gửi bài viết chờ biên tập viên duyệt!");
    navigate("/author/articles");
  };

  return (
    <div className="space-y-6">
      {/* Header Form */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-white">Tạo bài viết mới</h1>
            <p className="text-xs text-zinc-400">Soạn thảo nội dung và gửi duyệt</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={(e) => handleSubmit(e, "DRAFT")}
            className="border-zinc-700 hover:bg-zinc-800 gap-2 text-zinc-300"
          >
            <Save className="w-4 h-4" /> Lưu bản nháp
          </Button>
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, "SUBMITTED")}
            className="bg-blue-600 hover:bg-blue-700 gap-2 font-semibold"
          >
            <Send className="w-4 h-4" /> Gửi duyệt
          </Button>
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cột trái: Nội dung chính (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Tiêu đề bài viết *</label>
            <Input
              placeholder="Nhập tiêu đề hấp dẫn cho bài viết..."
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-zinc-900 border-zinc-800 text-white text-lg font-semibold h-12 focus-visible:ring-1"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Tóm tắt ngắn (Excerpt)</label>
            <Textarea
              placeholder="Mô tả ngắn gọn nội dung bài viết (1-2 câu)..."
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="bg-zinc-900 border-zinc-800 text-white"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Nội dung chi tiết *</label>
            <Textarea
              placeholder="Nhập nội dung bài viết ở đây..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="bg-zinc-900 border-zinc-800 text-white font-mono text-sm leading-relaxed"
              rows={14}
            />
          </div>
        </div>

        {/* Cột phải: Thiết lập bài viết (Sidebar) */}
        <div className="space-y-4">
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardContent className="p-4 space-y-4">
              <h3 className="font-bold text-sm border-b border-zinc-800 pb-2">Cấu hình bài viết</h3>

              {/* Chọn chuyên mục */}
              <div className="space-y-2">
                <label className="text-xs text-zinc-400">Chuyên mục</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-sm text-white focus:outline-none"
                >
                  <option value="the-thao">Thể thao</option>
                  <option value="cong-nghe">Công nghệ</option>
                  <option value="tin-tuc">Tin tức</option>
                  <option value="tai-chinh">Tài chính</option>
                  <option value="thoi-tiet">Thời tiết</option>
                </select>
              </div>

              {/* Link ảnh bìa */}
              <div className="space-y-2">
                <label className="text-xs text-zinc-400">URL Ảnh bìa (Featured Image)</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="https://images.unsplash.com/..."
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="bg-zinc-800 border-zinc-700 text-white text-xs"
                  />
                </div>
              </div>

              {/* Preview ảnh bìa */}
              {formData.imageUrl ? (
                <div className="rounded-lg overflow-hidden border border-zinc-800 h-32">
                  <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="border border-dashed border-zinc-800 rounded-lg p-6 text-center text-zinc-500 flex flex-col items-center gap-2">
                  <ImageIcon className="w-8 h-8 opacity-50" />
                  <span className="text-xs">Dán URL ảnh để xem trước</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}