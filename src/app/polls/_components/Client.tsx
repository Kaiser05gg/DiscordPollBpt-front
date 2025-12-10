"use client";

import { PollTable } from "@/features/poll/components/PollTable";
import { usePollResults } from "@/features/poll/hooks/usePollResults";

export default function PollListClient() {
  const { polls, loading, error } = usePollResults();

  if (loading) {
    return <p className="text-gray-400">読み込み中...</p>;
  }

  if (error) {
    return <p className="text-red-400">エラーが発生しました: {error}</p>;
  }

  if (!polls || polls.length === 0) {
    return <p className="text-gray-300">まだ投票履歴がありません。</p>;
  }

  return <PollTable polls={polls} />;
}
