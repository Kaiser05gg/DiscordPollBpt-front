"use client";

import Link from "next/link";
import type { PollDetail } from "@/features/poll/types/PollResult";
import { convertTimestamp } from "@/lib/utils/convertTimestamp";

interface Props {
  poll: PollDetail;
}

export function PollDetailCard({ poll }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{poll.question}</h1>

      <p className="text-sm text-gray-500 mb-2">
        <span className="font-semibold">ID:</span> {poll.id} /
        <span className="font-semibold ml-2">UUID:</span> {poll.uuid}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">作成日時:</span>{" "}
        {poll.created_at ? convertTimestamp(poll.created_at) : "不明"}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">結果</h2>

      {poll.results ? (
        <ul className="space-y-1 mb-6">
          {Object.entries(poll.results).map(([option, count]) => (
            <li key={option} className="flex justify-between border-b pb-1">
              <span>{option}</span>
              <span className="font-bold">{count}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">結果データなし</p>
      )}

      <p className="text-md mt-4">
        <span className="font-semibold">Top:</span> {poll.top_option ?? "なし"}
      </p>

      {/* ここにグラフを追加予定 */}
      <div className="mt-8">
        {/* <PollResultChart results={poll.results} /> */}
      </div>

      {/* 戻るボタン */}
      <div className="mt-8">
        <Link
          href="/polls"
          className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded shadow-sm"
        >
          ← 一覧へ戻る
        </Link>
      </div>
    </div>
  );
}
