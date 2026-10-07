import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";

// Public Pages
import HomePage from "@/pages/HomePage";
import ArticleDetailPage from "@/pages/ArticleDetailPage";
import CategoryPage from "@/pages/CategoryPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import SearchPage from "@/pages/SearchPage";
import AuthorPublicProfilePage from "@/pages/AuthorPublicProfilePage";
import TagPage from "@/pages/TagPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/user/ContactPage";

// User Pages
import BookmarksPage from "@/pages/user/BookmarksPage";
import ReadingHistoryPage from "@/pages/user/ReadingHistoryPage";
import NotificationsPage from "@/pages/user/NotificationsPage";
import ProfilePage from "@/pages/user/ProfilePage";

// Author Pages & Layout
import AuthorLayout from "@/layouts/AuthorLayout";
import AuthorDashboard from "@/pages/author/AuthorDashboard";
import CreateArticlePage from "@/pages/author/CreateArticlePage";
import MyArticlesPage from "@/pages/author/MyArticlesPage";
import EditArticlePage from "@/pages/author/EditArticlePage";
import MediaLibraryPage from "@/pages/author/MediaLibraryPage";
import PublishSchedulePage from "@/pages/author/PublishSchedulePage";
import ArticleAnalyticsPage from "@/pages/author/ArticleAnalyticsPage";

// Admin Pages & Layout
import AdminLayout from "@/layouts/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ArticleModerationPage from "@/pages/admin/ArticleModerationPage";
import UserManagementPage from "@/pages/admin/UserManagementPage";
import CategoryTagManagementPage from "@/pages/admin/CategoryTagManagementPage";
import AdsManagementPage from "@/pages/admin/AdsManagementPage";
import AuditLogPage from "@/pages/admin/AuditLogPage";
import MenuManagementPage from "@/pages/admin/MenuManagementPage";
import RolePermissionsPage from "@/pages/admin/RolePermissionsPage";
import SystemSettingsPage from "@/pages/admin/SystemSettingsPage";

// System Pages
import ForbiddenPage from "@/pages/system/ForbiddenPage";
import NotFoundPage from "@/pages/system/NotFoundPage";
import CommentSection from "./components/article/CommentSection";
import { ArticleCardSkeleton } from "./components/cards/Skeletons";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:id" element={<ArticleDetailPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tag/:slug" element={<TagPage />} />
      <Route path="/author-profile/:id" element={<AuthorPublicProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* User Routes (Protected) */}
      <Route path="/user/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/user/bookmarks" element={<ProtectedRoute><BookmarksPage /></ProtectedRoute>} />
      <Route path="/user/history" element={<ProtectedRoute><ReadingHistoryPage /></ProtectedRoute>} />
      <Route path="/user/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />

      {/* Author Studio Routes */}
      <Route path="/author" element={<ProtectedRoute><AuthorLayout /></ProtectedRoute>}>
        <Route index element={<AuthorDashboard />} />
        <Route path="articles" element={<MyArticlesPage />} />
        <Route path="create" element={<CreateArticlePage />} />
        <Route path="edit/:id" element={<EditArticlePage />} />
        <Route path="analytics" element={<ArticleAnalyticsPage />} />
        <Route path="media" element={<MediaLibraryPage />} />
        <Route path="schedule" element={<PublishSchedulePage />} />
      </Route>

      {/* Admin Panel Routes */}
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="articles" element={<ArticleModerationPage />} />
        <Route path="moderation" element={<ArticleModerationPage />} />
        <Route path="users" element={<UserManagementPage />} />
        <Route path="categories" element={<CategoryTagManagementPage />} />
        <Route path="menu" element={<MenuManagementPage />} />
        <Route path="roles" element={<RolePermissionsPage />} />
        <Route path="ads" element={<AdsManagementPage />} />
        <Route path="logs" element={<AuditLogPage />} />
        <Route path="system" element={<SystemSettingsPage />} />
      </Route>

      {/* Trang lỗi hệ thống */}
      <Route path="/403" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}