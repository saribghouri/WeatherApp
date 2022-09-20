import React from "react";
import { useContext } from "react";
import { ParentContext } from "./ParentConext";

function Parent5() {
  const ctx = useContext(ParentContext);
  return (
    <div>
      <h5>Parent5 ---- {ctx.title}</h5>
    </div>
  );
}

export default Parent5;
