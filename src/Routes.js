import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Routes/404";
import Diaries from "./Routes/Diaries";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/diaries" element={<Diaries />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
