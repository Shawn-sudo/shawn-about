import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Routes/404";
import Home from "./Routes/Home";
import School from "./Routes/School/School";
import Music from "./Routes/Music";
import Logs from "./Routes/myLogs/Logs";
// const Logs = React.lazy(() => import("./Routes/Logs"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/school" element={<School />} />
      <Route path="/music" element={<Music />} />
      <Route
        path="/logs/*"
        element={
          // <Suspense
          //   fallback={
          //     <Wrapper>
          //       <div
          //         style={{
          //           width: "100%",
          //           display: "flex",
          //           justifyContent: "center",
          //         }}
          //       >
          //         <div
          //           style={{
          //             marginTop: "calc(40vh)",
          //           }}
          //         >
          //           <i
          //             className="fas fa-spinner fa-pulse"
          //             style={{
          //               fontSize: 50,
          //               color: "#ff5252",
          //             }}
          //           ></i>
          //         </div>
          //       </div>
          //     </Wrapper>
          //   }
          // >
          <Logs />
          //  </Suspense>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
