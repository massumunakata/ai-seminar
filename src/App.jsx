import React from "react";
import "./App.css"; // スタイル適用
import PresentationFull from "./Compornents/PresentationFull"; // コンポーネント読み込み

function App() {
  return (
    <div className="App">
      <h1>AI Seminar</h1>
      {/* PresentationFull コンポーネントを表示 */}
      <PresentationFull />
    </div>
  );
}

export default App;
