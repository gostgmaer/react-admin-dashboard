import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "../../pages/404/Notfound";
import Bar from "../../pages/bar";
import Calendar from "../../pages/calendar/calendar";
import Contacts from "../../pages/Contacts";
import Dashbaord from "../../pages/Dashboard/Index";
import FAQ from "../../pages/faq";
import Form from "../../pages/form";
import Geography from "../../pages/geography";
import Invoices from "../../pages/Invoice";
import Line from "../../pages/line";
import LoginPage from "../../pages/Login/LoginPage";
import JoySignInSideTemplate from "../../pages/Login/LoginWithJoy";
import MuiLogin from "../../pages/Login/MuiLogin";
import Pie from "../../pages/pie";
import Signup from "../../pages/Signup";
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
      <Route path="*" element={<Notfound></Notfound>}></Route>
      {/* <Route path="/login" element={<Login></Login>}></Route> */}
    </Routes>
  );
};

export default AppRoute;

export const AppLoginRoute = () => {
  return (
    <Routes>
    {/* <Route path="/login" element={<Login></Login>}></Route> */}
    {/* <Route path="/login" element={<Signin></Signin>}></Route> */}
      {/* <Route path="/" element={<JoySignInSideTemplate></JoySignInSideTemplate>}></Route>
      <Route path="/login" element={<JoySignInSideTemplate/>}></Route> */}
      <Route path="/" element={<MuiLogin></MuiLogin>}></Route>
      <Route path="/login" element={<MuiLogin/>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
      <Route path="/signup" element={<Signup  setAuth={{}}></Signup>}></Route>
    </Routes>
  );
};
