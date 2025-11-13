"use client";
import { PollResult } from "../types/PollResult";
import { getPollDateText } from "@/lib/utils/convertTimestamp";

export const PollTable = ({ polls }: { polls: PollResult[] }) => {
  if (!polls.length) return <p>データを取得中...</p>;

  return (
    <table className="min-w-full border border-gray-300 rounded-lg text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">日時</th>
          <th className="px-4 py-2 text-left">質問</th>
          <th className="px-4 py-2 text-left">結果</th>
        </tr>
      </thead>
      <tbody>
        {polls.map((poll, i) => (
          <tr key={i} className="border-t">
            <td className="px-4 py-2">{getPollDateText(poll)}</td>
            <td className="px-4 py-2">{poll.question}</td>
            <td className="px-4 py-2">
              {Object.entries(poll.results)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 3)
                .map(([option, count], j) => (
                  <span key={j} className="mr-3">
                    {`${option}(${count})`}
                  </span>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
