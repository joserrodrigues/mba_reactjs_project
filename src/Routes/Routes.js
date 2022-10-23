import React, { useContext } from "react";
import HomeController from "../Screens/Home/Home";
import DetailController from "../Screens/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login";
import { LoginContext } from "../Store/LoginContext";

const RouteManager = () => {
  const context = useContext(LoginContext);

  console.log(context.token);
  if(context.token !== ""){
    return (
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="detail">
          <Route path=":infoID" element={<DetailController />} />
          <Route path="add" element={<DetailController />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
};

export default RouteManager;
