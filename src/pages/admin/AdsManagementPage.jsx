import React, { useState } from "react";
import { Megaphone, Plus, Eye, MousePointer, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mockAds = [
  { id: "ad1", title: "Banner Sidebar - VinFast", position: "Sidebar bài viết", clicks: 1240, views: 45000, active: true },
  { id: "ad2", title: "Banner Leaderboard Top Trang chủ", position: "Top Homepage", clicks: 3890, views: 120000, active: true },
  { id: "ad3", title: "In-article Native Ads - Techcombank", position: "Giữa nội dung bài viết", clicks: 890, views: 28000, active: false },
];

export default function AdsManagementPage() {
  const [ads, setAds] = useState(mockAds);

  const toggleAdStatus = (id) => {
    setAds(ads.map((ad) => (ad.id === id ? { ...ad, active: !ad.active } : ad)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-amber-500" /> Quản lý Quảng cáo & Banner
          </h1>
          <p className="text-xs text-zinc-400">Theo dõi hiệu suất vị trí đặt banner quảng cáo</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 font-semibold gap-2">
          <Plus className="w-4 h-4" /> Thêm vị trí QC mới
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4">
            <p className="text-xs text-zinc-400">Tổng doanh thu dự kiến (Tháng)</p>
            <p className="text-2xl font-black text-green-400 mt-1">$4,850.00</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4">
            <p className="text-xs text-zinc-400">Tổng Lượt Click (CTR)</p>
            <p className="text-2xl font-black text-blue-400 mt-1">6,020 (3.1%)</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-4">
            <p className="text-xs text-zinc-400">Vị trí đang hoạt động</p>
            <p className="text-2xl font-black text-amber-400 mt-1">2 / 3</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-zinc-300">
          <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="p-4">Tên Chiến dịch / Banner</th>
              <th className="p-4">Vị trí hiển thị</th>
              <th className="p-4">Hiển thị (Views)</th>
              <th className="p-4">Lượt nhấp (Clicks)</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {ads.map((ad) => (
              <tr key={ad.id} className="hover:bg-zinc-800/40">
                <td className="p-4 font-semibold text-white">{ad.title}</td>
                <td className="p-4 text-zinc-400">{ad.position}</td>
                <td className="p-4 text-xs font-mono">{ad.views.toLocaleString()}</td>
                <td className="p-4 text-xs font-mono">{ad.clicks.toLocaleString()}</td>
                <td className="p-4">
                  {ad.active ? (
                    <span className="text-xs text-green-400 font-semibold">Đang bật</span>
                  ) : (
                    <span className="text-xs text-zinc-500 font-semibold">Tắt</span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleAdStatus(ad.id)}
                    className="text-zinc-300 hover:bg-zinc-800"
                  >
                    {ad.active ? <ToggleRight className="w-6 h-6 text-green-400" /> : <ToggleLeft className="w-6 h-6 text-zinc-500" />}
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