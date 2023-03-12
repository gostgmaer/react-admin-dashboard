import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutline,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutline,
  PersonOutline,
  PieChartOutline,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";
import { tokens } from "../theme";
import { useGlobalAuthContext } from "../Utils/Context/AuthContent";
const SidebarComp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
    const { user,setUser } = useGlobalAuthContext();


  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      // <MenuItem
      // href={to}
      //   active={selected === title}
      //   style={{
      //     textDecoration: "none",
      //     color: colors.grey[100],
      //     backgroundColor: "transparent",
      //   }}
      //   onClick={() => setSelected(title)}
      //   icon={icon}>
      //   <Typography>{title}</Typography>

      // </MenuItem>

      <NavLink
        style={{ color: `${colors.grey[400]}`, textDecoration: "none" }}
        to={to}>
        <MenuItem
        href={to}
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

  const collepsEvent = () => {
    collapseSidebar();
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Box 
    
      className="red"
      sx={{
        "& .ps-sidebar-container": {
          bgcolor: `${colors.primary[400]} !important`,
        },
        "& .": {
          bgcolor: `${colors.primary[400]} !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 35px",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          backgroundColor: `transparent !important`,
        },
        "& .ps-active": {
          color: `#6870fa !important`,
        }
        , "& .active": {
          color: `#6870fa !important`,
        }
      }}>
      {" "}
      <Sidebar style={{height:'100vh',position:'sticky',top:'0'}}>
        <Menu >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={collepsEvent}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0",
              color: colors.grey[100],
            }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="60px"
                  height="60px"
                  src={user?.picture?user?.picture:'https://source.unsplash.com/random'}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}>
                {user?.name?user?.name:'Kishor Sarkar'}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calender"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar-chart"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie-chart"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line-chart"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography-chart"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComp;
