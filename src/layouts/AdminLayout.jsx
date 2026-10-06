import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, CheckSquare, Users, FolderTree, ArrowLeft, LogOut, ShieldAlert } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: "Duyệt bài viết", path: "/admin/moderation", icon: CheckSquare },
    { label: "Quản lý người dùng", path: "/admin/users", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between p-4 hidden md:flex">
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-2">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <span className="text-xl font-black bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              ADMIN PANEL
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-red-950/30 rounded-lg border border-red-900/40">
            <Avatar className="w-10 h-10 border border-red-700">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>{user?.name?.[0] || "A"}</AvatarFallback>
            </Avatar>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">{user?.name || "Admin"}</p>
              <span className="text-xs text-red-400 font-medium">Quản trị viên</span>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-2 border-t border-zinc-800 pt-4">
          <Link to="/">
            <Button variant="outline" className="w-full justify-start gap-2 border-zinc-800 hover:bg-zinc-800 text-zinc-300">
              <ArrowLeft className="w-4 h-4" /> Về trang chủ
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={logout}
            className="w-full justify-start gap-2 text-red-400 hover:text-red-300 hover:bg-zinc-800/50"
          >
            <LogOut className="w-4 h-4" /> Đăng xuất
          </Button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 max-w-6xl w-full mx-auto overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}