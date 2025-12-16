import { PollDetailResult } from "../types/PollResult";

export const fetchPollResults = async (): Promise<PollDetailResult[]> => {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}/api/poll_results`;

  console.log("CALL:", url);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return await res.json();
};
