//jsx記法
import React from "react";
//htmlへのコンポーネント反映
import ReactDom from "react-dom";
//Appファイルで画面のレンダリング部分を作成してexport-importすることで反映させる
import App from "./App";

//関数を画面に反映する
//Appをコンポーネントとしてレンダリング
//react開発の基盤部分
ReactDom.render(<App />, document.getElementById("root"));
