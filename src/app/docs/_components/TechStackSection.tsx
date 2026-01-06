import { ExternalLink } from "@/app/_components/ExternalLink";

export function TechStackSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">使用技術</h2>

      <h3 className="text-xl font-semibold mb-2">Frontend</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>
          <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://ja.react.dev/">React</ExternalLink>
        </li>
        <li>TypeScript</li>
        <li>
          <ExternalLink href="https://tailwindcss.com/">
            Tailwind CSS
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://react-icons.github.io/react-icons/">
            react-icons
          </ExternalLink>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Backend</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>
          <ExternalLink href="https://nodejs.org/ja">Node.js</ExternalLink>
        </li>
        <li>TypeScript</li>
        <li>
          <ExternalLink href="https://discord.js.org/">Express</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://discord.js.org/">discord.js</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nodecron.com/">node-cron</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.dotenv.org/">dotenv</ExternalLink>
        </li>
        <li>uuid</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Database</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>
          <ExternalLink href="https://firebase.google.com/docs?hl=ja">
            Firestore（Firebase）
          </ExternalLink>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <ExternalLink href="https://www.koyeb.com/">Koyeb</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/Kaiser05gg">
            GitHub
          </ExternalLink>
          （ソースコード管理）
        </li>
        <li>環境変数による設定管理</li>
        <li>ビルド済み JavaScript による本番実行</li>
      </ul>
    </section>
  );
}
