"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const router = useRouter();

  return (
    <aside className="group fixed left-0 top-0 z-50 h-screen w-14 hover:w-60 bg-gray-900 text-white transition-all duration-300">
      <div className="h-full p-4 overflow-hidden">
        {/* タイトル */}
        <h1 className="mb-6 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Discord Poll
        </h1>

        <nav className="space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-700 transition"
          >
            <span>🏠</span>
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              トップ
            </span>
          </Link>

          <Link
            href="/polls"
            className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-700 transition"
          >
            <span>🗳</span>
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              投票一覧
            </span>
          </Link>

          <Link
            href="/docs"
            className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-700 transition"
          >
            <span>📝</span>
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Documentation
            </span>
          </Link>

          <button
            onClick={() => router.back()}
            className="flex w-full items-center gap-2 rounded px-3 py-2 hover:bg-gray-700 transition"
          >
            <span>🔙</span>
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              前のページ
            </span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
