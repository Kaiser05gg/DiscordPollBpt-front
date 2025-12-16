"use client";

import { usePollDetail } from "@/features/poll/hooks/usePollDetail";
import { PollDetailCard } from "@/features/poll/components/PollDetailCard";

export default function Client({ id }: { id: string }) {
  const { data, loading, error } = usePollDetail(id);

  if (loading) return <p>読み込み中…</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>データなし</p>;

  return <PollDetailCard poll={data} />;
}
