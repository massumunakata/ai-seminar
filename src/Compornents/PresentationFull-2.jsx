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
      {/* 2.1 作業型AIって何？ */}
<Section
  title="2.1 作業型AIって何？"
  keywords={[
    { keyword: "会話型AIとの違い", description: "会話型AIは知識提供のパートナー。作業型AIは業務を肩代わりし、成果物を生成する存在。" },
    { keyword: "具体例", description: "営業報告書の自動生成、請求書処理、人事勤怠レポート、研究論文要約など。成果物を直接生成可能。" },
    { keyword: "特徴", description: "成果物の自動生成、業務の自動化、システム連携。業務の主体として機能。" },
    { keyword: "パラダイムシフト", description: "人間が指示 → AIが入力から出力まで処理。効率化にとどまらず働き方を根本的に変える。" },
    { keyword: "注意点", description: "入力情報の質が出力精度を左右。情報整理と明文化が不可欠。" },
    { keyword: "まとめ", description: "作業型AIは業務を肩代わりするAI。成果物生成と業務自動化により組織の働き方を変革。" }
  ]}
  sectionRef={section21Ref}
  onNext={() => scrollTo(section22Ref)}
/>

{/* 2.2 代表的な作業型AI */}
<Section
  title="2.2 代表的な作業型AI"
  keywords={[
    { keyword: "Microsoft Copilot", description: "Office製品に統合。文書作成、データ分析、プレゼン資料作成を自動化。営業報告や経理分析に直結。" },
    { keyword: "Claude", description: "Anthropic社のAI。長文処理に強く、契約書精査や論文分析に適する。安全性重視設計。" },
    { keyword: "Gemini", description: "Google発表。検索連携とマルチモーダル対応。テキスト・画像・動画を横断的に処理可能。" },
    { keyword: "ChatGPT＋拡張機能", description: "プラグイン連携で作業型AIとして活用可能。旅行予約やデータ分析などを自動化。" },
    { keyword: "まとめ", description: "各サービスは強みが異なるが共通点は単純作業の肩代わりと成果物自動生成。業務に応じた選択が重要。" }
  ]}
  sectionRef={section22Ref}
  onPrev={() => scrollTo(section21Ref)}
  onNext={() => scrollTo(section23Ref)}
/>

{/* 2.3 ClaudCodeとOpenClawの比較 */}
<Section
  title="2.3 ClaudCodeとOpenClawの比較"
  keywords={[
    { keyword: "ClaudCode", description: "コード生成型AI。自然言語で指示するとコードを生成・修正。開発者のアシスタントとして効率化。" },
    { keyword: "OpenClaw", description: "エージェント型AI。TUIで操作し、業務全体を管理・実行。柔軟性と拡張性に強み。" },
    { keyword: "比較", description: "ClaudCodeはコード生成特化。OpenClawは業務全体の司令塔。目的に応じて選択が必要。" },
    { keyword: "導入ポイント", description: "開発中心ならClaudCode、業務効率化ならOpenClaw。目的に応じた導入が成功の鍵。" },
    { keyword: "まとめ", description: "両者は役割が異なる。ClaudCodeは開発支援、OpenClawは業務管理。違いを理解して選択することが重要。" }
  ]}
  sectionRef={section23Ref}
  onPrev={() => scrollTo(section22Ref)}
  onNext={() => scrollTo(section24Ref)}
/>

{/* 2.4 AIモデルとAIエージェントとチャット型AIの違い */}
<Section
  title="2.4 AIモデルとAIエージェントとチャット型AIの違い"
  keywords={[
    { keyword: "AIモデル", description: "機械学習で訓練された処理エンジン。入力を受けて出力を返す。GPTや画像認識モデルなど。" },
    { keyword: "チャット型AI", description: "AIモデルを会話形式で利用。ChatGPTやGemini。知識提供型のパートナー。" },
    { keyword: "AIエージェント", description: "AIモデルを利用し業務全体を管理・遂行。司令塔として複数タスクを連携。" },
    { keyword: "誤解の解消", description: "AIエージェントはモデルを包括する存在ではなく、必要に応じて呼び出して使う仕組み。" },
    { keyword: "作業フロー", description: "ユーザー指示 → エージェント解釈 → モデル呼び出し → 成果物生成 → ユーザー確認。" },
    { keyword: "まとめ", description: "AIモデル＝エンジン、チャット型AI＝知識提供、AIエージェント＝業務司令塔。違いを理解することが導入の第一歩。" }
  ]}
  sectionRef={section24Ref}
  onPrev={() => scrollTo(section23Ref)}
/>

