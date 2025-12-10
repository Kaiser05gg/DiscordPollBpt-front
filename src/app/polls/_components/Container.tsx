import Client from "./Client";

export default function PollListContainer() {
  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold mb-6">投票履歴一覧</h2>
      <Client />
    </main>
  );
}
