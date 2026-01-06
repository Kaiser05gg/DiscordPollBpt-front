import { ExternalLink } from "@/app/_components/ExternalLink";

export function ReferencesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">参考文献</h2>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <ExternalLink href="https://chat.openai.com/">ChatGPT</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://ja.react.dev/">React</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://tailwindcss.com/">
            Tailwind CSS
          </ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://react-icons.github.io/react-icons/">
            react-icons
          </ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://nodejs.org/ja">Node.js</ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://discord.js.org/">Express</ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://discord.js.org/">discord.js</ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://nodecron.com/">node-cron</ExternalLink>
          公式ドキュメント
        </li>
        <li>
          <ExternalLink href="https://www.dotenv.org/">dotenv</ExternalLink>
          公式ドキュメント
        </li>
      </ul>
    </section>
  );
}
