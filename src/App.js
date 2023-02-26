import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import SidebarComp from "./Global/Sidebar";
import Topbar from "./Global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import AppRoute from "./Utils/Routes/Route";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComp></SidebarComp>
          <main className="content">
            <Topbar></Topbar>

            <AppRoute></AppRoute>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
