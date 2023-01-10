import React from "react";

const ColorfullMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfullMessage;
