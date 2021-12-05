import React from "react";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import PageNotFound from "./Routes/404";
import Home from "./Routes/Home";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default AppRoutes;
