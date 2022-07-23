import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Wrapper from "../../Components/Wrapper";
import PageNotFound from "../PageNotFound";
import SchoolMMS from "./SchoolMMS";
import SchoolTHS from "./SchoolTHS";
import SchoolTMS from "./SchoolTMS";
import SchoolYES from "./SchoolYES";

const School = () => {
  document.title = "School | About Seihyun Lee";

  let location = useLocation();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [location]);

  const selectedMenuButtonStyle = {
    backgroundColor: "#69f0ae",
    color: "rgba(0,0,0,0.6)",
    boxShadow: "0 0 0 rgba(112, 144, 156, 0.3)",
  };

  const YESMenuButton = (
    <Link
      className="menu_button schoolItem"
      to="/school/YES"
      style={pathName.startsWith("/school/YES") ? selectedMenuButtonStyle : {}}
    >
      Yeouido Elementary School
    </Link>
  );
  const MMSMenuButton = (
    <Link
      className="menu_button schoolItem"
      to="/school/MMS"
      style={pathName.startsWith("/school/MMS") ? selectedMenuButtonStyle : {}}
    >
      Mogun Middle School
    </Link>
  );
  const TMSMenuButton = (
    <Link
      className="menu_button schoolItem"
      to="/school/TMS"
      style={pathName.startsWith("/school/TMS") ? selectedMenuButtonStyle : {}}
    >
      Tenafly Middle School
    </Link>
  );
  const THSMenuButton = (
    <Link
      className="menu_button schoolItem margin_bottom_15"
      to="/school/THS"
      style={pathName.startsWith("/school/THS") ? selectedMenuButtonStyle : {}}
    >
      Tenafly High School
    </Link>
  );

  return (
    <Wrapper className="School">
      <div className="screenWithMenu">
        <div className="menu">
          <div>
            {YESMenuButton}
            {MMSMenuButton}
            {TMSMenuButton}
            {THSMenuButton}
          </div>
        </div>
        <Routes>
          <Route path=":schoolType/*" element={<SchoolViewer />} />
        </Routes>
      </div>
    </Wrapper>
  );
};

const SchoolViewer = () => {
  let { schoolType } = useParams();

  return (
    <div style={{ width: "100%", maxWidth: 1200, textAlign: "center" }}>
      <div
        className="nav"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>
          {schoolType === "YES" ? (
            <>
              <h1>Yeouido Elementary School (여의도초)</h1>
              <h3>2013 - 2018</h3>
            </>
          ) : schoolType === "MMS" ? (
            <>
              <h1>Mogun Middle School (목운중)</h1>
              <h3>2019 - 2021</h3>
            </>
          ) : schoolType === "TMS" ? (
            <>
              <h1>Tenafly Middle School</h1>
              <h3>2021</h3>
            </>
          ) : schoolType === "THS" ? (
            <>
              <h1>Tenafly High School</h1>
              <h3>2021 - </h3>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {schoolType === "YES" ? (
        <SchoolYES />
      ) : schoolType === "MMS" ? (
        <SchoolMMS />
      ) : schoolType === "TMS" ? (
        <SchoolTMS />
      ) : schoolType === "THS" ? (
        <SchoolTHS />
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default School;