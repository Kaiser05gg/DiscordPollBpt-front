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
          <ExternalLink href="https://discord.js.org/">
            discord.js 公式ドキュメント
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nextjs.org/docs">
            Next.js 公式ドキュメント
          </ExternalLink>
        </li>
      </ul>
    </section>
  );
}
