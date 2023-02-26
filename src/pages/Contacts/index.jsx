
import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header/Header";
import { mockDataContacts } from "../../assets/mockData/mockData";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex:0.5
    },
     {
      field: "registrarId",
      headerName: "Registrar Id",
      flex: 1,
      cellClassName: "registrarId-column-cell",
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
      flex: 0.8,
      cellClassName: "age-column-cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      cellClassName: "email-column-cell",
    },

    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      cellClassName: "phone-column-cell",
    },
     {
      field: "address",
      headerName: "Address",
      flex: 1,
      cellClassName: "address-column-cell",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      cellClassName: "city-column-cell",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
      cellClassName: "zipCode-column-cell",
    }
   
  ];
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Header title={"Contacts"} subtitle={"List of Contacts"}></Header>
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
        },"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}>
        <DataGrid components={{ Toolbar: GridToolbar }} rows={mockDataContacts} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Contacts