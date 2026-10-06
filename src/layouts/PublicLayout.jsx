import React from "react";
import { Search, User, Bell, Menu, Bookmark, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {Link} from "react-router-dom";
import {UserIcon} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuGroup // <-- Thêm cái này
} from "@/components/ui/dropdown-menu";

export default function PublicLayout({ children }) {
    const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur border-b border-zinc-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Mobile menu */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <span className="text-2xl font-black bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent cursor-pointer">
              MSN NEWS
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input
              type="text"
              placeholder="Tìm kiếm trên web..."
              className="pl-9 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400 focus-visible:ring-1"
            />
          </div>

          {/* User actions */}
<div className="flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="w-9 h-9 border border-zinc-700 cursor-pointer">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
<DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white w-48">
  {/* Bọc toàn bộ phần thông tin và menu chính vào DropdownMenuGroup */}
  <DropdownMenuGroup>
    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
    <DropdownMenuSeparator className="bg-zinc-800" />
    <DropdownMenuItem className="cursor-pointer hover:bg-zinc-800">
      <UserIcon className="w-4 h-4 mr-2" /> Hồ sơ cá nhân
    </DropdownMenuItem>
    <DropdownMenuItem className="cursor-pointer hover:bg-zinc-800">
      <Bookmark className="w-4 h-4 mr-2" /> Bài viết đã lưu
    </DropdownMenuItem>
  </DropdownMenuGroup>
  
  <DropdownMenuSeparator className="bg-zinc-800" />
  <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-400 hover:bg-zinc-800">
    <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
  </DropdownMenuItem>
</DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="outline" className="gap-2 border-zinc-700 hover:bg-zinc-800">
                  <UserIcon className="w-4 h-4" /> Đăng nhập
                </Button>
                
                <Button variant="outline" className="gap-2 border-zinc-700 hover:bg-zinc-800">
                  <UserIcon className="w-4 h-4" />Đăng ký
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Navigation Categories */}
        <nav className="max-w-7xl mx-auto flex items-center gap-6 pt-3 text-sm font-medium overflow-x-auto text-zinc-400 border-t border-zinc-800/50 mt-3">
          <span className="text-white font-semibold cursor-pointer border-b-2 border-blue-500 pb-1">Khám phá</span>
          <span className="hover:text-white cursor-pointer transition-colors pb-1">Tin tức</span>
          <span className="hover:text-white cursor-pointer transition-colors pb-1">Thể thao</span>
          <span className="hover:text-white cursor-pointer transition-colors pb-1">Tài chính</span>
          <span className="hover:text-white cursor-pointer transition-colors pb-1">Thời tiết</span>
          <span className="hover:text-white cursor-pointer transition-colors pb-1">Công nghệ</span>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">{children}</main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-400 py-6 text-center text-sm">
        <p>© 2026 MSN News Clone - Dự án học React JS</p>
      </footer>
    </div>
  );
}