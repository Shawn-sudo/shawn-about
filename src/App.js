import { Link, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import appIconRounded from "./appIconRounded.svg";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";

const App = () => {
  let location = useLocation();
  const [pathName, setPathName] = useState("");

  const selectedActionButtonStyle = {
    backgroundColor: "#69f0ae",
    color: "rgba(0,0,0,0.6)",
    boxShadow: "0 0 0 rgba(112, 144, 156, 0.3)",
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
              width: 55,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link to="/">
              <img
                src={appIconRounded}
                alt="logo"
                height="40"
                style={{ padding: 7.5 }}
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
                  : null
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>School</div>
            </Link>
            <a href="https://about.atrable.com" className="navButton">
              <div style={{ marginTop: 10 }}>App</div>
            </a>
            <Link
              to="/music"
              style={
                pathName.startsWith("/music") ? selectedActionButtonStyle : null
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>Music</div>
            </Link>
            <Link
              to="/logs"
              style={
                pathName.startsWith("/logs") ? selectedActionButtonStyle : null
              }
              className="navButton"
            >
              <div style={{ marginTop: 10 }}>Log</div>
            </Link>
          </div>
        </div>
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
};

export default App;
