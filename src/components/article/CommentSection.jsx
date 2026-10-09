import { useState } from "react";
import { MessageSquare } from "lucide-react";

import { useAccessLogin } from "@/context/DialogProvider";
import { useAuth } from "@/context/AuthContext";
import { Can } from '@casl/react';
import CommentForm from "./CommentForm";
import CommentFilter from "./CommentFilter";
import CommentItem from "./CommentItem";
import ReportCommentDialog from "./ReportCommentDialog";

const initialComments = [
  {
    id: "uuid-1",
    author: "Trần Minh",
    authorId: "u-100",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;q=80",
    content:
      "Bài viết phân tích rất sâu sắc về xu hướng AI năm 2026. Mong tòa soạn có thêm bài viết về mảng bán dẫn!",
    likes: 18,
    createdAt: "2026-10-07T01:23:45.123Z",
    replies: [
      {
        id: "uuid-1-1",
        author: "Minh Châu (Tác giả)",
        authorId: "u-author-1",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80",
        content:
          "Cảm ơn bạn! Bài phân tích về thị trường Bán dẫn sẽ lên sóng vào tuần sau nhé.",
        likes: 9,
        createdAt: "2026-10-06T14:15:30.500Z",
        replyToId: "uuid-1",
        replyToAuthor: "Trần Minh",
      },
      {
        id: "uuid-1-2",
        author: "Nguyễn Văn A",
        authorId: "u-102",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;q=80",
        content:
          "Tôi cũng rất quan tâm đến chủ đề này và mong chờ bài viết tiếp theo.",
        likes: 4,
        createdAt: "2026-10-07T01:22:25.360Z",
        replyToId: "uuid-1",
        replyToAuthor: "Trần Minh",
      },
      {
        id: "c1-3",
        author: "Lê Hoàng",
        authorId: "u-103",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;q=80",
        content:
          "Hy vọng bài viết tiếp theo sẽ phân tích sâu hơn về thị trường chip.",
        likes: 2,
        createdAt: "2026-10-07T00:52:00.000Z",
        replyToId: "uuid-1-1",
        replyToAuthor: "Minh Châu (Tác giả)",
      },
    ],
  },
  {
    id: "uuid-2",
    author: "Lê Hoàng",
    authorId: "u-101",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;q=80",
    content:
      "Liệu ứng dụng này có tích hợp thêm tính năng nghe đọc báo tự động (Text-to-Speech) không ạ?",
    likes: 5,
    createdAt: "2026-10-07T00:22:25.360Z",
    replies: [],
  },

];

