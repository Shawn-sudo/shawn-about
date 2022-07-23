import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import MySuspense from "../../Components/MySuspense";
import Wrapper from "../../Components/Wrapper";
import PageNotFound from "../PageNotFound";

const AtrableLog = React.lazy(() => import("./AtrableLog"));
const MusicLog = React.lazy(() => import("./MusicLog"));
const InterestInComputersLog = React.lazy(
  () => import("./InterestInComputersLog")
);
const EtcLog = React.lazy(() => import("./EtcLog"));

const Logs = () => {
  document.title = "Log | About Seihyun Lee";

  let location = useLocation();
  const [pathName, setPathName] = useState("");

  const selectedMenuButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [location]);

  return (
    <Wrapper>
      <div className="screenWithMenu">
        <div className="menu">
          <Link
            to="/logs/atrable"
            className="menu_button schoolItem"
            style={
              pathName.startsWith("/logs/atrable")
                ? selectedMenuButtonStyle
                : {}
            }
          >
            Developing Atrable
          </Link>
          <Link
            to="/logs/music"
            className="menu_button schoolItem margin_bottom_15"
            style={
              pathName.startsWith("/logs/music") ? selectedMenuButtonStyle : {}
            }
          >
            Making Musics
          </Link>
          <Link
            to="/logs/interest-in-computers"
            className="menu_button schoolItem margin_bottom_15"
            style={
              pathName.startsWith("/logs/interest-in-computers")
                ? selectedMenuButtonStyle
                : {}
            }
          >
            Getting Interest in Computers (good old days)
          </Link>
          <Link
            to="/logs/etc"
            className="menu_button schoolItem margin_bottom_15"
            style={
              pathName.startsWith("/logs/etc") ? selectedMenuButtonStyle : {}
            }
          >
            ETC.
          </Link>
        </div>
        <Routes>
          <Route path=":logType/*" element={<LogType />} />
        </Routes>
      </div>
    </Wrapper>
  );
};

const LogType = () => {
  let { logType } = useParams();
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
      }}
    >
      {logType === "atrable" ? (
        <MySuspense>
          <AtrableLog />
        </MySuspense>
      ) : logType === "music" ? (
        <MySuspense>
          <MusicLog />
        </MySuspense>
      ) : logType === "interest-in-computers" ? (
        <MySuspense>
          <InterestInComputersLog />
        </MySuspense>
      ) : logType === "etc" ? (
        <MySuspense>
          <EtcLog />
        </MySuspense>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};
export default Logs;
