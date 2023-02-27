import React from "react";
import { Route, Routes } from "react-router-dom";
import Bar from "../../pages/bar";
import Calendar from "../../pages/calendar/calendar";
import Contacts from "../../pages/Contacts";
import Dashbaord from "../../pages/Dashboard/Index";
import FAQ from "../../pages/faq";
import Form from "../../pages/form";
import Geography from "../../pages/geography";
import Invoices from "../../pages/Invoice";
import Line from "../../pages/line";
import Pie from "../../pages/pie";
import Team from "../../pages/Team";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashbaord></Dashbaord>}></Route>
      <Route path="/invoices" element={<Invoices></Invoices>}></Route>
      <Route path="/team" element={<Team></Team>}></Route>
      <Route path="/calender" element={<Calendar></Calendar>}></Route>
      <Route path="/form" element={<Form></Form>}></Route>
      <Route path="/contacts" element={<Contacts></Contacts>}></Route>
      <Route path="/faq" element={<FAQ></FAQ>}></Route>
      <Route path="/bar-chart" element={<Bar></Bar>}></Route>
      <Route path="/pie-chart" element={<Pie></Pie>}></Route>
      <Route path="/line-chart" element={<Line></Line>}></Route>
      <Route path="/geography-chart" element={<Geography></Geography>}></Route>
    
    </Routes>
  );
};

export default AppRoute;
