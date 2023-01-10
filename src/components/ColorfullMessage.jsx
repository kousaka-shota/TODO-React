import React from "react";

const ColorfullMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color, //変数名とプロパティ名が同じであれば、コロンで区切らなくてよい
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfullMessage;
