import type { PollDetail } from "@/features/poll/types/PollResult";

export async function fetchPollDetail(id: string): Promise<PollDetail> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const res = await fetch(`${base}/api/poll_result_by_uuid/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch poll detail: ${res.status}`);
  }

  const data = await res.json();

  const parsedResults = data.results
    ? Object.fromEntries(
        Object.entries(data.results).map(([key, value]) => [key, Number(value)])
      )
    : {};

  return {
    ...data,
    results: parsedResults,
  };
}
