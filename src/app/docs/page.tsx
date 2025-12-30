export default function DocsPage() {
  return (
    <main className="flex justify-center">
      <article className="max-w-5xl w-full px-4">
        <h1 className="text-5xl font-bold mb-6">Documentation</h1>

        <p className="mb-10">
          このページでは、本アプリケーションの設計・使用技術・参考文献について記載します。
        </p>

        <h2 className="text-2xl font-semibold mb-4">設計</h2>
        <h3 className="text-xl font-semibold mb-3">要件定義（概要）</h3>

        <p>
          本アプリケーションは、Discord
          上で投票を行う際の作業負担を軽減することを目的として開発した。
          従来、投票を実施するたびに項目を手動で入力する必要があり、
          日常的に同じ形式の投票を行う場合に手間がかかっていた。
        </p>

        <p>
          そこで、投票内容をあらかじめテンプレート化し、
          特定の時刻に自動で投票を作成・投稿できる仕組みを実現することを要求として設定した。
          また、継続的な利用を前提とし、安定した運用と将来的な機能追加に対応できる構成を目指した。
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-3">機能要件</h3>

        <ul className="list-disc list-inside space-y-1">
          <li>Discord 上で投票を自動的に作成・投稿できること</li>
          <li>投票項目をテンプレートとして定義できること</li>
          <li>毎日決まった時刻に投票を自動で発射できること</li>
          <li>投票項目数を固定（例：5項目）して扱えること</li>
          <li>投票結果を取得し、保存・参照できること</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">非機能要件</h3>

        <ul className="list-disc list-inside space-y-1">
          <li>利用者の操作がなくても安定して動作すること</li>
          <li>定期処理が失敗した場合でも影響範囲を最小限に抑えられること</li>
          <li>Bot トークンや設定情報を安全に管理できること</li>
          <li>将来的な機能追加や仕様変更に対応しやすい構成であること</li>
          <li>テスト環境と本番環境を分けて運用できること</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">設計方針・構成</h3>

        <p>
          上記の要件を満たすため、本アプリケーションでは
          フロントエンド、バックエンド、データベース、インフラを明確に分離した構成を採用している。
          各層の責務を分けることで、保守性および拡張性の向上を図っている。
        </p>

        <p>
          フロントエンドは Next.js を用いて実装し、UI
          表示および利用者とのインタラクションを担当する。 バックエンドは
          Node.js および Express により構築し、 Discord Bot
          の操作や投票処理、定期実行ロジックを集約して管理している。
        </p>

        <p>
          定期的な投票の作成および締切処理については、 node-cron
          を利用することで自動化しており、
          人手による操作に依存しない運用を実現している。
        </p>

        <p>
          データの永続化には Firestore および MySQL を使用し、
          データの性質に応じて保存先を使い分けている。
          また、設定情報や機密情報は環境変数として管理し、
          セキュリティ面にも配慮した設計としている。
        </p>

        <p>
          このように、本アプリケーションは要件定義を出発点とし、
          それを満たすための設計方針および技術選定を行うことで、
          実運用を意識した構成となっている。
        </p>

        <h2 className="text-2xl font-semibold mb-4">使用技術</h2>

        <h3 className="text-xl font-semibold">Frontend</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              next.js
            </a>
          </li>

          <li>
            <a
              href="https://ja.react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              react
            </a>
          </li>

          <li>TypeScript</li>
          <li>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Tailwind CSS
            </a>
          </li>

          <li>
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              react-icons
            </a>
          </li>
        </ul>
        <h3 className="text-xl font-semibold">Backend</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <a
              href="https://nodejs.org/ja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              node.js
            </a>
          </li>
          <li>TypeScript</li>
          <li>
            <a
              href="https://expressjs.com/ja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              express
            </a>
          </li>
          <li>
            <a
              href="https://discord.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              discord.js
            </a>
          </li>
          <li>node-cron</li>
          <li>dotenv</li>
          <li>uuid</li>
        </ul>

        <h3 className="text-xl font-semibold">Database</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <a
              href="https://firebase.google.com/docs?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Firestore（Firebase）
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold">Infra</h3>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://www.koyeb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              koyeb
            </a>
          </li>
          <li>GitHub （ソースコード管理）</li>
          <li>環境変数による設定管理</li>
          <li>ビルド済みJavaScriptによる本番実行</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">参考文献</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              ChatGPT
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}
