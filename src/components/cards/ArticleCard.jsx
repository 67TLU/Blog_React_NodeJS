import React from "react";
import { Link } from "react-router-dom";
import { Clock, Share2, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ArticleCard({ article, variant = "default" }) {
  const articleUrl = `/article/${article.slug || article.id}`;

  if (variant === "featured") {
    return (
      <Link to={articleUrl} className="block h-full">
        <Card className="relative overflow-hidden group cursor-pointer h-full border-none shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
            <Badge className="w-fit mb-2 bg-red-600 hover:bg-red-700">{article.category}</Badge>
            <h2 className="text-2xl font-bold line-clamp-2 mb-2 group-hover:underline">
              {article.title}
            </h2>
            <p className="text-sm text-gray-200 line-clamp-2 mb-4">{article.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span>{article.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.publishedAt}
              </span>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={articleUrl} className="block h-full">
      <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow flex flex-col h-full border-zinc-800 bg-zinc-900 text-white">
        <div className="relative h-44 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-2 left-2 bg-black/60 backdrop-blur-md">
            {article.category}
          </Badge>
        </div>
        <CardContent className="p-4 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="font-semibold text-base line-clamp-2 group-hover:text-blue-400 transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-xs text-zinc-400 line-clamp-2 mb-3">{article.excerpt}</p>
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-800">
            <span>{article.author}</span>
            <div className="flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5 hover:text-white transition-colors" />
              <Share2 className="w-3.5 h-3.5 hover:text-white transition-colors" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}