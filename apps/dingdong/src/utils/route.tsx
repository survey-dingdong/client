import { RouteProps } from "react-router";
import Project from "../pages/Project";
import { DefaultHeader } from "../components/layout";
import ProjectDetail from "../pages/ProjectDetail";
import MyProject from "../pages/MyProject";
import Chat from "../pages/Chat";
import Notice from "../pages/Notice";
import MyPage from "../pages/MyPage";

type Route = RouteProps & {
  header?: React.ReactNode;
};

export const route: Record<string, Route> = {
  project: {
    path: "/",
    element: <Project />,
    header: <DefaultHeader />,
  },
  projectDetail: {
    path: "/project/:id",
    element: <ProjectDetail />,
    header: <DefaultHeader />,
  },
  myProject: {
    path: "/my-project",
    element: <MyProject />,
    header: <DefaultHeader />,
  },
  chat: {
    path: "/chat",
    element: <Chat />,
    header: <DefaultHeader />,
  },
  notice: {
    path: "/notice",
    element: <Notice />,
    header: <DefaultHeader />,
  },
  myPage: {
    path: "/my-page",
    element: <MyPage />,
    header: <DefaultHeader />,
  },
};
