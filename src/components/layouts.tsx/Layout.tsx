import React from "react";
import AppBar from "../AppBar";
import Footer from "../Footer";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Layout(props: Props) {
  return (
    <div className="App">
      <AppBar />
      <div
        style={{ minHeight: "100vh", marginTop: 55, width: "100%" }}
        className={props.className + " transition-by-it-self "}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
