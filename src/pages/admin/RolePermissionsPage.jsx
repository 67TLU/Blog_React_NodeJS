import React, { useState } from "react";
import { ShieldCheck, Lock, Check, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPermissions = [
  { key: "ARTICLE_CREATE", label: "Tạo mới bài viết" },
  { key: "ARTICLE_EDIT_OWN", label: "Sửa bài viết của chính mình" },
  { key: "ARTICLE_EDIT_ALL", label: "Sửa tất cả bài viết" },
  { key: "ARTICLE_DELETE", label: "Xóa bài viết" },
  { key: "ARTICLE_APPROVE", label: "Phê duyệt bài viết (Biên tập viên)" },
  { key: "CATEGORY_MANAGE", label: "Quản lý Chuyên mục & Tags" },
  { key: "USER_MANAGE", label: "Quản lý Người dùng & Phân quyền" },
  { key: "SYSTEM_SETTINGS", label: "Cấu hình Hệ thống" },
];

const mockRoleMatrix = {
  ADMIN: ["ARTICLE_CREATE", "ARTICLE_EDIT_OWN", "ARTICLE_EDIT_ALL", "ARTICLE_DELETE", "ARTICLE_APPROVE", "CATEGORY_MANAGE", "USER_MANAGE", "SYSTEM_SETTINGS"],
  EDITOR: ["ARTICLE_CREATE", "ARTICLE_EDIT_OWN", "ARTICLE_EDIT_ALL", "ARTICLE_DELETE", "ARTICLE_APPROVE", "CATEGORY_MANAGE"],
  AUTHOR: ["ARTICLE_CREATE", "ARTICLE_EDIT_OWN"],
  SUBSCRIBER: [],
};

export default function RolePermissionsPage() {
  const [matrix, setMatrix] = useState(mockRoleMatrix);

  const togglePermission = (role, permKey) => {
    setMatrix((prev) => {
      const currentPerms = prev[role] || [];
      const hasPerm = currentPerms.includes(permKey);
      const updatedPerms = hasPerm
        ? currentPerms.filter((k) => k !== permKey)
        : [...currentPerms, permKey];
      return { ...prev, [role]: updatedPerms };
    });
  };

  const handleSave = () => {
    alert("Đã lưu ma trận phân quyền thành công!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-500" /> Ma trận Phân quyền & Vai trò (RBAC)
          </h1>
          <p className="text-xs text-muted-foreground">Thiết lập chi tiết quyền hạn tác vụ tương ứng với từng nhóm người dùng</p>
        </div>
        <Button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-1.5 text-xs">
          <Save className="w-4 h-4" /> Cập nhật phân quyền
        </Button>
      </div>

      {/* Bảng Ma trận */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-foreground border-collapse">
          <thead className="bg-muted/60 text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="p-4 w-1/3">Tên quyền hạn (Permission)</th>
              <th className="p-4 text-center">Quản trị viên (Admin)</th>
              <th className="p-4 text-center">Biên tập viên (Editor)</th>
              <th className="p-4 text-center">Tác giả (Author)</th>
              <th className="p-4 text-center">Độc giả (Subscriber)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs">
            {mockPermissions.map((perm) => (
              <tr key={perm.key} className="hover:bg-muted/40">
                <td className="p-4 font-semibold text-foreground">
                  {perm.label}
                  <span className="block text-[10px] font-mono text-muted-foreground font-normal">{perm.key}</span>
                </td>

                {["ADMIN", "EDITOR", "AUTHOR", "SUBSCRIBER"].map((role) => {
                  const isChecked = matrix[role]?.includes(perm.key);
                  const isAdmin = role === "ADMIN";
                  return (
                    <td key={role} className="p-4 text-center">
                      <button
                        type="button"
                        disabled={isAdmin} // Khóa không cho tháo quyền Admin tối cao
                        onClick={() => togglePermission(role, perm.key)}
                        className={`w-6 h-6 rounded flex items-center justify-center mx-auto transition-all ${
                          isChecked
                            ? "bg-indigo-600 text-white"
                            : "bg-muted border border-border text-transparent"
                        } ${isAdmin ? "opacity-60 cursor-not-allowed" : "hover:scale-110"}`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}