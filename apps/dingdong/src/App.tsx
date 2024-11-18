import { ThemeProvider } from "@mui/material";

import { dingdongTheme } from "dingdong-ds";
import Layout from "./components/layout/Layout.tsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={dingdongTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
