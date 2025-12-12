export interface FirestoreTimestamp {
  _seconds: number;
  _nanoseconds: number;
}

export type DateLike = Date | string | FirestoreTimestamp | null;

export interface PollDetailResult {
  // 親ドキュメント
  id: string;
  uuid: string;
  question?: string;
  created_at?: DateLike;
  updated_at?: DateLike;
  results?: Record<string, number> | null;
  top_option?: string;
  voted_at?: DateLike;

  cron?: {
    results?: Record<string, number> | null;
    top_option?: string;
    timestamp?: DateLike;
  } | null;

  poll?: {
    results?: Record<string, number> | null;
    top_option?: string;
    voted_at?: DateLike;
  } | null;
}
export interface PollDetail {
  id: string;
  uuid: string;
  question: string;
  created_at?: string | FirestoreTimestamp;
  top_option?: string;
  results?: Record<string, number>;
  voted_at?: string | FirestoreTimestamp;
}
