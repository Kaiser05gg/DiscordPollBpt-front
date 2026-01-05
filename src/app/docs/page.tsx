import { DesignSection } from "./_components/DesignSection";
import { TechStackSection } from "./_components/TechStackSection";
import { ReferencesSection } from "./_components/ReferencesSection";

export default function DocsPage() {
  return (
    <main className="flex justify-center">
      <article className="max-w-5xl w-full px-4">
        <h1 className="text-5xl font-bold mb-6">Documentation</h1>

        <p className="mb-10">
          このページでは、本アプリケーションの設計・使用技術・参考文献について記載します。
        </p>

        <DesignSection />
        <TechStackSection />
        <ReferencesSection />
      </article>
    </main>
  );
}
