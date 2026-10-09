import React, { useState } from "react";
import { Image as ImageIcon, Upload, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockMediaFiles = [
  { id: "m1", name: "ai-chipset-2026.jpg", size: "1.2 MB", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
  { id: "m2", name: "market-chart.png", size: "850 KB", url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80" },
  { id: "m3", name: "football-stadium.jpg", size: "2.4 MB", url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80" },
];

export default function MediaLibraryPage() {
  const [files] = useState(mockMediaFiles); // mock tĩnh — chưa cần setter
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-green-500" /> Thư viện Media
          </h1>
          <p className="text-xs text-muted-foreground">Kho lưu trữ hình ảnh và tài nguyên bài viết</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 gap-2 font-semibold">
          <Upload className="w-4 h-4" /> Tải tệp mới lên
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file) => (
          <div key={file.id} className="bg-card border border-border rounded-xl overflow-hidden group">
            <div className="h-36 overflow-hidden relative">
              <img src={file.url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-3 space-y-2">
              <p className="text-xs font-semibold text-foreground truncate">{file.name}</p>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{file.size}</span>
                <div className="flex gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => copyToClipboard(file.id, file.url)}
                    className="h-6 w-6 text-muted-foreground hover:text-foreground"
                  >
                    {copiedId === file.id ? <Check className="w-3 h-3 text-green-600 dark:text-green-400" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}