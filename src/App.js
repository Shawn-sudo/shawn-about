import { Link, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import appIconRounded from "./appIconRounded.svg";
import { useEffect, useState } from "react";

const App = () => {
  let location = useLocation();
  const [footer, setFooter] = useState(null);
  const [appBarTitle, setAppBarTitle] = useState(null);
  const [actionsProjectButtonStyle, setActionsProjectButtonStyle] = useState(
    {}
  );

  const [actionsDiariesButtonStyle, setActionsDiariesButtonStyle] = useState(
    {}
  );

  const defaultAppBarTitle = <h2>Seihyun Lee</h2>;
  const defaultFooter = (
    <footer
      className="App-footer"
      style={{ textAlign: "center", backgroundColor: "whitesmoke" }}
    >
      <div style={{ height: 20 }} />
      <Link to="/">
        <img
          src={appIconRounded}
          alt="logo"
          height="80"
          style={{ padding: 7.5 }}
        />
      </Link>
      <div>&copy; 2021. Seihyun Lee </div>
      <div>{window.location.pathname}</div>
      <div style={{ height: 20 }} />
    </footer>
  );
  const defaultActionButtonStyle = {};

  useEffect(() => {
    if (window.location.pathname === "/") {
      setAppBarTitle(<h2></h2>);
      setFooter(null);
      setActionsProjectButtonStyle(defaultActionButtonStyle);
      setActionsDiariesButtonStyle(defaultActionButtonStyle);
    } else if (window.location.pathname.startsWith("/projects")) {
      setAppBarTitle(defaultAppBarTitle);
      setFooter(defaultFooter);
      setActionsProjectButtonStyle({
        backgroundColor: "#69f0ae",
        color: "rgba(0,0,0,0.6)",
      });
      setActionsDiariesButtonStyle(defaultActionButtonStyle);
    } else if (window.location.pathname.startsWith("/diaries")) {
      setAppBarTitle(defaultAppBarTitle);
      setFooter(defaultFooter);
      setActionsProjectButtonStyle(defaultActionButtonStyle);
      setActionsDiariesButtonStyle({
        backgroundColor: "#69f0ae",
        color: "rgba(0,0,0,0.6)",
      });
    } else {
      setAppBarTitle(defaultAppBarTitle);
      setFooter(defaultFooter);
      setActionsProjectButtonStyle(defaultActionButtonStyle);
      setActionsDiariesButtonStyle(defaultActionButtonStyle);
    }
  }, [location]);

  window.addEventListener("locationChange", function () {
    console.log("location changed");
  });

  return (
    <>
      {/* <div className="App"> */}
      <header className="App-header">
        <div style={{ width: 220 }}>
          <Link to="/">
            <img
              src={appIconRounded}
              alt="logo"
              height="40"
              style={{ padding: 7.5 }}
            />
          </Link>
        </div>
        {appBarTitle}
        <div style={{ height: 55, width: 220 }}>
          <Link to="/projects">
            <button style={actionsProjectButtonStyle}>Projects</button>
          </Link>
          <Link to="/diaries">
            <button style={actionsDiariesButtonStyle}>Diaries</button>
          </Link>
        </div>
      </header>
      {/* <div style={{ height: 55 }} /> */}
      <AppRoutes />
      {footer}

      {/* </div> */}
    </>
  );
};

export default App;
