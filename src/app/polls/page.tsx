import PollListHeader from "./_components/PollListHeader";
import { PollTable } from "@/features/poll/components/PollTable";
import { fetchPollResults } from "@/features/poll/services/fetchPollResults";

export default async function Page() {
  const polls = await fetchPollResults();

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <PollListHeader />
      <PollTable polls={polls} />
    </div>
  );
}
