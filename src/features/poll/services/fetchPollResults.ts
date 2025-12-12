import { PollDetailResult } from "../types/PollResult";

export const fetchPollResults = async (): Promise<PollDetailResult[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/poll_results`
  );
  console.log("CALL:", `${process.env.NEXT_PUBLIC_API_BASE_URL}/poll_results`);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return await res.json();
};
