export interface FirestoreTimestamp {
  _seconds: number;
  _nanoseconds: number;
}

export type VotedAt = string | FirestoreTimestamp;

export interface PollResult {
  date: string;
  question: string;
  results: Record<string, number>;
  voted_at?: VotedAt;
  created_at?: VotedAt;
  updated_at?: VotedAt;
  top_option?: string;
}
