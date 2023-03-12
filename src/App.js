import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SidebarComp from "./Global/Sidebar";
import Topbar from "./Global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { useGlobalAuthContext } from "./Utils/Context/AuthContent";
import AppRoute, { AppLoginRoute } from "./Utils/Routes/Route";

function App() {
  const [theme, colorMode] = useMode();
  const { user,isLogin } = useGlobalAuthContext();



  return (
    <Fragment>
      {(user || isLogin) ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <SidebarComp></SidebarComp>
              <main
                style={{ position: "sticky", height: "initial" }}
                className="content">
                <div>
                  <Topbar></Topbar>

                  <AppRoute></AppRoute>
                </div>
              </main>{" "}
            </div>{" "}
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : (
        <div className="app">
        <main
          style={{ position: "sticky", height: "100%" }}
          className="content">
          <AppLoginRoute></AppLoginRoute>
        </main></div>
      )}
    </Fragment>
  );
}

export default App;
