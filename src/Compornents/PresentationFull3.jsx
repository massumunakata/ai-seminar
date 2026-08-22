import React, { useRef } from "react";
import "../assets/css/PresentationFull.css";
import "../assets/css/NaviButtons.css";

function KeywordCard({ keyword, description }) {
  return (
    <div className="card">
      <h3>{keyword}</h3>
      <p>{description}</p>
    </div>
  );
}

function Section({ title, keywords, sectionRef, onPrev, onNext }) {
  return (
    <div className="section" ref={sectionRef}>
      <h2>{title}</h2>
      <div className="card-grid">
        {keywords.map((item, index) => (
          <KeywordCard
            key={index}
            keyword={item.keyword}
            description={item.description}
          />
        ))}
      </div>
      <div className="nav-buttons">
        {onPrev && (
          <button className="nav-btn prev-btn" onClick={onPrev}>
            ← 前のセクション
          </button>
        )}
        {onNext && (
          <button className="nav-btn next-btn" onClick={onNext}>
            次のセクション →
          </button>
        )}
      </div>
    </div>
  );
}

export default function PresentationFull() {
  const section3Ref = useRef(null);

  return (
    <div className="presentation">
      {/* 3. セキュリティとは */}
      <Section
        title="3. セキュリティとは"
        keywords={[
          {
            keyword: "セキュリティの基本的な考え方",
            description:
              "情報を守るための仕組みやルール。顧客情報や取引データなどを安全に扱うことは企業の信頼維持に不可欠。"
          },
          {
            keyword: "API保守の重要性",
            description:
              "AIエージェントはAPIを通じてシステムと連携。APIが安全に保守されていれば情報も守られる。メールサーバーと同等の安心感。"
          },
          {
            keyword: "セキュリティの三つの柱",
            description:
              "機密性：許可された人だけが閲覧可能。完全性：改ざんされず正しい状態。可用性：必要なときに利用可能。"
          },
          {
            keyword: "AIエージェント利用の安心感",
            description:
              "API保守により不正アクセス防止。メールと同等の仕組み。セキュリティ原則を満たしているため安全に利用可能。"
          },
          {
            keyword: "参加者へのメッセージ",
            description:
              "セキュリティを理由に導入をためらう必要はない。むしろAI導入でセキュリティ強化も可能。不審メール検知や暗号化など。"
          },
          {
            keyword: "まとめ",
            description:
              "セキュリティは情報を守る仕組み。API保守ができればAIは安心して導入可能。危険ではなく正しく準備すれば安全な技術。"
          }
        ]}
          />
      {/* 4. 作業型AIでできること〜具体例orデモ */}
       <Section
        title="4. 作業型AIでできること〜具体例orデモ"
        keywords={[
          {
            keyword: "営業部門：報告書作成効率化",
            description:
              "Copilotを導入すると、商談内容を指示するだけで報告書を自動生成。過去履歴や顧客DBと連携し、提案や次回アクションも補足。作成時間は10分以下に短縮。"
          },
          {
            keyword: "人事部門：社内アンケート分析",
            description:
              "ChatGPTを活用すると、自由記述を瞬時に分類し、ポジティブ意見・改善要望・具体的提案に整理。頻出キーワード抽出も可能で、数日かかる分析が数時間で完了。"
          },
          {
            keyword: "経理部門：請求書処理自動化",
            description:
              "作業型AIを導入すると、請求書をスキャンするだけで内容を読み取りシステム入力。過去取引と照合し不正検出も可能。処理時間短縮と精度向上を実現。"
          },
          {
            keyword: "駐在員：本部報告効率化",
            description:
              "AIエージェントを導入すると、駐在員が『今週の活動をまとめて』と指示するだけで報告書を生成。現地DBと連携し必要情報を抽出。本部も迅速に状況把握可能。"
          },
          {
            keyword: "研究開発部門：論文調査",
            description:
              "Claudeを活用すると、長文論文を瞬時に要約し関連部分を抽出。複数論文を比較し共通点や相違点を整理。情報収集効率が飛躍的に向上。"
          },
          {
            keyword: "まとめ",
            description:
              "AIは便利なツールではなく業務変革の存在。営業、人事、経理、駐在員、研究開発など幅広く活用可能。人間は戦略的業務に集中できるのが最大の価値。"
          }
        ]}
        sectionRef={section4Ref}
      />
      {/* 5. 当サービスで変わる事 */}
      <Section
        title="5. 当サービスで変わる事"
        keywords={[
          {
            keyword: "単純作業の自動化",
            description:
              "AIエージェントが定型業務を肩代わりし、人間は戦略的・創造的な業務に集中可能。報告書作成、データ整理、定型メール返信などを自動化。"
          },
          {
            keyword: "業務の明文化と属人化防止",
            description:
              "業務手順を言語化・ルール化することで、誰でも同じ基準で遂行可能。AIも人間も同じルールに従い、透明性と再現性を確保。"
          },
          {
            keyword: "組織競争力の向上",
            description:
              "効率化にとどまらず、知識共有と業務標準化が進み、組織全体の競争力を高める。AIは人間の仕事を奪う存在ではなく、解放する存在。"
          },
          {
            keyword: "参加者へのメッセージ",
            description:
              "効率化の先に何を見据えるかが重要。ワークライフバランス改善、支社改革、売上拡大、駐在期間の成功など、AI導入で雑務削減と属人化解消を実現。"
          },
          {
            keyword: "まとめ",
            description:
              "AI導入は単純作業からの解放と業務明文化による属人化防止をもたらす。効率化の先を考え、AIを最大限活用して未来を切り拓こう。"
          }
        ]}
        sectionRef={section5Ref}
      />
    </div>
  );
}
