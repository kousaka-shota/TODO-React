import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue" message="お元気ですか" />
      <ColorfullMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
