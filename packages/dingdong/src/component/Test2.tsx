import { AppScreen } from "@stackflow/plugin-basic-ui";
import React from "react";

const Test2 = () => {
  return (
    <AppScreen appBar={{ title: "Test2" }}>
      <div style={{ backgroundColor: "blue", width: "100vw", height: "100vh" }}>
        This is Test 2
      </div>
    </AppScreen>
  );
};

export default Test2;
