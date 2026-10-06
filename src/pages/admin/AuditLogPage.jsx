import React from "react";
import { ShieldCheck, History, User, AlertCircle } from "lucide-react";

const mockLogs = [
  { id: "l1", user: "Admin Hoang", action: "Đã phê duyệt bài viết #102", ip: "14.232.208.10", time: "10 phút trước", status: "SUCCESS" },
  { id: "l2", user: "Editor Nam", action: "Thay đổi phân quyền User #u3 sang AUTHOR", ip: "118.70.12.44", time: "1 giờ trước", status: "SUCCESS" },
  { id: "l3", user: "Unknown", action: "Đăng nhập thất bại (Sai mật khẩu 5 lần)", ip: "27.72.61.102", time: "3 giờ trước", status: "WARNING" },
];

export default function AuditLogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <History className="w-6 h-6 text-purple-500" /> Audit Logs & Nhật ký hệ thống
        </h1>
        <p className="text-xs text-zinc-400">Ghi lại toàn bộ hành động bảo mật và quản trị của các tài khoản</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-800">
        {mockLogs.map((log) => (
          <div key={log.id} className="p-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${log.status === "WARNING" ? "bg-red-500/10 text-red-400" : "bg-blue-500/10 text-blue-400"}`}>
                {log.status === "WARNING" ? <AlertCircle className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
              </div>
              <div>
                <p className="font-semibold text-white">{log.action}</p>
                <div className="flex items-center gap-3 text-xs text-zinc-500 mt-0.5">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {log.user}</span>
                  <span>•</span>
                  <span>IP: {log.ip}</span>
                </div>
              </div>
            </div>
            <span className="text-xs text-zinc-500">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}