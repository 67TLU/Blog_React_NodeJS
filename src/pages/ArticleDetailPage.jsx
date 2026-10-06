import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import ArticleCard from "@/components/cards/ArticleCard";
import { mockArticles } from "@/data/mockArticles";

// Icons
import {
  Heart,
  Bookmark,
  Share2,
  Clock,
  Eye,
  MessageSquare,
  ThumbsUp,
  AArrowUp,
  AArrowDown,
  Send,
} from "lucide-react";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default function ArticleDetailPage() {
  const { id } = useParams();
  
  // Lấy bài viết theo ID hoặc slug
  const article = mockArticles.find((item) => item.id === id || item.slug === id) || mockArticles[0];

  // Trạng thái tương tác
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [fontSize, setFontSize] = useState("text-base"); // text-sm, text-base, text-lg

  // Trạng thái bình luận
  const [commentList, setCommentList] = useState(article.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj = {
      id: Date.now().toString(),
      user: "Bạn (Độc giả)",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
      time: "Vừa xong",
      content: newComment,
      likes: 0,
    };

    setCommentList([commentObj, ...commentList]);
    setNewComment("");
  };

  const relatedArticles = mockArticles.filter((item) => item.id !== article.id).slice(0, 3);
  const popularArticles = [...mockArticles].sort((a, b) => parseFloat(b.views) - parseFloat(a.views)).slice(0, 4);

  return (
    <PublicLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CỘT TRÁI & GIỮA: Nội dung chính bài viết (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Header Bài viết */}
          <div className="space-y-4">
            <Link to={`/category/${article.categorySlug}`}>
              <Badge className="bg-red-600 hover:bg-red-700 cursor-pointer">{article.category}</Badge>
            </Link>
            
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-zinc-300 font-medium italic border-l-4 border-blue-500 pl-4 py-1">
              {article.excerpt}
            </p>

            {/* Author Meta */}
            <div className="flex flex-wrap items-center justify-between border-y border-zinc-800 py-3 gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border border-zinc-700">
                  <AvatarImage src={article.authorAvatar || "https://github.com/shadcn.png"} />
                  <AvatarFallback>{article.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{article.author}</p>
                  <p className="text-xs text-zinc-500">{article.publishedAt}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readingTime || "3 phút đọc"}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {article.views || "1k"} lượt xem
                </span>
              </div>
            </div>
          </div>

          {/* Thanh tương tác (Action Bar) */}
          <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className={`gap-2 ${isLiked ? "bg-red-600 hover:bg-red-700 text-white" : "border-zinc-700"}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-white" : ""}`} />
                <span>{likes}</span>
              </Button>

              <Button
                variant={isSaved ? "default" : "outline"}
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className="gap-2 border-zinc-700"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? "fill-white" : ""}`} />
                <span>{isSaved ? "Đã lưu" : "Lưu"}</span>
              </Button>

              <Button variant="outline" size="sm" className="gap-2 border-zinc-700">
                <Share2 className="w-4 h-4" /> Chia sẻ
              </Button>
            </div>

            {/* Điều chỉnh cỡ chữ */}
            <div className="flex items-center gap-1 bg-zinc-800 p-1 rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setFontSize("text-sm")}
                title="Thu nhỏ chữ"
              >
                <AArrowDown className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setFontSize("text-base")}
                title="Cỡ chữ mặc định"
              >
                A
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setFontSize("text-lg")}
                title="Phóng to chữ"
              >
                <AArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Ảnh bìa bài viết */}
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <img src={article.image} alt={article.title} className="w-full max-h-[450px] object-cover" />
          </div>

          {/* Nội dung bài viết */}
          <div
            className={`prose prose-invert max-w-none space-y-4 text-zinc-200 leading-relaxed ${fontSize}`}
            dangerouslySetInnerHTML={{ __html: article.content || `<p>Nội dung đang được cập nhật...</p>` }}
          />

          {/* Khu vực Bình luận (Comments Section) */}
          <div className="pt-8 border-t border-zinc-800 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              Bình luận ({commentList.length})
            </h3>

            {/* Form nhập comment */}
            <form onSubmit={handleAddComment} className="space-y-3">
              <Textarea
                placeholder="Chia sẻ ý kiến của bạn về bài viết này..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-1"
                rows={3}
              />
              <div className="flex justify-end">
                <Button type="submit" size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" /> Gửi bình luận
                </Button>
              </div>
            </form>

            {/* Danh sách comment */}
            <div className="space-y-4 pt-4">
              {commentList.map((comment) => (
                <div key={comment.id} className="flex gap-3 bg-zinc-900/60 p-4 rounded-lg border border-zinc-800/80">
                  <Avatar className="w-9 h-9 border border-zinc-700">
                    <AvatarImage src={comment.avatar} />
                    <AvatarFallback>{comment.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-white">{comment.user}</span>
                      <span className="text-xs text-zinc-500">{comment.time}</span>
                    </div>
                    <p className="text-sm text-zinc-300">{comment.content}</p>
                    <div className="pt-1">
                      <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                        <ThumbsUp className="w-3 h-3" /> {comment.likes} Thích
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: Sidebar (Related & Popular Articles) */}
        <div className="space-y-6">
          {/* Bài viết xem nhiều nhất */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4">
            <h3 className="font-bold text-lg text-white border-b border-zinc-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-4 bg-red-500 rounded-full"></span>
              Đọc nhiều nhất
            </h3>
            <div className="space-y-4">
              {popularArticles.map((item, index) => (
                <Link key={item.id} to={`/article/${item.slug}`} className="flex gap-3 group cursor-pointer">
                  <span className="text-2xl font-black text-zinc-600 group-hover:text-blue-500 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-zinc-200 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs text-zinc-500">{item.views} lượt xem</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bài viết liên quan */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <span className="w-2 h-4 bg-blue-500 rounded-full"></span>
              Bài viết liên quan
            </h3>
            <div className="space-y-4">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </PublicLayout>
  );
}