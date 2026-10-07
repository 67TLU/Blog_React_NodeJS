import React, { useState } from "react";
import { Navigation, Plus, MoveVertical, ExternalLink, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialMenuItems = [
  { id: "1", label: "Trang chủ", url: "/", target: "_self" },
  { id: "2", label: "Tin Công nghệ", url: "/category/cong-nghe", target: "_self" },
  { id: "3", label: "Thị trường Tài chính", url: "/category/tai-chinh", target: "_self" },
  { id: "4", label: "Thời tiết & Thiên văn", url: "/weather", target: "_self" },
  { id: "5", label: "Trực tiếp Bóng đá", url: "/sports/live", target: "_blank" },
];

export default function MenuManagementPage() {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (!label || !url) return;
    setMenuItems([...menuItems, { id: `${Date.now()}`, label, url, target: "_self" }]);
    setLabel("");
    setUrl("");
  };

  const removeItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Navigation className="w-6 h-6 text-blue-500" /> Quản lý Menu Điều hướng
          </h1>
          <p className="text-xs text-muted-foreground">Tùy chỉnh các liên kết thanh Header và Footer trên giao diện portal</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-1.5 text-xs">
          <Save className="w-4 h-4" /> Lưu cấu hình Menu
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form thêm item */}
        <div className="bg-card border border-border rounded-xl p-5 space-y-4 h-fit">
          <h3 className="text-sm font-bold text-foreground">Thêm liên kết mới</h3>
          <form onSubmit={handleAddMenuItem} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="text-muted-foreground font-semibold">Tên hiển thị</label>
              <Input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Ví dụ: Tin Nóng"
                className="bg-muted border-border text-foreground"
              />
            </div>
            <div className="space-y-1">
              <label className="text-muted-foreground font-semibold">Đường dẫn URL / Route</label>
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="/category/tin-nong"
                className="bg-muted border-border text-foreground font-mono"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2">
              <Plus className="w-4 h-4" /> Thêm vào Menu
            </Button>
          </form>
        </div>

        {/* Danh sách sắp xếp Menu */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-foreground mb-2">Thứ tự các liên kết (Header Main Menu)</h3>

          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-muted border border-border rounded-lg p-3.5 flex items-center justify-between hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MoveVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                  <div>
                    <p className="text-xs font-bold text-foreground flex items-center gap-2">
                      {item.label}
                      {item.target === "_blank" && <ExternalLink className="w-3 h-3 text-muted-foreground" />}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground">{item.url}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground font-mono">Vị trí #{index + 1}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                    className="h-8 w-8 text-red-600 dark:text-red-400 hover:bg-muted"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}