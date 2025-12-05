"use client";

import Link from "next/link";
import type { PollDetailResult } from "@/features/poll/types/PollResult";
import { convertTimestamp } from "@/lib/utils/convertTimestamp";

export function PollTable({ polls }: { polls: PollDetailResult[] }) {
  return (
    <table className="min-w-full bg-gray-800 text-white rounded">
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-2 text-left">質問</th>
          <th className="px-4 py-2 text-left">日時</th>
          <th className="px-4 py-2 text-left">結果</th>
          <th className="px-4 py-2 text-left">詳細</th>
        </tr>
      </thead>

      <tbody>
        {polls.map((poll, i) => {
          // 日付の指定
          const date = poll.created_at ?? null;
          const dateText = convertTimestamp(date);

          // ▼ 結果（トップ1 = top_option）
          const topOption =
            poll.top_option ??
            poll.poll?.top_option ??
            poll.cron?.top_option ??
            "無投票";

          return (
            <tr key={i} className="border-b border-gray-700">
              {/* 質問 */}
              <td className="px-4 py-2">{poll.question ?? "（質問なし）"}</td>

              {/* 日時 */}
              <td className="px-4 py-2">{dateText}</td>

              {/* top_option */}
              <td className="px-4 py-2">{topOption}</td>

              {/* 詳細リンク */}
              <td className="px-4 py-2">
                <Link
                  href={`/polls/${poll.uuid}`}
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  詳細を見る →
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
