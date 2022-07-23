import { Link, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  const [pathName, setPathName] = useState("");

  const selectedActionButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [location]);

  return (
    <>
      <div className="App">
        <div className="App-Appbar transition-by-it-self">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link to="/">
              <img
                src="/assets/profile/profile.jpg"
                alt="my face"
                style={{
                  height: 40,
                  width: 40,
                  objectFit: "cover",
                  padding: 7.5,
                  borderRadius: 17.5,
                }}
              />
            </Link>
          </div>
          <div
            style={{
              height: 55,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Link
              to="/school"
              style={
                pathName.startsWith("/school")
                  ? selectedActionButtonStyle
                  : undefined
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>School</div>
            </Link>
            <Link
              to="/app"
              style={
                pathName.startsWith("/app")
                  ? selectedActionButtonStyle
                  : undefined
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>App</div>
            </Link>
            <Link
              to="/music"
              style={
                pathName.startsWith("/music")
                  ? selectedActionButtonStyle
                  : undefined
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>Music</div>
            </Link>
            <Link
              to="/logs"
              style={
                pathName.startsWith("/logs")
                  ? selectedActionButtonStyle
                  : undefined
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>Logs</div>
            </Link>
          </div>
        </div>
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
