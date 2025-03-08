import { ThemeProvider } from "@mui/material";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout.tsx";
import { createDingdongTheme } from "@dingdong/design-system";
import {
  ProjectDetail,
  Chat,
  MyPage,
  Notice,
  MyProject,
  Project,
} from "./pages";

function App() {
  // TODO: 다크, 라이트 테마 적용 방식 변경
  const dingdongTheme = createDingdongTheme();

  return (
    <ThemeProvider theme={dingdongTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Project />} index />
            <Route path="project" element={<Project />} />
            <Route path="project/:id" element={<ProjectDetail />} />
            <Route path="my-project" element={<MyProject />} />
            <Route path="chat" element={<Chat />} />
            <Route path="notice" element={<Notice />} />
            <Route path="my-page" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
