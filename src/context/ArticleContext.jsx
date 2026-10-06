import React, { createContext, useContext, useState } from "react";
import { useToast } from "@/context/ToastContext";

const ArticleContext = createContext();

const initialArticles = [
  {
    id: "art-01",
    title: "Ứng dụng AI vào dự báo thời tiết chính xác năm 2026",
    slug: "ung-dung-ai-du-bao-thoi-tiet-2026",
    category: "Công nghệ",
    author: "Nguyễn Văn A",
    authorId: "u-author-1",
    status: "pending", // 'draft' | 'pending' | 'published' | 'rejected'
    content: "Mô hình AI thế hệ mới giúp dự báo bão sớm trước 14 ngày...",
    createdAt: "2026-10-06 08:30",
  },
  {
    id: "art-02",
    title: "Phân tích xu hướng dòng vốn FDI vào ngành Năng lượng xanh",
    slug: "dong-von-fdi-nang-luong-xanh",
    category: "Tài chính",
    author: "Trần Thị B",
    authorId: "u-author-2",
    status: "published",
    content: "Năm 2026 ghi nhận mức tăng trưởng kỷ lục dòng vốn ngoại...",
    createdAt: "2026-10-05 14:20",
  },
];

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState(initialArticles);
  const { addToast } = useToast();

  // Tác giả tạo bài viết mới
  const createArticle = (articleData) => {
    const newArt = {
      ...articleData,
      id: `art-${Date.now()}`,
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      status: articleData.isDraft ? "draft" : "pending",
    };
    setArticles((prev) => [newArt, ...prev]);
    addToast(articleData.isDraft ? "Đã lưu bản nháp thành công" : "Đã gửi bài viết chờ phê duyệt!");
  };

  // Admin/Editor Phê duyệt bài viết
  const approveArticle = (id) => {
    setArticles((prev) =>
      prev.map((art) => (art.id === id ? { ...art, status: "published" } : art))
    );
    addToast("Đã duyệt và xuất bản bài viết thành công!");
  };

  // Admin/Editor Từ chối bài viết
  const rejectArticle = (id, reason) => {
    setArticles((prev) =>
      prev.map((art) => (art.id === id ? { ...art, status: "rejected", rejectReason: reason } : art))
    );
    addToast("Đã từ chối bài viết và gửi phản hồi cho tác giả", "error");
  };

  // Xóa bài viết
  const deleteArticle = (id) => {
    setArticles((prev) => prev.filter((art) => art.id !== id));
    addToast("Đã xóa bài viết thành công!");
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        publishedArticles: articles.filter((a) => a.status === "published"),
        pendingArticles: articles.filter((a) => a.status === "pending"),
        createArticle,
        approveArticle,
        rejectArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

export const useArticles = () => useContext(ArticleContext);