"use client";
import { usePollResults } from "@/features/poll/hooks/usePollResults";
import { PollTable } from "@/features/poll/components/PollTable";

export default function Page() {
  const { polls, loading, error } = usePollResults();

  if (loading) return <p className="p-6">読み込み中...</p>;
  if (error) return <p className="p-6 text-red-600">エラー: {error}</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">🗳 投票履歴一覧</h1>
      <PollTable polls={polls} />
    </main>
  );
}
