import React from "react";

export default function Button({ handleClick, children }) {
  return <button onClick={(e) => handleClick(e)}>{children}</button>;
}
