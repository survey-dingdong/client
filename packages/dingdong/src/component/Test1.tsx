import React from "react";
import { Stack, useFlow } from "../js/stackflow.ts";

const Test1 = () => {
  const { push } = useFlow();

  return (
    <div style={{ backgroundColor: "orange", width: "100vw", height: "100vh" }}>
      <Stack />
      This is Test 1<button onClick={() => push("Test2", {})}>Test 2</button>
    </div>
  );
};

export default Test1;
