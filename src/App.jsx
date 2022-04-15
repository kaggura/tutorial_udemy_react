/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
//関数を使ってコンポーネント表現
const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //useEffectでnumが変わった時だけif以降が実行されるようになる。
  useEffect(() => {
    //numが3 の倍数の時にfaceShowFlagをTrueにする
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    //↓jsx記法は一つのタグで囲わないとError
    //<React.Fragment>でも<>でもOK
    //htmlの中で扱うタグやスタイルは全て単語のつながり->キャメルケースで記述する
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      <button onClick={onClickCountUp}>Countup!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^ - ^</p>}
    </>
  );
};
export default App;
