"use client";

import { useEffect, useState } from "react";
import { PollResult } from "@/features/poll/types/PollResult";
import { convertTimestamp } from "@/lib/utils/convertTimestamp";

export default function PollListPage() {
  const [polls, setPolls] = useState<PollResult[]>([]);

  useEffect(() => {
    fetch("/api/poll_results")
      .then((res) => res.json())
      .then((data) => setPolls(data));
  }, []);

  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold mb-6">🗳 投票履歴一覧</h2>

      <table className="w-full border-collapse text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="border p-3 text-left">日時</th>
            <th className="border p-3 text-left">質問</th>
            <th className="border p-3 text-left">結果（topOption）</th>
          </tr>
        </thead>

        <tbody>
          {polls.map((p, i) => (
            <tr
              key={i}
              className="border hover:bg-gray-700 cursor-pointer"
              onClick={() => (window.location.href = `/poll/${p.voted_at}`)}
            >
              {/* 日付：p.date ではなく p.voted_at を使う */}
              <td className="border p-3">{convertTimestamp(p.voted_at)}</td>

              {/* 質問 */}
              <td className="border p-3">{p.question}</td>

              {/* topOption を表示 */}
              <td className="border p-3">{p.top_option ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