{/* 3.1 大丈夫!! メールサーバーと同等 */}
<Section
  title="3.1 大丈夫!! メールサーバーと同等"
  keywords={[
    { keyword: "メールサーバーは安心", description: "アクセス制御・暗号化・ログ管理・定期更新により安全性を確保。重要情報を安心してやり取りできる。" },
    { keyword: "AIエージェントも同じ仕組み", description: "業務遂行時は必ずAPIを通じて連携。APIが正しく保守されていればメールと同等の安心感。" },
    { keyword: "誤解しやすいポイント", description: "『AIは新しい技術だから危険』という誤解。実際は従来のITシステムと同じ考え方で安全に利用可能。" },
    { keyword: "安心の条件", description: "API保守・業務の明文化・セキュリティ原則（機密性・完全性・可用性）の遵守。" },
    { keyword: "まとめ", description: "AIは危険ではなく、正しく準備すれば安心して導入できる技術。メールと同じように利用可能。" }
  ]}
  sectionRef={section31Ref}
  onNext={() => scrollTo(section32Ref)}
/>

{/* 3.2 APIは死守 — APIは何か？なぜ死守か？ */}
<Section
  title="3.2 APIは死守 — APIは何か？なぜ死守か？"
  keywords={[
    { keyword: "APIとは", description: "Application Programming Interface。システム同士をつなぐ窓口。情報の出入り口を安全に制御。" },
    { keyword: "情報漏洩防止", description: "APIが脆弱だと外部から不正アクセスされる危険。厳格管理で情報を守る。" },
    { keyword: "不正利用防止", description: "保守されていないAPIは不正リクエストの温床。死守することで不正利用を防止。" },
    { keyword: "業務信頼性確保", description: "APIが安定していれば業務は止まらず正確に遂行可能。信頼性の基盤となる。" },
    { keyword: "保守方法", description: "認証と認可・暗号化・ログ管理・定期更新。これらを徹底すれば安全性を確保。" },
    { keyword: "参加者へのメッセージ", description: "セキュリティを理由に導入をためらう必要はない。むしろAI導入でセキュリティ強化も可能。" },
    { keyword: "まとめ", description: "APIは情報の出入り口。死守すべき対象。正しく保守すればAIは安心して利用可能。" }
  ]}
  sectionRef={section32Ref}
  onPrev={() => scrollTo(section31Ref)}
/>
{/* 4.1 トークンとは何か？ */}
<Section
  title="4.1 トークンとは何か？"
  keywords={[
    { keyword: "トークンとは", description: "AIモデルが文章を処理する際の最小単位。文章を細かく分解して理解するための部品。" },
    { keyword: "課金基準", description: "処理量を測るためにトークン数を利用。入力＋出力の合計トークン数に基づいて費用が決まる。" },
    { keyword: "数え方", description: "入力トークン＝渡す文章の長さ。出力トークン＝返す文章の長さ。合計トークンで課金。" },
    { keyword: "具体例", description: "『こんにちは』→約2トークン、『AIは未来を変える』→約6トークン、500文字→約250〜300トークン。" },
    { keyword: "コスト管理", description: "短く入力・出力制御・長文処理はモデル選択。トークン理解で費用最適化が可能。" },
    { keyword: "参加者へのメッセージ", description: "トークンは難しくない。利用量を測るメーター。理解すれば安心して導入できる。" },
    { keyword: "まとめ", description: "トークン＝AI処理単位。課金基準であり、理解すればコスト管理が容易になる。" }
  ]}
  sectionRef={section41Ref}
  onNext={() => scrollTo(section42Ref)}
/>

{/* 4.2 トークンをなるべく使用しない設計 */}
<Section
  title="4.2 トークンをなるべく使用しない設計"
  keywords={[
    { keyword: "仕組み再確認", description: "入力＋出力トークンの合計で課金。長文入力や長文出力で費用増加。" },
    { keyword: "設計思想①", description: "入力を簡潔に。不要な説明を省き、短い指示で済ませる。" },
    { keyword: "設計思想②", description: "出力を制御。要約・箇条書き・文字数制限でトークン削減。" },
    { keyword: "設計思想③", description: "業務フローを工夫。段階的処理やテンプレート利用で効率化。" },
    { keyword: "具体的工夫例", description: "短いプロンプト設計、出力制限、段階的処理、テンプレート化、DB連携。" },
    { keyword: "削減効果", description: "コスト削減・効率化・精度向上。トークン削減はAI活用の質を高める。" },
    { keyword: "参加者へのメッセージ", description: "トークン削減は難しくない。入力簡潔・出力制御・業務工夫の3点で十分。" },
    { keyword: "まとめ", description: "トークン削減設計はAIを効率的に使うための基本。コスト抑制と安心導入につながる。" }
  ]}
  sectionRef={section42Ref}
  onPrev={() => scrollTo(section41Ref)}
/>


    </div>
  );
}
