"use client";

import { useEffect, useState } from "react";
import { fetchPollDetail } from "../services/fetchPollDetail";
import type { PollDetail } from "../types/PollResult";

export function usePollDetail(id: string) {
  const [data, setData] = useState<PollDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const run = async () => {
      try {
        setLoading(true);
        const res = await fetchPollDetail(id);
        setData(res);
      } catch (err: unknown) {
        // ← any → unknown
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load poll");
        }
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [id]);

  return { data, loading, error };
}
