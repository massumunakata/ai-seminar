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
  // 各セクションの参照を作成
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="presentation">
      {/* 1. AIとは */}
      <Section
        title="1. AIとは"
        keywords={[
          {
            keyword: "AIの定義",
            description:
              "人間の知的な判断や行動を模倣し、膨大なデータをもとに認識・推論を行うコンピュータシステム群。"
          }
        ]}
        sectionRef={section1Ref}
        onNext={() => scrollTo(section2Ref)}
      />

      {/* 1.1 現在耳にするAI */}
      <Section
        title="1.1 現在耳にするAI"
        keywords={[
          { keyword: "ChatGPT (OpenAI)", description: "汎用的な対話、文章作成、要約、翻訳、コード生成。AIブームの火付け役。" },
          { keyword: "Claude (Anthropic)", description: "長文処理、安全性重視、研究分析に強い。企業導入の安心感を高めた。" },
          { keyword: "Gemini (Google)", description: "Google検索連携、マルチモーダル対応。情報探索の新しい形を提示。" },
          { keyword: "Copilot (Microsoft)", description: "Office連携、ビジネス文書やデータ分析に最適。企業利用のハードルを下げた。" }
        ]}
        sectionRef={section2Ref}
        onPrev={() => scrollTo(section1Ref)}
        onNext={() => scrollTo(section3Ref)}
      />

      {/* 1.2 会話型AIと作業型AI */}
      <Section
        title="1.2 会話型AIと作業型AI"
        keywords={[
          { keyword: "会話型AI", description: "ChatGPTやGemini。質問に答え、文章生成や情報整理を行う『知識獲得型』。" },
          { keyword: "作業型AI", description: "CopilotやClaude。文書やファイルを生成し業務を肩代わりする『作業支援型』。" },
          { keyword: "補完関係", description: "会話型で構成を考え、作業型で成果物を作成。調査から成果物作成まで一気通貫。" },
          { keyword: "業務フローの違い", description: "会話型はテキスト出力をダウンロード。作業型は業務システムに統合され直接活用可能。" },
          { keyword: "パラダイムシフト", description: "AIが『相談相手』から『業務の主体』へ進化。人間は戦略的業務に集中可能。" }
        ]}
        sectionRef={section3Ref}
        onPrev={() => scrollTo(section2Ref)}
        onNext={() => scrollTo(section4Ref)}
      />

      {/* 1.3 ファイル自動生成によるパラダイム変化 */}
      <Section
        title="1.3 ファイル自動生成によるパラダイム変化"
        keywords={[
          { keyword: "自動生成の登場", description: "Word文書、Excel表、PowerPointスライドなどをAIが瞬時に生成。" },
          { keyword: "新しい業務フロー", description: "人間が指示 → AIが入力から出力まで処理。PCが作業者となる時代。" },
          { keyword: "営業報告書の例", description: "商談内容を指示するだけでWord文書が完成。Excelから自動抽出しグラフも生成。" },
          { keyword: "研究開発の例", description: "論文要約や比較表を自動生成。研究者は分析や発想に集中可能。" },
          { keyword: "注意点", description: "入力情報の質が出力精度を左右。情報整理が不可欠。" }
        ]}
        sectionRef={section4Ref}
        onPrev={() => scrollTo(section3Ref)}
        onNext={() => scrollTo(section5Ref)}
      />

      {/* 1.4 作業型AIを取り入れるのは「今でしょ??」 */}
      <Section
        title="1.4 作業型AIを取り入れるのは『今でしょ??』"
        keywords={[
          { keyword: "導入の意義", description: "WordやExcel、PowerPointに統合され、報告書や資料を自動生成。" },
          { keyword: "課題", description: "入力情報が曖昧だと成果物が不安定。情報整理が不可欠。" },
          { keyword: "情報整理の重要性", description: "データベース化、業務フローの明文化、セキュリティ確保が前提。" },
          { keyword: "導入効果", description: "報告書作成、データ分析、プレゼン資料の自動化。人間は戦略的業務に集中可能。" },
          { keyword: "結論", description: "導入は『今』が正しい。ただし準備を整えた上で導入することが重要。" }
        ]}
        sectionRef={section5Ref}
        onPrev={() => scrollTo(section4Ref)}
      />
    </div>
  );
}
