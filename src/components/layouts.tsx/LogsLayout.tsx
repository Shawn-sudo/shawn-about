import { Link } from "gatsby";
import React from "react";
import Layout from "./Layout";

type Props = {
  children?: React.ReactNode;
};

function LogsLayout(props: Props) {
  const selectedMenuButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  return (
    <Layout>
      <div className="screenWithMenu">
        <div
          className="menu"
          style={{
            minWidth: 300,
          }}
        >
          <Link
            to="/logs/atrable"
            className="menu_button schoolItem"
            partiallyActive={true}
            activeStyle={selectedMenuButtonStyle}
          >
            Developing Atrable
          </Link>
          <Link
            to="/logs/music"
            className="menu_button schoolItem margin_bottom_15"
            partiallyActive={true}
            activeStyle={selectedMenuButtonStyle}
          >
            Making Musics
          </Link>
          <Link
            to="/logs/interest-in-computers"
            className="menu_button schoolItem margin_bottom_15"
            partiallyActive={true}
            activeStyle={selectedMenuButtonStyle}
          >
            Getting Interest in Computers (good old days)
          </Link>
          <Link
            to="/logs/etc"
            className="menu_button schoolItem margin_bottom_15"
            partiallyActive={true}
            activeStyle={selectedMenuButtonStyle}
          >
            ETC.
          </Link>
        </div>
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
          }}
        >
          {props.children}
        </div>
      </div>
    </Layout>
  );
}

export default LogsLayout;
