import { Box, useTheme } from "@mui/material";
import React from "react";
import { mockGeographyData } from "../../assets/mockData/mockData";
import GeoGraphyChart from "../../components/Charts/GeoGraphyChart";
import Header from "../../components/Header/Header";

import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`0.5px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoGraphyChart data={mockGeographyData} isDashboard={false} ></GeoGraphyChart>
       
      </Box>
    </Box>
  );
};

export default Geography;
