import { ThemeProvider } from "@mui/material";

import { dingdongTheme } from "dingdong-ds";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout.tsx";
import Project from "./pages/Project.tsx";
import MyPage from "./pages/MyPage.tsx";
import Chat from "./pages/Chat.tsx";
import Notice from "./pages/Notice.tsx";
import MyProject from "./pages/MyProject.tsx";

function App() {
  return (
    <ThemeProvider theme={dingdongTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Project />} index />
            <Route path="project" element={<Project />} />
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
