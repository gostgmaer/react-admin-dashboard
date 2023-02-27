import { Box } from "@mui/material";
import React from "react";
import { mockLineData } from "../../assets/mockData/mockData";
import Header from "../../components/Header/Header";
import LineChart from "../../components/Charts/LineChart";


const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart data={mockLineData} isDashboard={false}></LineChart>
      </Box>
    </Box>
  );
};

export default Line;
