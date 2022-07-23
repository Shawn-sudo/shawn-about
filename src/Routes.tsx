import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Routes/PageNotFound";
import School from "./Routes/School/School";
import Logs from "./Routes/myLogs/Logs";
import MySuspense from "./Components/MySuspense";

const Home = React.lazy(() => import("./Routes/Home"));
const Music = React.lazy(() => import("./Routes/Music"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MySuspense>
            <Home />
          </MySuspense>
        }
      />
      <Route path="/school/*" element={<School />} />
      <Route
        path="/music"
        element={
          <MySuspense>
            <Music />
          </MySuspense>
        }
      />
      <Route path="/logs/*" element={<Logs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
