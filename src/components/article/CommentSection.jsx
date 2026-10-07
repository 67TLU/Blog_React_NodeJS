import React, { useState } from "react";
import {
  MessageSquare,
  Heart,
  Reply,
  Flag,
  Send,
  AlertCircle
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const initialComments = [
  {
    id: "c1",
    author: "Trần Minh",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    content:
      "Bài viết phân tích rất sâu sắc về xu hướng AI năm 2026. Mong tòa soạn có thêm bài viết về mảng bán dẫn!",
    likes: 18,
    createdAt: "2 giờ trước",
    isOwner: false,
    isAuthor: false,
    replies: [
      {
        id: "c1-1",
        author: "Minh Châu (Tác giả)",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        content:
          "Cảm ơn bạn! Bài phân tích về thị trường Bán dẫn sẽ lên sóng vào tuần sau nhé.",
        likes: 9,
        createdAt: "1 giờ trước",
        isAuthor: true,
        isOwner: false,
        replyToId: "c1",
        replyToAuthor: "Trần Minh",
      },
      {
        id: "c1-2",
        author: "Nguyễn Văn A",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
        content:
          "Tôi cũng rất quan tâm đến chủ đề này và mong chờ bài viết tiếp theo.",
        likes: 4,
        createdAt: "50 phút trước",
        isAuthor: false,
        isOwner: false,
        replyToId: "c1",
        replyToAuthor: "Trần Minh",
      },
      {
        id: "c1-3",
        author: "Lê Hoàng",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
        content:
          "Hy vọng bài viết tiếp theo sẽ phân tích sâu hơn về thị trường chip.",
        likes: 2,
        createdAt: "30 phút trước",
        isAuthor: false,
        isOwner: false,
        replyToId: "c1-1",
        replyToAuthor: "Minh Châu (Tác giả)",
      },
    ],
  },
  {
    id: "c2",
    author: "Lê Hoàng",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
    content:
      "Liệu ứng dụng này có tích hợp thêm tính năng nghe đọc báo tự động (Text-to-Speech) không ạ?",
    likes: 5,
    createdAt: "4 giờ trước",
    isOwner: false,
    isAuthor: false,
    replies: [],
  },

];

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState(initialComments);

  const [newComment, setNewComment] = useState("");

  /*
   * replyingTo:
   *
   * {
   *   parentId: "c1",
   *   replyToId: "c1-1",
   *   replyToAuthor: "Minh Châu (Tác giả)"
   * }
   *
   * parentId:
   *   ID của comment gốc chứa thread.
   *
   * replyToId:
   *   ID chính xác của comment/reply đang được trả lời.
   *
   * replyToAuthor:
   *   Tên người được trả lời.
   */
  const [replyingTo, setReplyingTo] = useState(null);

  const [replyContent, setReplyContent] = useState("");

  const [filter, setFilter] = useState("NEWEST");

  // Trạng thái like của comment/reply
  const [isLiked, setIsLiked] = useState({});

  // Report
  const [reportingComment, setReportingComment] = useState(null);
  const [reportReason, setReportReason] = useState("");
  const [reportSuccess, setReportSuccess] = useState(false);

  // Comment nào đang mở toàn bộ replies
  const [expandedReplies, setExpandedReplies] = useState({});

  // =========================================================
  // THÊM COMMENT
  // =========================================================

  const handleAddComment = (e) => {
    e.preventDefault();

    const content = newComment.trim();

    if (!content) return;

    const item = {
      id: `c_${Date.now()}`,
      author: "Bạn (Độc giả)",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      content,
      likes: 0,
      createdAt: "Vừa xong",
      replies: [],
      isOwner: true,
      isAuthor: false,
    };

    setComments((prev) => [item, ...prev]);
    setNewComment("");
  };

  // =========================================================
  // HIỆN / ẨN REPLIES
  // =========================================================

  const toggleReplies = (commentId) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // =========================================================
  // BẮT ĐẦU TRẢ LỜI
  // =========================================================

  const startReply = ({
    parentId,
    replyToId,
    replyToAuthor,
  }) => {
    setReplyingTo({
      parentId,
      replyToId,
      replyToAuthor,
    });

    setReplyContent("");

    // Tự động mở thread nếu đang đóng
    setExpandedReplies((prev) => ({
      ...prev,
      [parentId]: true,
    }));
  };

  // =========================================================
  // HỦY TRẢ LỜI
  // =========================================================

  const cancelReply = () => {
    setReplyingTo(null);
    setReplyContent("");
  };

  // =========================================================
  // THÊM REPLY
  // =========================================================

  const handleAddReply = () => {
    if (!replyingTo) return;

    const content = replyContent.trim();

    if (!content) return;

    const replyItem = {
      id: `r_${Date.now()}`,
      author: "Bạn (Độc giả)",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      content,
      likes: 0,
      createdAt: "Vừa xong",
      isOwner: true,
      isAuthor: false,

      // Lưu chính xác người đang được trả lời
      replyToId: replyingTo.replyToId,
      replyToAuthor: replyingTo.replyToAuthor,
    };

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === replyingTo.parentId
          ? {
              ...comment,
              replies: [...comment.replies, replyItem],
            }
          : comment
      )
    );

    // Mở toàn bộ replies để thấy reply vừa tạo
    setExpandedReplies((prev) => ({
      ...prev,
      [replyingTo.parentId]: true,
    }));

    setReplyContent("");
    setReplyingTo(null);
  };

  // =========================================================
  // LIKE COMMENT / REPLY
  // =========================================================

  const handleLike = (
    commentId,
    isReply = false,
    parentId = null
  ) => {
    const currentlyLiked = !!isLiked[commentId];

    setIsLiked((prev) => ({
      ...prev,
      [commentId]: !currentlyLiked,
    }));

    // Like comment gốc
    if (!isReply) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                likes: currentlyLiked
                  ? Math.max(0, comment.likes - 1)
                  : comment.likes + 1,
              }
            : comment
        )
      );

      return;
    }

    // Like reply
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === commentId
                  ? {
                      ...reply,
                      likes: currentlyLiked
                        ? Math.max(0, reply.likes - 1)
                        : reply.likes + 1,
                    }
                  : reply
              ),
            }
          : comment
      )
    );
  };

  // =========================================================
  // SORT COMMENT
  // =========================================================

  const sortedComments = [...comments].sort((a, b) => {
    if (filter === "MOST_LIKED") {
      return b.likes - a.likes;
    }

    return b.id.localeCompare(a.id);
  });

  // =========================================================
  // ĐÓNG MODAL REPORT
  // =========================================================

  const closeReportModal = () => {
    setReportingComment(null);
    setReportReason("");
    setReportSuccess(false);
  };

  // =========================================================
  // RENDER REPLY
  // =========================================================

  const renderReply = (reply, parentComment) => {
    const liked = !!isLiked[reply.id];

    return (
      <div
        key={reply.id}
        className="
          group
          space-y-2
          rounded-lg
          p-2
          -mx-2
          transition-colors
          hover:bg-muted/40
        "
      >
        {/* ================================================
            REPLY HEADER
        ================================================= */}

        <div className="flex items-center gap-2 min-w-0">
          <Avatar className="h-7 w-7 shrink-0">
            <AvatarImage src={reply.avatar} />

            <AvatarFallback className="text-[10px]">
              {reply.author[0]}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-foreground">
              {reply.author}
            </span>

            {reply.isAuthor && (
              <span
                className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-1.5
                  py-0.5
                  text-[9px]
                  font-semibold
                  text-primary
                "
              >
                Tác giả
              </span>
            )}

            <span className="text-[10px] text-muted-foreground">
              {reply.createdAt}
            </span>
          </div>
        </div>

        {/* ================================================
            ĐANG TRẢ LỜI AI
        ================================================= */}

        {reply.replyToAuthor && (
          <div className="pl-9">
            <button
              type="button"
              className="
                text-[11px]
                text-primary
                hover:underline
                transition-colors
              "
              title="Người mà bình luận này đang trả lời"
            >
              ↳ Trả lời{" "}
              <span className="font-semibold">
                @{reply.replyToAuthor}
              </span>
            </button>
          </div>
        )}

        {/* ================================================
            REPLY CONTENT
        ================================================= */}

        <p
          className="
            pl-9
            text-sm
            leading-5
            text-foreground/85
            whitespace-pre-wrap
            break-words
          "
        >
          {reply.content}
        </p>

        {/* ================================================
            REPLY ACTIONS
        ================================================= */}

        <div
          className="
            flex
            items-center
            gap-4
            pl-9
            text-[11px]
            text-muted-foreground
          "
        >
          {/* Like */}
          <button
            type="button"
            onClick={() =>
              handleLike(
                reply.id,
                true,
                parentComment.id
              )
            }
            className={`
              flex
              items-center
              gap-1
              transition-colors
              ${
                liked
                  ? "text-destructive"
                  : "hover:text-destructive"
              }
            `}
          >
            <Heart
              className={`h-3 w-3 ${
                liked ? "fill-current" : ""
              }`}
            />

            {reply.likes}
          </button>

          {/* Reply */}
          <button
            type="button"
            onClick={() =>
              startReply({
                parentId: parentComment.id,
                replyToId: reply.id,
                replyToAuthor: reply.author,
              })
            }
            className="
              flex
              items-center
              gap-1
              transition-colors
              hover:text-primary
            "
          >
            <Reply className="h-3 w-3" />

            Trả lời
          </button>

          {/* Report */}
          {!reply.isOwner && (
            <button
              type="button"
              onClick={() =>
                setReportingComment(reply)
              }
              className="
                flex
                items-center
                gap-1
                transition-colors
                hover:text-destructive
              "
              title="Báo cáo vi phạm"
            >
              <Flag className="h-3 w-3" />

              Report
            </button>
          )}
        </div>
      </div>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section
      className="
        space-y-6
        border-t
        border-border
        pt-6
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <h3
          className="
            flex
            items-center
            gap-2
            text-xl
            font-bold
            tracking-tight
            text-foreground
          "
        >
          <MessageSquare className="h-5 w-5 text-primary" />

          Bình luận ({comments.length})
        </h3>

        {/* Filter */}
        <div
          className="
            flex
            w-fit
            gap-1
            rounded-lg
            border
            border-border
            bg-muted/50
            p-1
          "
        >
          <button
            type="button"
            onClick={() => setFilter("NEWEST")}
            className={`
              rounded-md
              px-3
              py-1.5
              text-xs
              font-medium
              transition-all
              ${
                filter === "NEWEST"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }
            `}
          >
            Mới nhất
          </button>

          <button
            type="button"
            onClick={() => setFilter("MOST_LIKED")}
            className={`
              rounded-md
              px-3
              py-1.5
              text-xs
              font-medium
              transition-all
              ${
                filter === "MOST_LIKED"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }
            `}
          >
            Nhiều like nhất
          </button>
        </div>
      </div>

      {/* =====================================================
          FORM COMMENT
      ===================================================== */}

      <form
        onSubmit={handleAddComment}
        className="
          space-y-3
          rounded-xl
          border
          border-border
          bg-card
          p-4
          shadow-sm
        "
      >
        <Textarea
          value={newComment}
          onChange={(e) =>
            setNewComment(e.target.value)
          }
          placeholder="Chia sẻ ý kiến của bạn về bài viết này..."
          className="
            min-h-[100px]
            resize-none
            border-input
            bg-background
            text-foreground
            placeholder:text-muted-foreground
            focus-visible:ring-1
            focus-visible:ring-ring
          "
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={!newComment.trim()}
            className="gap-2"
          >
            <Send className="h-4 w-4" />

            Gửi bình luận
          </Button>
        </div>
      </form>

      {/* =====================================================
          DANH SÁCH COMMENT
      ===================================================== */}

      <div className="space-y-4">
        {sortedComments.map((comment) => {
          const liked = !!isLiked[comment.id];

          return (
            <article
              key={comment.id}
              className="
                rounded-xl
                border
                border-border
                bg-card
                p-4
                shadow-sm
                transition-shadow
                hover:shadow-md
              "
            >
              {/* =================================================
                  COMMENT HEADER
              ================================================= */}

              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar className="h-9 w-9 shrink-0 border border-border">
                    <AvatarImage src={comment.avatar} />

                    <AvatarFallback>
                      {comment.author[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {comment.author}
                      </span>

                      {comment.isAuthor && (
                        <span
                          className="
                            rounded-full
                            border
                            border-primary/20
                            bg-primary/10
                            px-2
                            py-0.5
                            text-[10px]
                            font-semibold
                            text-primary
                          "
                        >
                          Tác giả
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-muted-foreground">
                      {comment.createdAt}
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  COMMENT CONTENT
              ================================================= */}

              <p
                className="
                  pl-12
                  pt-2
                  text-sm
                  leading-6
                  text-foreground/90
                  whitespace-pre-wrap
                  break-words
                "
              >
                {comment.content}
              </p>

              {/* =================================================
                  COMMENT ACTIONS
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  pl-12
                  pt-3
                  text-xs
                  text-muted-foreground
                "
              >
                {/* Like */}
                <button
                  type="button"
                  onClick={() =>
                    handleLike(comment.id)
                  }
                  className={`
                    flex
                    items-center
                    gap-1
                    transition-colors
                    ${
                      liked
                        ? "text-destructive"
                        : "hover:text-destructive"
                    }
                  `}
                >
                  <Heart
                    className={`h-3.5 w-3.5 ${
                      liked ? "fill-current" : ""
                    }`}
                  />

                  {comment.likes}
                </button>

                {/* Reply comment gốc */}
                <button
                  type="button"
                  onClick={() =>
                    startReply({
                      parentId: comment.id,
                      replyToId: comment.id,
                      replyToAuthor: comment.author,
                    })
                  }
                  className="
                    flex
                    items-center
                    gap-1
                    transition-colors
                    hover:text-primary
                  "
                >
                  <Reply className="h-3.5 w-3.5" />

                  Trả lời
                </button>

                {/* Report */}
                {!comment.isOwner && (
                  <button
                    type="button"
                    onClick={() =>
                      setReportingComment(comment)
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      transition-colors
                      hover:text-destructive
                    "
                    title="Báo cáo vi phạm"
                  >
                    <Flag className="h-3.5 w-3.5" />

                    Report
                  </button>
                )}
              </div>

              {/* =================================================
                  FORM REPLY
              ================================================= */}

              {replyingTo &&
                replyingTo.parentId === comment.id && (
                  <div
                    className="
                      ml-8
                      mt-4
                      space-y-3
                      rounded-lg
                      border
                      border-border
                      bg-muted/30
                      p-3
                      sm:ml-12
                    "
                  >
                    {/* Người đang được trả lời */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs text-muted-foreground">
                        Đang trả lời{" "}
                        <span className="font-semibold text-primary">
                          @{replyingTo.replyToAuthor}
                        </span>
                      </div>
                    </div>

                    <Textarea
                      autoFocus
                      value={replyContent}
                      onChange={(e) =>
                        setReplyContent(e.target.value)
                      }
                      placeholder={`Trả lời @${replyingTo.replyToAuthor}...`}
                      className="
                        min-h-[75px]
                        resize-none
                        border-input
                        bg-background
                        text-foreground
                        
                        placeholder:text-muted-foreground
                        focus-visible:ring-1
                        focus-visible:ring-ring
                      "
                    />

                    <div className="flex justify-end gap-2">
                      <Button
                        type="button"
                        onClick={cancelReply}
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground"
                      >
                        Hủy
                      </Button>

                      <Button
                        type="button"
                        onClick={handleAddReply}
                        disabled={!replyContent.trim()}
                        size="sm"
                        className="gap-1.5"
                      >
                        <Reply className="h-3.5 w-3.5" />

                        Trả lời
                      </Button>
                    </div>
                  </div>
                )}

              {/* =================================================
                  REPLIES
              ================================================= */}

              {comment.replies &&
                comment.replies.length > 0 && (
                  <div
                    className="
                      ml-4
                      mt-4
                      border-l-2
                      border-border
                      pl-4
                      sm:ml-8
                      
                    "
                  >
                    <div className="space-y-3">
                      {comment.replies
                        .slice(
                          0,
                          expandedReplies[comment.id]
                            ? comment.replies.length
                            : 1
                        )
                        .map((reply) =>
                          renderReply(
                            reply,
                            comment
                          )
                        )}
                    </div>

                    {/* =================================================
                        XEM THÊM
                    ================================================= */}

                    {comment.replies.length >= 2 && (
                      <button
                        type="button"
                        onClick={() =>
                          toggleReplies(comment.id)
                        }
                        className="
                          ml-9
                          mt-3
                          text-xs
                          font-semibold
                          text-primary
                          transition-colors
                          hover:underline
                        "
                      >
                        {expandedReplies[comment.id]
                          ? "Thu gọn"
                          : `Xem thêm ${
                              comment.replies.length - 1
                            } phản hồi`}
                      </button>
                    )}
                  </div>
                )}
            </article>
          );
        })}

        {/* Không có comment */}
        {sortedComments.length === 0 && (
          <div
            className="
              rounded-xl
              border
              border-dashed
              border-border
              bg-muted/30
              p-10
              text-center
            "
          >
            <MessageSquare className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />

            <p className="text-sm font-medium text-foreground">
              Chưa có bình luận nào
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Hãy là người đầu tiên chia sẻ ý kiến.
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          MODAL REPORT
      ===================================================== */}

      {reportingComment && (
<Dialog
  open={!!reportingComment}
  onOpenChange={(open) => {
    if (!open) {
      closeReportModal();
    }
  }}
>
  <DialogContent className="sm:max-w-md p-9">
    <DialogHeader>
      <DialogTitle className="flex justify-center items-center gap-2 p-1.5">
        <AlertCircle className="w-5 h-5 text-red-500" />

        Báo cáo bình luận vi phạm
      </DialogTitle>

      <DialogDescription className="text-center text-sm text-muted-foreground">
        Vui lòng chọn lý do báo cáo để Ban quản trị xử lý.
      </DialogDescription>
    </DialogHeader>

    {reportSuccess ? (
      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center">
        <p className="text-sm font-medium text-green-600 dark:text-green-400">
          Cảm ơn bạn!
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Báo cáo của bạn đã được gửi tới Ban quản trị để xử lý.
        </p>
      </div>
    ) : (
      <div className="space-y-5">
        {/* Nội dung bị báo cáo */}
        <div className="rounded-lg border bg-muted/50 p-3">
          <p className="mb-1 text-xs font-medium text-muted-foreground">
            Nội dung bị báo cáo
          </p>

          <p className="text-sm text-foreground">
            "{reportingComment?.content}"
          </p>
        </div>

        {/* Nếu là reply */}
        {reportingComment?.replyToAuthor && (
          <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
            <p className="text-xs text-muted-foreground">
              Bình luận này đang trả lời
            </p>

            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              @{reportingComment.replyToAuthor}
            </p>
          </div>
        )}

        {/* Lý do */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Lý do báo cáo
          </label>

          <Select
            value={reportReason}
            onValueChange={setReportReason}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn lý do báo cáo..." />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Spam / Quảng cáo rác">
                Spam / Quảng cáo rác
              </SelectItem>

              <SelectItem value="Ngôn từ thù hận / Xúc phạm">
                Ngôn từ thù hận / Xúc phạm
              </SelectItem>

              <SelectItem value="Thông tin sai sự thật">
                Thông tin sai sự thật
              </SelectItem>

              <SelectItem value="Lý do khác">
                Lý do khác
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit */}
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={closeReportModal}
          >
            Hủy
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={() => setReportSuccess(true)}
            disabled={!reportReason}
          >
            Gửi báo cáo
          </Button>
        </DialogFooter>
      </div>
    )}
  </DialogContent>
</Dialog>

      )}
    </section>
  );
}
