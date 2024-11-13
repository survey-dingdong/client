import { ThemeProvider } from "@mui/material";
import "./App.css";

import { dingdongTheme } from "dingdong-ds";
import Layout from "./components/layout/Layout.tsx";

function App() {
  return (
    <ThemeProvider theme={dingdongTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
