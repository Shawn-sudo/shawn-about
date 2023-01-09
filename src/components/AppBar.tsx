import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function AppBar() {
  const selectedActionButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  return (
    <div
      className="App-Appbar"
      style={{
        backgroundColor: "var(--highlight-color)",
        height: 55,
        width: "100vw",
        display: "flex",
        position: "fixed",
        top: 0,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link to="/">
          <StaticImage
            src="../assets/profile/profile2.png"
            alt="Shawn's face"
            transformOptions={{ fit: "inside" }}
            style={{
              height: 40,
              width: 40,
              objectFit: "cover",
              margin: 7.5,
              borderRadius: 17.5,
            }}
            imgStyle={{ borderRadius: 30 }}
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
          className="navButton"
          partiallyActive={true}
          activeStyle={selectedActionButtonStyle}
        >
          <div style={{ marginTop: 10 }}>School</div>
        </Link>
        <Link
          to="/music"
          className="navButton"
          partiallyActive={true}
          activeStyle={selectedActionButtonStyle}
        >
          <div style={{ marginTop: 10 }}>Music</div>
        </Link>
        <Link
          to="/logs"
          className="navButton"
          partiallyActive={true}
          activeStyle={selectedActionButtonStyle}
        >
          <div style={{ marginTop: 10 }}>Logs</div>
        </Link>
      </div>
    </div>
  );
}

export default AppBar;
