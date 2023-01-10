import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  //usestateで定義した変数は値が変化すると再レンダリングされる、
  //setNumはnumを書き換えるための関数として使用
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickVisible = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //[]にすると初回のレンダリングだけで実行したい風にできる,
  //[num]にするとnumの値が変わったら通る処理にできる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickVisible}>表示/非表示</button>
      <p>{num}</p>
      {faceShowFlag && <p>(ﾟ∀ﾟ)</p>}
    </>
  );
};

export default App;
