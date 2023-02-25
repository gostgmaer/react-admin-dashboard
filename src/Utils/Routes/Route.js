import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashbaord from "../../pages/Dashboard/Index";
import Invoices from "../../pages/Invoice";
import Team from "../../pages/Team";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashbaord></Dashbaord>}></Route>
      <Route path="/invoices" element={<Invoices></Invoices>}></Route>
      <Route path="/team" element={<Team></Team>}></Route>
    </Routes>
  );
};

export default AppRoute;
