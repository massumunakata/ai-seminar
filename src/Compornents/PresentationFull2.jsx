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
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);
  const section23Ref = useRef(null);
  const section24Ref = useRef(null);
  const section25Ref = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="presentation">
      {/* 2.1 データベース */}
      <Section
        title="2.1 データベース"
        keywords={[
          { keyword: "データベースの役割", description: "情報を体系的に整理し、効率的に検索・更新できる仕組み。顧客情報や売上データなどを一元管理。" },
          { keyword: "基本構造", description: "テーブルは行（レコード）と列（フィールド）で構成。顧客テーブルなら氏名・住所・購入履歴など。" },
          { keyword: "AIとの関係", description: "データベースが整っていなければAIは誤認識。整備されていれば購買履歴分析や提案が可能。" },
          { keyword: "まとめ", description: "データベースはAI活用の基盤。整備状況がAI導入の成否を左右する。" }
        ]}
        sectionRef={section21Ref}
        onNext={() => scrollTo(section22Ref)}
      />

      {/* 2.2 正規化 */}
      <Section
        title="2.2 正規化"
        keywords={[
          { keyword: "正規化とは", description: "情報の重複や不整合を防ぐために整理・分割する手法。同じ情報は一箇所に保存。" },
          { keyword: "メリット", description: "一貫性・効率性・拡張性を確保できる。" },
          { keyword: "Excelとの違い", description: "セル結合は構造を壊すため禁止。入力は厳格に、出力は自由に。" },
          { keyword: "AI活用", description: "正規化されていないと誤認識。正規化されたデータなら正確な成果物を生成可能。" },
          { keyword: "まとめ", description: "正規化はAIに正しく情報を渡すための準備。導入成功の前提条件。" }
        ]}
        sectionRef={section22Ref}
        onPrev={() => scrollTo(section21Ref)}
        onNext={() => scrollTo(section23Ref)}
      />

      {/* 2.3 Excelのセル結合 */}
      <Section
        title="2.3 Excelのセルはくっつけてはいけないのか？"
        keywords={[
          { keyword: "セル結合の落とし穴", description: "見た目は整うが構造が壊れ、AIやプログラムが正しく処理できなくなる。" },
          { keyword: "入力・計算・出力", description: "入力は厳格に構造化、計算は整った入力が前提、出力は自由に整形可能。" },
          { keyword: "データベース風の限界", description: "Excelはあくまで表計算ソフト。本物のDBのような厳密な制約はない。" },
          { keyword: "AI活用", description: "セル結合や不規則入力は誤認識の原因。1行1レコード、1列1項目が鉄則。" },
          { keyword: "まとめ", description: "Excelをデータベース風に扱うことは最低限の準備。本物のDB移行が望ましい。" }
        ]}
        sectionRef={section23Ref}
        onPrev={() => scrollTo(section22Ref)}
        onNext={() => scrollTo(section24Ref)}
      />

      {/* 2.4 SQLと停電の例 */}
      <Section
        title="2.4 SQL 銀行口座の移動中に停電したら？"
        keywords={[
          { keyword: "停電の例", description: "Excelでは処理が中途半端に止まり危険。SQL DBはトランザクション管理で安全に保証。" },
          { keyword: "SQLとは", description: "Structured Query Language。検索・追加・更新・削除を正確に行える。" },
          { keyword: "ExcelとDBの違い", description: "Excelは便利なノート、DBは堅牢な金庫。信頼性はDBが圧倒的。" },
          { keyword: "AI活用", description: "複雑業務や正確性が必要な場面では本物のDBが必須。" },
          { keyword: "まとめ", description: "SQL DBなら停電でも安全。AI導入成功にはDB基盤が不可欠。" }
        ]}
        sectionRef={section24Ref}
        onPrev={() => scrollTo(section23Ref)}
        onNext={() => scrollTo(section25Ref)}
      />

      {/* 2.5 通常業務の明文化 */}
      <Section
        title="2.5 通常業務も明文化していないとAIはわからない"
        keywords={[
          { keyword: "暗黙の了解はNG", description: "人間同士なら通じるがAIは理解できない。曖昧な情報では誤動作する。" },
          { keyword: "経理業務の例", description: "請求書フォーマットや処理手順を明文化すればAIは正しく処理可能。" },
          { keyword: "人事業務の例", description: "勤怠管理で空欄を欠勤と誤認。コード化ルールを明文化すれば誤認防止。" },
          { keyword: "明文化のメリット", description: "属人化防止・効率化・教育容易化。組織全体の生産性向上。" },
          { keyword: "まとめ", description: "業務の明文化はAI導入の前提条件。正しい情報と手順でAIは力を発揮。" }
        ]}
        sectionRef={section25Ref}
        onPrev={() => scrollTo(section24Ref)}
      />
    </div>
  );
}
