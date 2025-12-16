import type { PollDetail } from "@/features/poll/types/PollResult";

export async function fetchPollDetail(id: string): Promise<PollDetail> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const res = await fetch(`${base}/api/poll_result_by_uuid/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch poll detail: ${res.status}`);
  }

  return res.json();
}
