import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Save, Send, ArrowLeft, Image as ImageIcon, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock nạp bài viết từ ID
  const [title, setTitle] = useState("Kỷ nguyên Chip bán dẫn AI thế hệ mới năm 2026");
  const [category, setCategory] = useState("Công nghệ");
  const [excerpt, setExcerpt] = useState("Phân tích chi tiết cuộc đua chipset AI toàn cầu...");
  const [content, setContent] = useState(
    "Trí tuệ nhân tạo đang bước sang một chương mới với các thế hệ chip bán dẫn đột phá..."
  );
  const [tags, setTags] = useState("AI, Tech, Semiconductor");
  const [status, setStatus] = useState("DRAFT"); // DRAFT | PENDING | PUBLISHED
  const [lastSaved, setLastSaved] = useState("10 phút trước");

  const handleSaveDraft = () => {
    setStatus("DRAFT");
    setLastSaved("Vừa xong");
    alert("Đã lưu vào danh sách Bản nháp!");
  };

  const handleSubmitForApproval = (e) => {
    e.preventDefault();
    setStatus("PENDING");
    alert("Đã gửi bài viết cho Ban Biên Tập kiểm duyệt!");
    navigate("/author/articles");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header điều hướng */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Chỉnh sửa bài viết #{id}</h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-500" /> Lưu gần nhất: {lastSaved}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleSaveDraft}
            className="border-border text-foreground hover:bg-muted gap-1.5 text-xs"
          >
            <Save className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Lưu bản nháp
          </Button>
          <Button
            onClick={handleSubmitForApproval}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-1.5 text-xs"
          >
            <Send className="w-4 h-4" /> Gửi duyệt lại
          </Button>
        </div>
      </div>

      {/* Form soạn thảo */}
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-foreground uppercase">Tiêu đề bài viết</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề hấp dẫn..."
            className="bg-card border-border text-foreground font-bold text-lg h-12 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-foreground uppercase">Chuyên mục</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-card border border-border text-foreground rounded-lg p-3 text-sm focus:border-blue-500"
            >
              <option value="Công nghệ">Công nghệ</option>
              <option value="Thể thao">Thể thao</option>
              <option value="Tài chính">Tài chính</option>
              <option value="Thời tiết">Thời tiết</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-foreground uppercase">Thẻ Tags (cách nhau bởi dấu phẩy)</label>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="bg-card border-border text-foreground text-sm h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-foreground uppercase">Mô tả ngắn (Excerpt)</label>
          <Textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="bg-card border-border text-foreground text-sm min-h-[70px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-foreground uppercase">Nội dung bài viết</label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-card border-border text-foreground text-sm min-h-[300px] leading-relaxed"
          />
        </div>
      </form>
    </div>
  );
}