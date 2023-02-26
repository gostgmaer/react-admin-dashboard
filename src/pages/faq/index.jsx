import { Expand, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { AccordianData } from "../../assets/mockData/mockData";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQs" subtitle="Frequently Asked Questions Page" />
      <Box m={"10px 0 0 0"}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore></ExpandMore>}>
            <Box
              display={"flex"}
              alignItems="center"
              gap={"100px"}
              justifyContent={"space-between"}>
              <Typography variant="h4">{AccordianData[0].title}</Typography>
              <Box
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                justifyContent={"end"}>
                <Typography variant="body1">
                  {moment(AccordianData[0].date).format(" dddd, DD MMM   YYYY")}
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {AccordianData[0].description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {AccordianData.slice(1).map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary expandIcon={<ExpandMore></ExpandMore>}>
              <Box
                display={"flex"}
                alignItems="center"
                gap={"100px"}
                justifyContent={"space-between"}>
                <Typography variant="h4">{item.title}</Typography>
                <Box
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  justifyContent={"end"}>
                  <Typography variant="body1">
                    {moment(item.date).format(" dddd, DD MMM   YYYY")}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
