export default function DocsPage() {
  return (
    <main className="flex justify-center">
      <article className="max-w-5xl w-full px-4">
        <h1 className="text-5xl font-bold mb-6">Documentation</h1>

        <p className="mb-10">
          このページでは、本アプリケーションの設計・使用技術・参考文献について記載します。
        </p>

        <h2 className="text-2xl font-semibold mb-4">設計</h2>

        <h2 className="text-2xl font-semibold mb-4">使用技術</h2>

        <h3 className="text-xl font-semibold">Frontend</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>react-icons</li>
        </ul>
        <h3 className="text-xl font-semibold">Backend</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Express</li>
          <li>discord.js</li>
          <li>node-cron</li>
          <li>dotenv</li>
          <li>uuid</li>
        </ul>

        <h3 className="text-xl font-semibold">Database</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Firestore（Firebase）</li>
        </ul>

        <h3 className="text-xl font-semibold">Infra</h3>
        <ul className="list-disc list-inside">
          <li>koyeb（クラウド環境でのアプリケーション運用）</li>
          <li>GitHub （ソースコード管理）</li>
          <li>環境変数による設定管理</li>
          <li>ビルド済みJavaScriptによる本番実行</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">参考文献</h2>
      </article>
    </main>
  );
}
