import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header/Header";
import { mockDataTeam } from "../../data/mockData/mockData";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      cellClassName: "age-column-cell",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      cellClassName: "email-column-cell",
    },

    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      cellClassName: "phone-column-cell",
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      cellClassName: "access-column-cell",
      renderCell: ({ row: { access } }) => {
        return (

          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            bgcolor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>


        );
      },

    },
  ];
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Header title={"Teams"} subtitle={"Managing Team Members"}></Header>
      </Box>
      <Box m={'40px 0 0 0'} height='75vh' sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}>
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
