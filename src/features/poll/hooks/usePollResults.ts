"use client";
import { useEffect, useState } from "react";
import { PollResult } from "../types/PollResult";
import { fetchPollResults } from "../services/fetchPollResults";

export const usePollResults = () => {
  const [polls, setPolls] = useState<PollResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPollResults();
        setPolls(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { polls, loading, error };
};
