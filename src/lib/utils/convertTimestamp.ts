import type {
  DateLike,
  PollDetailResult,
} from "@/features/poll/types/PollResult";

export const convertTimestamp = (t?: DateLike): string => {
  if (!t) return "-";

  let date: Date;

  if (t instanceof Date) {
    date = t;
  } else if (typeof t === "string") {
    date = new Date(t);
  } else {
    date = new Date(t._seconds * 1000);
  }

  return date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
};

export const getPollDateText = (poll: PollDetailResult): string => {
  return (
    convertTimestamp(poll.voted_at) ||
    convertTimestamp(poll.cron?.timestamp) ||
    "-"
  );
};
