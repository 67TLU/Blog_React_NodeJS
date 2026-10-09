import React, { useState } from "react";
import { Users, UserX, UserCheck } from "lucide-react";
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
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-500" /> Quản lý tài khoản người dùng
        </h1>
        <p className="text-xs text-muted-foreground">Xem danh sách, phân quyền và khóa/mở khóa tài khoản</p>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-foreground">
          <thead className="bg-muted/50 text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="p-4">Họ và tên</th>
              <th className="p-4">Email</th>
              <th className="p-4">Vai trò</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-muted/40 transition-colors">
                <td className="p-4 font-semibold text-foreground">{u.name}</td>
                <td className="p-4 text-muted-foreground">{u.email}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-foreground border border-border">
                    {u.role}
                  </span>
                </td>
                <td className="p-4">
                  {u.status === "ACTIVE" ? (
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5" /> Hoạt động
                    </span>
                  ) : (
                    <span className="text-xs text-red-600 dark:text-red-400 font-semibold flex items-center gap-1">
                      <UserX className="w-3.5 h-3.5" /> Đã khóa
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(u.id)}
                    className={`border-border ${u.status === "ACTIVE" ? "text-red-600 dark:text-red-400 hover:bg-muted" : "text-green-600 dark:text-green-400 hover:bg-muted"}`}
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