import { Link } from "gatsby";
import React from "react";
import Layout from "./Layout";

type Props = {
  children?: React.ReactNode;
};

function SchoolLayout(props: Props) {
  const selectedMenuButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  return (
    <Layout className="School">
      <div className="screenWithMenu">
        <div
          className="menu"
          style={{
            minWidth: 300,
          }}
        >
          <div>
            {/* Yeouido Elementary School */}
            <Link
              className="menu_button schoolItem"
              to="/school/YES"
              partiallyActive={true}
              activeStyle={selectedMenuButtonStyle}
            >
              Yeouido Elementary School
            </Link>

            {/* Mogun Middle School */}
            <Link
              className="menu_button schoolItem"
              to="/school/MMS"
              partiallyActive={true}
              activeStyle={selectedMenuButtonStyle}
            >
              Mogun Middle School
            </Link>

            {/* Tenafly Middle School */}
            <Link
              className="menu_button schoolItem"
              to="/school/TMS"
              partiallyActive={true}
              activeStyle={selectedMenuButtonStyle}
            >
              Tenafly Middle School
            </Link>

            {/* Tenafly High School */}
            <Link
              className="menu_button schoolItem margin_bottom_15"
              to="/school/THS"
              partiallyActive={true}
              activeStyle={selectedMenuButtonStyle}
            >
              Tenafly High School
            </Link>
          </div>
        </div>
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
            textAlign: "center",
          }}
        >
          {props.children}
        </div>
      </div>
    </Layout>
  );
}

export default SchoolLayout;
