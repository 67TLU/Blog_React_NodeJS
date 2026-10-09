import React, { useState } from "react";
import { Settings, Save, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SystemSettingsPage() {
  const [siteName, setSiteName] = useState("Portal News 2026");
  const [siteDescription, setSiteDescription] = useState("Cổng thông tin tin tức đa phương tiện cập nhật liên tục 24/7");
  const [contactEmail, setContactEmail] = useState("admin@portalnews.com");
  const [enableMaintenance, setEnableMaintenance] = useState(false);
  const [enableRegister, setEnableRegister] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Đã lưu cấu hình hệ thống thành công!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Settings className="w-6 h-6 text-muted-foreground" /> Cấu hình Hệ thống (System Settings)
          </h1>
          <p className="text-xs text-muted-foreground">Tùy chỉnh thông tin trang web, bảo mật và cấu hình máy chủ gửi tin</p>
        </div>
        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-1.5 text-xs">
          <Save className="w-4 h-4" /> Lưu cấu hình
        </Button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Khối 1: Thông tin chung */}
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Cấu hình Chung & SEO Portal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-foreground font-semibold">Tên trang web (Site Name)</label>
              <Input
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="bg-muted border-border text-foreground"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-foreground font-semibold">Email liên hệ hệ thống</label>
              <Input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-muted border-border text-foreground"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <label className="text-foreground font-semibold">Mô tả Meta SEO (Meta Description)</label>
            <Textarea
              value={siteDescription}
              onChange={(e) => setSiteDescription(e.target.value)}
              className="bg-muted border-border text-foreground text-xs min-h-[70px]"
            />
          </div>
        </div>

        {/* Khối 2: Cấu hình Bảo mật & Trạng thái */}
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Bảo mật & Chế độ vận hành
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border">
              <div>
                <p className="font-semibold text-foreground">Chế độ bảo trì trang web (Maintenance Mode)</p>
                <p className="text-[10px] text-muted-foreground">Tạm dừng truy cập của độc giả để nâng cấp máy chủ</p>
              </div>
              <input
                type="checkbox"
                checked={enableMaintenance}
                onChange={(e) => setEnableMaintenance(e.target.checked)}
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border">
              <div>
                <p className="font-semibold text-foreground">Cho phép đăng ký tài khoản mới</p>
                <p className="text-[10px] text-muted-foreground">Mở cổng cho phép độc giả tự tạo tài khoản Subscriber</p>
              </div>
              <input
                type="checkbox"
                checked={enableRegister}
                onChange={(e) => setEnableRegister(e.target.checked)}
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}