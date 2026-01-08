import Image from "next/image"; //お遊び

export default function GraphPage() {
  return (
    // <main className="min-h-screen p-6">
    //   <h1 className="text-3xl font-bold mb-6">Graph</h1>
    //   <p className="text-white/80">ここにグラフを表示します。</p>
    // </main>
    <div className="relative w-screen h-screen bg-black">
      <Image
        src="/FdQYOb7VQAEGEDo.jpg"
        alt="見せられないよ"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
