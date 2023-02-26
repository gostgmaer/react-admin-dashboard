import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../../pages/calendar/calendar";
import Contacts from "../../pages/Contacts";
import Dashbaord from "../../pages/Dashboard/Index";
import FAQ from "../../pages/faq";
import Form from "../../pages/form";
import Invoices from "../../pages/Invoice";
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
    
    </Routes>
  );
};

export default AppRoute;
