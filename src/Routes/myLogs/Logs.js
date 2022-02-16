import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import MySuspense from "../../Components/MySuspense";
import Wrapper from "../../Components/Wrapper";
import PageNotFound from "../404";

const AtrableLog = React.lazy(() => import("./AtrableLog"));
const MusicLog = React.lazy(() => import("./MusicLog"));

const Logs = () => {
  document.title = "Log | About Seihyun Lee";

  let location = useLocation();
  const [pathName, setPathName] = useState("");

  const selectedMenuButtonStyle = {
    backgroundColor: "#69f0ae",
    color: "rgba(0,0,0,0.6)",
    boxShadow: "0 0 0 rgba(112, 144, 156, 0.3)",
  };

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [location]);

  return (
    <Wrapper>
      <div className="screenWithMenu">
        <div className="menu">
          {/* todo: make it kinda look like facebook / twitter main UI */}
          <Link
            to="/logs/atrable"
            className="menu_button schoolItem"
            style={
              pathName.startsWith("/logs/atrable")
                ? selectedMenuButtonStyle
                : {}
            }
          >
            Developing My Social Media
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
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};
export default Logs;
