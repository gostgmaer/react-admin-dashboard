import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { Fragment } from "react";
import SidebarComp from "./Global/Sidebar";
import Topbar from "./Global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { useGlobalAuthContext } from "./Utils/Context/AuthContent";
import AppRoute, { AppLoginRoute } from "./Utils/Routes/Route";

function App() {
  const [theme, colorMode] = useMode();
  const { logOuthandler, isLogin, LoginEvent } = useGlobalAuthContext();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          {isLogin ? (
            <Fragment>
              <SidebarComp></SidebarComp>
              <main
                style={{ position: "sticky", height: "initial" }}
                className="content">
                <div>
                  <Topbar></Topbar>

                  <AppRoute></AppRoute>
                </div>
              </main>
            </Fragment>
          ) : (
            <main
              style={{ position: "sticky", height: "initial" }}
              className="content">
              <AppLoginRoute></AppLoginRoute>
            </main>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
