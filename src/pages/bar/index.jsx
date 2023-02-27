import { Box } from "@mui/material";
import React from "react";
import { mockBarData } from "../../assets/mockData/mockData";
import Barchart from "../../components/Barchart";
import Header from "../../components/Header/Header";


const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
       <Barchart data = {mockBarData} isDashboard={false}></Barchart>
      </Box>
    </Box>
  );
};

export default Bar;
