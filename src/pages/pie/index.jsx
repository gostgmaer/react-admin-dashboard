import { Box } from "@mui/material";
import React from "react";
import { mockPieData } from "../../assets/mockData/mockData";
import Header from "../../components/Header/Header";
import PiChart from "../../components/Charts/PiChart";


const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PiChart data={mockPieData} isDashboard={false} ></PiChart>
      </Box>
    </Box>
  );
};

export default Pie;
