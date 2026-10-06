import React, { useState } from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { UserPlus, UserCheck, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockArticles } from "@/data/mockArticles";

export default function AuthorPublicProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <PublicLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Tác giả */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Avatar className="w-24 h-24 border-2 border-blue-500">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" />
            <AvatarFallback>TG</AvatarFallback>
          </Avatar>

          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-2xl font-bold text-white">Minh Châu</h1>
              <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-500/20" />
            </div>
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Chuyên gia Công nghệ & AI</p>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Nhà báo công nghệ với hơn 8 năm kinh nghiệm theo dõi xu hướng Trí tuệ nhân tạo, Bán dẫn và Bối cảnh khởi nghiệp công nghệ toàn cầu.
            </p>
          </div>

          <Button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`gap-2 font-semibold px-6 ${
              isFollowing ? "bg-zinc-800 text-zinc-300 border border-zinc-700" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isFollowing ? <><UserCheck className="w-4 h-4" /> Đã theo dõi</> : <><UserPlus className="w-4 h-4" /> Theo dõi</>}
          </Button>
        </div>

        {/* Danh sách bài viết của Tác giả */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
            <FileText className="w-5 h-5 text-blue-500" /> Bài viết đã đăng (12)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockArticles.map((article) => (
              <div key={article.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-4">
                <img src={article.image} alt="" className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] font-bold text-blue-400 uppercase">{article.category}</span>
                  <h3 className="text-sm font-bold text-white truncate">{article.title}</h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}