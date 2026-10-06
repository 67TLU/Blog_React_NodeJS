import React, { useState } from "react";
import { Users, Shield, UserX, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockUsers = [
  { id: "u1", name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: "AUTHOR", status: "ACTIVE" },
  { id: "u2", name: "Trần Thị B", email: "tranthib@gmail.com", role: "MEMBER", status: "ACTIVE" },
  { id: "u3", name: "Lê Hoàng C", email: "lehoangc@gmail.com", role: "EDITOR", status: "BLOCKED" },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(mockUsers);

  const toggleStatus = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "ACTIVE" ? "BLOCKED" : "ACTIVE" } : u));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-500" /> Quản lý tài khoản người dùng
        </h1>
        <p className="text-xs text-zinc-400">Xem danh sách, phân quyền và khóa/mở khóa tài khoản</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-zinc-300">
          <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="p-4">Họ và tên</th>
              <th className="p-4">Email</th>
              <th className="p-4">Vai trò</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-zinc-800/40 transition-colors">
                <td className="p-4 font-semibold text-white">{u.name}</td>
                <td className="p-4 text-zinc-400">{u.email}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {u.role}
                  </span>
                </td>
                <td className="p-4">
                  {u.status === "ACTIVE" ? (
                    <span className="text-xs text-green-400 font-semibold flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5" /> Hoạt động
                    </span>
                  ) : (
                    <span className="text-xs text-red-400 font-semibold flex items-center gap-1">
                      <UserX className="w-3.5 h-3.5" /> Đã khóa
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(u.id)}
                    className={`border-zinc-700 ${u.status === "ACTIVE" ? "text-red-400 hover:bg-zinc-800" : "text-green-400 hover:bg-zinc-800"}`}
                  >
                    {u.status === "ACTIVE" ? "Khóa TK" : "Mở khóa"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}