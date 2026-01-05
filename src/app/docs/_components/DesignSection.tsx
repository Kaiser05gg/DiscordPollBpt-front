export function DesignSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">設計</h2>

      <h3 className="text-xl font-semibold mb-3">要件定義（概要）</h3>
      <p className="mb-4">
        本アプリケーションは、Discord
        上で投票を行う際の作業負担を軽減することを目的として開発した。
        従来、投票を実施するたびに項目を手動で入力する必要があり、
        日常的に同じ形式の投票を行う場合に手間がかかっていた。
      </p>

      <p className="mb-6">
        そこで、投票内容をあらかじめテンプレート化し、
        特定の時刻に自動で投票を作成・投稿できる仕組みを実現することを要求として設定した。
        また、継続的な利用を前提とし、安定した運用と将来的な機能追加に対応できる構成を目指した。
      </p>

      <h3 className="text-xl font-semibold mb-3">機能要件</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Discord 上で投票を自動的に作成・投稿できること</li>
        <li>投票項目をテンプレートとして定義できること</li>
        <li>毎日決まった時刻に投票を自動で発射できること</li>
        <li>投票項目数を固定（例：5項目）して扱えること</li>
        <li>投票結果を取得し、保存・参照できること</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">非機能要件</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>利用者の操作がなくても安定して動作すること</li>
        <li>定期処理が失敗した場合でも影響範囲を最小限に抑えられること</li>
        <li>Bot トークンや設定情報を安全に管理できること</li>
        <li>将来的な機能追加や仕様変更に対応しやすい構成であること</li>
        <li>テスト環境と本番環境を分けて運用できること</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">設計方針・構成</h3>
      <p className="mb-4">
        上記の要件を満たすため、本アプリケーションでは
        フロントエンド、バックエンド、データベース、インフラを明確に分離した構成を採用している。
        各層の責務を分けることで、保守性および拡張性の向上を図っている。
      </p>

      <p>
        定期的な投票の作成および締切処理については自動化を行い、
        人手による操作に依存しない安定した運用を実現している。
        このように、本アプリケーションは要件定義を出発点とし、
        それを満たすための設計方針および技術選定を行っている。
      </p>
    </section>
  );
}
