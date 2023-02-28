// @ts-nocheck
import { MenuItem, Typography, useTheme } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

export const NavLinkComponents = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink
      style={{ color: `${colors.grey[400]}`, textDecoration: "none" }}
      to={to}>
      <MenuItem
        active={selected === title}
        style={{
          textDecoration: "none",
          color: colors.grey[100],
          backgroundColor: "transparent",
        }}
        onClick={() => setSelected(title)}
        icon={icon}>
        <Typography>{title}</Typography>
      </MenuItem>
    </NavLink>
  );
};

export const UrlSetup = ({ title, to }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink
      style={{ color: `${colors.grey[100]}`, textDecoration: "none" }}
      to={to}>
     
       
       
        <Typography>{title}</Typography>
    
    </NavLink>
  );
};
