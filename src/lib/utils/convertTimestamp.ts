import { PollResult, VotedAt } from "features/poll/types/PollResult";

export const convertTimestamp = (t?: VotedAt): string => {
  if (!t) return "-";
  const date =
    typeof t === "string" ? new Date(t) : new Date(t._seconds * 1000);
  return date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
};

// PollResult全体から最適な日時を抽出
export const getPollDateText = (poll: PollResult): string => {
  return (
    convertTimestamp(poll.voted_at) ||
    convertTimestamp(poll.created_at) ||
    convertTimestamp(poll.updated_at)
  );
};
