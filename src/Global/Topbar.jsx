import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationImportant,
  Notifications,
  Person,
  Person2Outlined,
  Search,
  Settings,
  SettingsApplications,
} from "@mui/icons-material";

import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      className="Topbar"
      display={"flex"}
      justifyContent="space-between"
      p={2}>
      {/* search Bar */}
      <Box display={"flex"} borderRadius={3} bgcolor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={"Search"}></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <Search></Search>
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {" "}
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <Notifications/>
        </IconButton>
        <IconButton>
          <Settings/>
        </IconButton>
        <IconButton>
          <Person/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
