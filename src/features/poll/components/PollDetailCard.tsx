"use client";

import type { PollDetail } from "@/features/poll/types/PollResult";
// ↑ パスはプロジェクトの構成と一致するように修正してね
// 今の構造だと ../../poll/types/PollDetail が正しい

interface Props {
  poll: PollDetail;
}

export function PollDetailCard({ poll }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h1 className="text-xl font-semibold mb-2">{poll.question}</h1>

      <p className="text-sm text-gray-600">
        ID: {poll.id} / UUID: {poll.uuid}
      </p>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-1">結果</h2>
        <ul className="space-y-1">
          {poll.results &&
            Object.entries(poll.results).map(([option, count]) => (
              <li key={option} className="flex justify-between">
                <span>{option}</span>
                <span className="font-bold">{count}</span>
              </li>
            ))}
        </ul>
      </div>

      <p className="mt-4 text-sm">Top: {poll.top_option ?? "なし"}</p>
    </div>
  );
}
