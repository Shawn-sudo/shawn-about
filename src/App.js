import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import appIconRounded from "./appIconRounded.svg";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={appIconRounded} height="40" style={{ padding: 7.5 }} />
          </Link>
          <h2>Seihyun Lee</h2>
          <div style={{ width: "55px" }} />
        </header>
        <div style={{ height: 55 }} />
        <AppRoutes />
        <footer
          className="App-footer"
          style={{ textAlign: "center", backgroundColor: "whitesmoke" }}
        >
          <div style={{ height: 20 }} />
          <Link to="/">
            <img src={appIconRounded} height="80" style={{ padding: 7.5 }} />
          </Link>
          <div>&copy; 2021. Seihyun Lee </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
