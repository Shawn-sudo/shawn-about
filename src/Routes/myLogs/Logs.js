import React, { Suspense, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import ErrorBoundary from "../../Components/ErrorBoundary";
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
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "calc(40vh)",
              }}
            >
              <i
                className="fas fa-spinner fa-pulse"
                style={{
                  fontSize: 50,
                  color: "#ff5252",
                }}
              ></i>
            </div>
          </div>
        }
      >
        {logType === "atrable" ? (
          <ErrorBoundary>
            <AtrableLog />
          </ErrorBoundary>
        ) : logType === "music" ? (
          <ErrorBoundary>
            <MusicLog />
          </ErrorBoundary>
        ) : (
          <PageNotFound />
        )}
      </Suspense>
    </div>
  );
};
export default Logs;