export default function CommentSection({ article }) {
  const { user } = useAuth();
  const showAccessLogin = useAccessLogin();

  const [comments, setComments] = useState(initialComments);

  const [newComment, setNewComment] = useState("");

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const [filter, setFilter] = useState("NEWEST");

  const [isLiked, setIsLiked] = useState({});

  const [expandedReplies, setExpandedReplies] = useState({});

  const [reportingComment, setReportingComment] =
    useState(null);

  const [reportReason, setReportReason] = useState("");

  const [reportSuccess, setReportSuccess] =
    useState(false);

  // =========================================================
  // COMMENT
  // =========================================================

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!user) {
      showAccessLogin();
      return;
    }

    const content = newComment.trim();

    if (!content) return;

    const item = {
      id: crypto.randomUUID(),
      authorId: user.id,
      author: user?.name || "Bạn",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      content,
      likes: 0,
      createdAt: new Date().toISOString(),
      replies: [],
    };

    setComments((prev) => [item, ...prev]);
    setNewComment("");
  };

  // =========================================================
  // REPLY
  // =========================================================

  const startReply = ({
    parentId,
    replyToId,
    replyToAuthor,
  }) => {
    if (!user) {
      showAccessLogin();
      return;
    }

    setReplyingTo({
      parentId,
      replyToId,
      replyToAuthor,
    });

    setReplyContent("");
    setEditingId(null);

    setExpandedReplies((prev) => ({
      ...prev,
      [parentId]: true,
    }));
  };

  const cancelReply = () => {
    setReplyingTo(null);
    setReplyContent("");
  };

  const handleAddReply = () => {
    if (!user || !replyingTo) return;

    const content = replyContent.trim();

    if (!content) return;

    const replyItem = {
      id: crypto.randomUUID(),
      author: user?.name || "Bạn",
      authorId: user.id,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      content,
      likes: 0,
      createdAt: new Date().toISOString(),
      replyToId: replyingTo.replyToId,
      replyToAuthor: replyingTo.replyToAuthor,
    };

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === replyingTo.parentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                replyItem,
              ],
            }
          : comment
      )
    );

    setExpandedReplies((prev) => ({
      ...prev,
      [replyingTo.parentId]: true,
    }));

    cancelReply();
  };

  // =========================================================
  // EDIT
  // =========================================================

  const startEdit = (comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
    setReplyingTo(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditContent("");
  };

  const handleUpdateComment = () => {
    const content = editContent.trim();

    if (!content || !editingId) return;

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === editingId
          ? { ...comment, content }
          : comment
      )
    );

    cancelEdit();
  };

  // =========================================================
  // LIKE
  // =========================================================

  const handleLike = (
    commentId,
    isReply = false,
    parentId = null
  ) => {
    if(!user) {
      showAccessLogin();
      return;
    }
    const currentlyLiked = !!isLiked[commentId];

    setIsLiked((prev) => ({
      ...prev,
      [commentId]: !currentlyLiked,
    }));

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

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: comment.replies.map(
                (reply) =>
                  reply.id === commentId
                    ? {
                        ...reply,
                        likes: currentlyLiked
                          ? Math.max(
                              0,
                              reply.likes - 1
                            )
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
  // REPLIES
  // =========================================================

  const toggleReplies = (commentId) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // =========================================================
  // REPORT
  // =========================================================

  const openReport = (comment) => {
    setReportingComment(comment);
    setReportReason("");
    setReportSuccess(false);
  };

  const closeReport = () => {
    setReportingComment(null);
    setReportReason("");
    setReportSuccess(false);
  };

  const submitReport = () => {
    if(!user) {
      showAccessLogin();
      return;
    }
    if (!reportReason) return;

    // TODO:
    // API report comment

    setReportSuccess(true);
  };

  // =========================================================
  // DELETE
  // =========================================================
  const handleDeleteComment = (commentId) => {
    if (editingId === commentId) cancelEdit();
    setComments((prev) => prev.filter((c) => c.id !== commentId));
  };

  // =========================================================
  // SORT
  // =========================================================

  const sortedComments = [...comments].sort(
    (a, b) => {
      if (filter === "MOST_LIKED") {
        return b.likes - a.likes;
      }

      return (
        new Date(b.createdAt) -
        new Date(a.createdAt)
      );
    }
  );

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section className="space-y-6 border-t border-border pt-6">
      {/* Header */}
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

        <CommentFilter
          filter={filter}
          onChange={setFilter}
        />
      </div>

        {/* Add comment — chỉ user đã đăng nhập mới thấy form */}
          <CommentForm
            value={newComment}
            onChange={setNewComment}
            onSubmit={handleAddComment}
          />

      {/* Comments */}
      <div className="space-y-4">
        {sortedComments.map((comment) => (
          <CommentItem
            user={user}
            key={comment.id}
            comment={comment}
            liked={!!isLiked[comment.id]}
            expanded={
              !!expandedReplies[comment.id]
            }
            replyingTo={replyingTo}
            replyContent={replyContent}
            onLike={handleLike}
            onReply={startReply}
            onReport={openReport}
            onDelete={handleDeleteComment}
            onToggleReplies={toggleReplies}
            onReplyContentChange={setReplyContent}
            onSubmitReply={handleAddReply}
            onCancelReply={cancelReply}
            editingId={editingId}
            editContent={editContent}
            onEdit={startEdit}
            onEditChange={setEditContent}
            onSubmitEdit={handleUpdateComment}
            onCancelEdit={cancelEdit}
            isLiked={isLiked}
          />
        ))}

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

      {/* Report */}
      <ReportCommentDialog
        comment={reportingComment}
        reason={reportReason}
        success={reportSuccess}
        onReasonChange={setReportReason}
        onSubmit={submitReport}
        onClose={closeReport}
      />
    </section>
  );
}
