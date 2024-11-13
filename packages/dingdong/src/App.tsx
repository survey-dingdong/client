import { ThemeProvider } from "@mui/material";
import "./App.css";
import BottomNav from "./components/layout/BottomNav.tsx";
import { dingdongTheme } from "dingdong-ds";

function App() {
  return (
    <ThemeProvider theme={dingdongTheme}>
      <BottomNav />
    </ThemeProvider>
  );
}

export default App;
