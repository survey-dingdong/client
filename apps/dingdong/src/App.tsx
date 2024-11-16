import { ThemeProvider } from "@mui/material";

// import { dingdongTheme } from "dingdong-ds";
import Layout from "./components/layout/Layout.tsx";
import { dingdongTheme } from "./contants/theme.ts";

function App() {
  return (
    <ThemeProvider theme={dingdongTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
