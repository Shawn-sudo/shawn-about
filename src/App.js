import { BrowserRouter, Link, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import appIconRounded from "./appIconRounded.svg";
import { useEffect, useState } from "react";

const App = () => {
  let location = useLocation();
  const [footer, setFooter] = useState(null);
  const [appBarTitle, setAppBarTitle] = useState(null);
  // var scrolled = 0;

  useEffect(() => {
    if (window.location.pathname === "/") {
      setFooter(null);
      // document.addEventListener("wheel", (event) => {
      //   console.log(event.deltaY)
      //   // scrolled = scrolled + event.deltaY;
      //   // console.log(scrolled);
      // });
      setAppBarTitle(<h2></h2>);
    } else {
      setFooter(
        <footer
          className="App-footer"
          style={{ textAlign: "center", backgroundColor: "whitesmoke" }}
        >
          <div style={{ height: 20 }} />
          <Link to="/">
            <img src={appIconRounded} height="80" style={{ padding: 7.5 }} />
          </Link>
          <div>&copy; 2021. Seihyun Lee </div>
          <div>{window.location.pathname}</div>
          <div style={{ height: 20 }} />
        </footer>
      );
      setAppBarTitle(<h2 style={{}}>Seihyun Lee</h2>);
    }
  }, [location]);

  window.addEventListener("locationChange", function () {
    console.log("location changed");
  });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 220 }}>
          <Link to="/">
            <img src={appIconRounded} height="40" style={{ padding: 7.5 }} />
          </Link>
        </div>
        {appBarTitle}
        <div style={{ height: 55, width: 220 }}>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <Link to="/diaries">
            <button>Diaries</button>
          </Link>
        </div>
      </header>
      {/* <div style={{ height: 55 }} /> */}
      <AppRoutes />
      {footer}
    </div>
  );
};

export default App;
