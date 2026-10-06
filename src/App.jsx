import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/routes/ProtectedRoute";
import CategoryTagManagementPage from "@/pages/admin/CategoryTagManagementPage";
// Public Pages
import HomePage from "@/pages/HomePage";
import ArticleDetailPage from "@/pages/ArticleDetailPage";
import CategoryPage from "@/pages/CategoryPage";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import SearchPage from "@/pages/SearchPage";
import AuthorPublicProfilePage from "@/pages/AuthorPublicProfilePage";

// User Pages
import BookmarksPage from "@/pages/user/BookmarksPage";
import ReadingHistoryPage from "@/pages/user/ReadingHistoryPage";
import NotificationsPage from "@/pages/user/NotificationsPage";

// Author Pages & Layout
import AuthorLayout from "@/layouts/AuthorLayout";
import AuthorDashboard from "@/pages/author/AuthorDashboard";
import CreateArticlePage from "@/pages/author/CreateArticlePage";
import MyArticlesPage from "@/pages/author/MyArticlesPage";
import MediaLibraryPage from "@/pages/author/MediaLibraryPage";
import PublishSchedulePage from "@/pages/author/PublishSchedulePage";

// Admin Pages & Layout
import AdminLayout from "@/layouts/AdminLayout";
import ArticleModerationPage from "@/pages/admin/ArticleModerationPage";
import UserManagementPage from "@/pages/admin/UserManagementPage";
import AdsManagementPage from "@/pages/admin/AdsManagementPage";
import AuditLogPage from "@/pages/admin/AuditLogPage";
import ContactPage from "./pages/user/ContactPage";
import AboutPage from "./pages/AboutPage";
import TagPage from "./pages/TagPage";
import ArticleAnalyticsPage from "./pages/author/ArticleAnalyticsPage";
import EditArticlePage from "./pages/author/EditArticlePage";
import MenuManagementPage from "./pages/admin/MenuManagementPage";
import RolePermissionsPage from "./pages/admin/RolePermissionsPage";
import SystemSettingsPage from "./pages/admin/SystemSettingsPage";
import ArticleApprovalPage from "./pages/admin/ArticleModerationPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ForbiddenPage from "./pages/system/ForbiddenPage";
import NotFoundPage from "./pages/system/NotFoundPage";
export default function App() {
  return (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/author-profile/:id" element={<AuthorPublicProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* User Routes (Protected) */}
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
 <Route path="/tag/:slug" element={<TagPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          {/* Admin Panel Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="moderation" element={<ArticleModerationPage />} />
            <Route path="users" element={<UserManagementPage />} />
            <Route path="ads" element={<AdsManagementPage />} />
            <Route path="logs" element={<AuditLogPage />} />
            <Route index element={<AdminDashboard />} />
  <Route path="articles" element={<ArticleApprovalPage />} />
  <Route path="users" element={<UserManagementPage />} />
  <Route path="categories" element={<CategoryTagManagementPage />} />
  <Route path="menu" element={<MenuManagementPage />} />
  <Route path="roles" element={<RolePermissionsPage />} />
  <Route path="system" element={<SystemSettingsPage />} />
          </Route>
          {/* Trang lỗi hệ thống */}
          <Route path="/403" element={<ForbiddenPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
}