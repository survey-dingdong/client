import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../js/stackflow";

const MyActivity: ActivityComponentType = () => {
  const { push, replace } = useFlow();

  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>My Activity</div>
      <button onClick={() => replace("Test2", {}, { animate: true })}>
        Test 2
      </button>
    </AppScreen>
  );
};

export default MyActivity;
