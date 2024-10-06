import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import "@stackflow/plugin-basic-ui/index.css";
import ProjectList from "../component/project-list/ProjectList";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        ProjectList: "/project/list",
        ProjectDetail: "/project/:id",
      },
      fallbackActivity: () => "ProjectList",
    }),
  ],
  activities: { ProjectList },
  initialActivity: () => "ProjectList",
});
