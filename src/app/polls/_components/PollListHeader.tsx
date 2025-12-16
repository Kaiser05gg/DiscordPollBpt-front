export default function PollListHeader() {
  return (
    <div className="mb-6 border-b pb-4">
      <h1 className="text-3xl font-bold text-white">投票履歴一覧</h1>
      <p className="text-gray-300 mt-1">
        過去に作成されたアンケートの結果を確認できます。
      </p>

      {/* 将来的に並び替えやフィルタリングを入れるならここ */}
      {/* 
      <div className="mt-3 flex gap-3">
        <button className="px-3 py-1 rounded bg-gray-700 text-white">最新順</button>
        <button className="px-3 py-1 rounded bg-gray-700 text-white">古い順</button>
      </div>
      */}
    </div>
  );
}
