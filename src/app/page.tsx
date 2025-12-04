import Link from "next/link";
import { Icons } from "@/features/poll/components/Icons";

export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-8">📊 Discord Poll Bot </h1>

      <div className="flex flex-row gap-4 items-center justify-center">
        <Link
          href="/polls"
          className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Icons.table size={100} />
          投票履歴を見る
        </Link>

        <Link
          href="/graph"
          className="px-5 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Icons.graph size={100} />
          グラフを見る
        </Link>
      </div>
    </main>
  );
}
