import React, { useState } from "react";
import { MessageSquare, Heart, Reply, Flag, Send, ThumbsUp, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const initialComments = [
  {
    id: "c1",
    author: "Trần Minh",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    content: "Bài viết phân tích rất sâu sắc về xu hướng AI năm 2026. Mong tòa soạn có thêm bài viết về mảng bán dẫn!",
    likes: 18,
    createdAt: "2 giờ trước",
    replies: [
      {
        id: "c1-1",
        author: "Minh Châu (Tác giả)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        content: "Cảm ơn bạn! Bài phân tích về thị trường Bán dẫn sẽ lên sóng vào tuần sau nhé.",
        likes: 9,
        createdAt: "1 giờ trước",
        isAuthor: true,
      },
    ],
  },
  {
    id: "c2",
    author: "Lê Hoàng",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
    content: "Liệu ứng dụng này có tích hợp thêm tính năng nghe đọc báo tự động (Text-to-Speech) không ạ?",
    likes: 5,
    createdAt: "4 giờ trước",
    replies: [],
  },
];

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null); // commentId
  const [replyContent, setReplyContent] = useState("");
  const [filter, setFilter] = useState("NEWEST"); // NEWEST | MOST_LIKED
  
  // Modal Report State
  const [reportingComment, setReportingComment] = useState(null);
  const [reportReason, setReportReason] = useState("");
  const [reportSuccess, setReportSuccess] = useState(false);

  // Thêm bình luận mới
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const item = {
      id: `c_${Date.now()}`,
      author: "Bạn (Độc giả)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      content: newComment,
      likes: 0,
      createdAt: "Vừa xong",
      replies: [],
    };

    setComments([item, ...comments]);
    setNewComment("");
  };

  // Trả lời bình luận
  const handleAddReply = (parentId) => {
    if (!replyContent.trim()) return;

    const replyItem = {
      id: `r_${Date.now()}`,
      author: "Bạn (Độc giả)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      content: replyContent,
      likes: 0,
      createdAt: "Vừa xong",
    };

    setComments(
      comments.map((c) => (c.id === parentId ? { ...c, replies: [...c.replies, replyItem] } : c))
    );
    setReplyContent("");
    setReplyingTo(null);
  };

  // Like comment
  const handleLike = (commentId, isReply = false, parentId = null) => {
    if (!isReply) {
      setComments(
        comments.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
      );
    } else {
      setComments(
        comments.map((c) =>
          c.id === parentId
            ? {
                ...c,
                replies: c.replies.map((r) => (r.id === commentId ? { ...r, likes: r.likes + 1 } : r)),
              }
            : c
        )
      );
    }
  };

  // Sắp xếp bình luận
  const sortedComments = [...comments].sort((a, b) => {
    if (filter === "MOST_LIKED") return b.likes - a.likes;
    return b.id.localeCompare(a.id);
  });

  return (
    <div className="space-y-6 pt-6 border-t border-zinc-800">
      {/* Header Bình luận */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-500"/> Bình luận ({comments.length})
        </h3>

        {/* Lọc bình luận */}
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setFilter("NEWEST")}
            className={`px-3 py-1.5 rounded-lg border transition-colors ${
              filter === "NEWEST"
                ? "bg-blue-600 text-white border-blue-500 font-semibold"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800"
            }`}
          >
            Mới nhất
          </button>
          <button
            onClick={() => setFilter("MOST_LIKED")}
            className={`px-3 py-1.5 rounded-lg border transition-colors ${
              filter === "MOST_LIKED"
                ? "bg-blue-600 text-white border-blue-500 font-semibold"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800"
            }`}
          >
            Nhiều like nhất
          </button>
        </div>
      </div>

      {/* Form viết bình luận gốc */}
      <form onSubmit={handleAddComment} className="space-y-3">
        <Textarea onChange="{(e)" value="{newComment}"> setNewComment(e.target.value)}
          placeholder="Chia sẻ ý kiến của bạn về bài viết này..."
          className="bg-zinc-900 border-zinc-800 text-white min-h-[90px] focus:border-blue-500"
        />
        <div className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 font-semibold gap-2" type="submit">
            <Send className="w-4 h-4"/> Gửi bình luận
          </Button>
        </div>
      </form>

      {/* Danh sách bình luận */}
      <div className="space-y-6 pt-2">
        {sortedComments.map((comment) => (
          <div key={comment.id} className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 space-y-3">
            {/* Header Commenter */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-9 h-9">
                  <AvatarImage src="{comment.avatar}"/>
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{comment.author}</span>
                    {comment.isAuthor && (
                      <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">
                        Tác giả
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-zinc-500">{comment.createdAt}</span>
                </div>
              </div>

              {/* Nút báo cáo */}
              <button
                onClick={() => setReportingComment(comment)}
                className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                title="Báo cáo vi phạm"
              >
                <Flag className="w-3.5 h-3.5"/>
              </button>
            </div>

            {/* Nội dung comment */}
            <p className="text-sm text-zinc-300 pl-12">{comment.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-4 pl-12 text-xs text-zinc-400">
              <button
                onClick={() => handleLike(comment.id)}
                className="flex items-center gap-1 hover:text-red-400 transition-colors"
              >
                <Heart className="w-3.5 h-3.5"/> {comment.likes}
              </button>

              <button
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <Reply className="w-3.5 h-3.5"/> Trả lời
              </button>
            </div>

            {/* Form Trả lời Nested */}
            {replyingTo === comment.id && (
              <div className="ml-12 pt-3 space-y-2">
                <Textarea onChange="{(e)" value="{replyContent}"> setReplyContent(e.target.value)}
                  placeholder={`Trả lời ${comment.author}...`}
                  className="bg-zinc-800 border-zinc-700 text-white min-h-[70px] text-xs"
                />
                <div className="flex justify-end gap-2">
                  <Button onClick="{()" size="sm" variant="ghost"> setReplyingTo(null)}
                    className="text-zinc-400 hover:bg-zinc-800 text-xs"
                  >
                    Hủy
                  </Button>
                  <Button onClick="{()" size="sm"> handleAddReply(comment.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-xs font-semibold"
                  >
                    Trả lời
                  </Button>
                </div>
              </div>
            )}

            {/* Danh sách Replies (Tầng 2) */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-8 pt-3 border-l-2 border-zinc-800 pl-4 space-y-3">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-7 h-7">
                          <AvatarImage src="{reply.avatar}"/>
                          <AvatarFallback>{reply.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-bold text-white">{reply.author}</span>
                        {reply.isAuthor && (
                          <span className="text-[9px] bg-blue-500/20 text-blue-400 px-1.5 py-0.2 rounded font-bold">
                            Tác giả
                          </span>
                        )}
                        <span className="text-[10px] text-zinc-500">{reply.createdAt}</span>
                      </div>

                      <button
                        onClick={() => setReportingComment(reply)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                      >
                        <Flag className="w-3 h-3"/>
                      </button>
                    </div>

                    <p className="text-xs text-zinc-300 pl-9">{reply.content}</p>

                    <div className="pl-9 text-[11px] text-zinc-400">
                      <button
                        onClick={() => handleLike(reply.id, true, comment.id)}
                        className="flex items-center gap-1 hover:text-red-400 transition-colors"
                      >
                        <Heart className="w-3 h-3"/> {reply.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL BÁO CÁO BÌNH LUẬN */}
      {reportingComment && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md space-y-4 relative">
            <button
              onClick={() => { setReportingComment(null); setReportSuccess(false); }}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5"/>
            </button>

            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500"/> Báo cáo bình luận vi phạm
            </h4>

            {reportSuccess ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-center text-sm">
                Cảm ơn bạn! Báo cáo của bạn đã được gửi tới Ban quản trị để xử lý.
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-zinc-400">
                  Nội dung bị báo cáo: <em className="text-zinc-200">"{reportingComment.content}"</em>
                </p>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-300">Lý do báo cáo:</label>
                  <select
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-full bg-zinc-800 border-zinc-700 text-white rounded-lg p-2 text-xs"
                  >
                    <option value="">-- Chọn lý do --</option>
                    <option value="SPAM">Spam / Quảng cáo rác</option>
                    <option value="HATE">Ngôn từ thù hận / Xúc phạm</option>
                    <option value="FAKE">Thông tin sai sự thật</option>
                    <option value="OTHER">Lý do khác</option>
                  </select>
                </div>

                <Button onClick="{()"> setReportSuccess(true)}
                  disabled={!reportReason}
                  className="w-full bg-red-600 hover:bg-red-700 font-semibold"
                >
                  Gửi báo cáo
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}