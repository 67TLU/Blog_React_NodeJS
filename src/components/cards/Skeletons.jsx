// src/components/ui/Skeletons.jsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton Bài viết
export function ArticleCardSkeleton() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
      <Skeleton className="w-full h-44 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-1/4" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
}

// Skeleton Bảng quản lý
export function TableRowSkeleton() {
  return (
    <tr className="border-b border-zinc-800/60">
      <td className="p-4"><Skeleton className="h-4 w-48" /></td>
      <td className="p-4"><Skeleton className="h-3 w-20" /></td>
      <td className="p-4"><Skeleton className="h-3 w-16" /></td>
      <td className="p-4"><Skeleton className="h-3 w-12" /></td>
      <td className="p-4 text-right"><Skeleton className="h-6 w-12 ml-auto" /></td>
    </tr>
  );
}