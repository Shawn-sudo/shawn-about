import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import MySuspense from "../../Components/MySuspense";
import Wrapper from "../../Components/Wrapper";
import PageNotFound from "../PageNotFound";

const SchoolTHS = React.lazy(() => import("./SchoolTHS"));
const SchoolTMS = React.lazy(() => import("./SchoolTMS"));
const SchoolMMS = React.lazy(() => import("./SchoolMMS"));
const SchoolYES = React.lazy(() => import("./SchoolYES"));

function School() {
  document.title = "School | About Seihyun Lee";

  let location = useLocation();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [location]);

  const selectedMenuButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
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
}

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
        <MySuspense>
          <SchoolYES />
        </MySuspense>
      ) : schoolType === "MMS" ? (
        <MySuspense>
          <SchoolMMS />
        </MySuspense>
      ) : schoolType === "TMS" ? (
        <MySuspense>
          <SchoolTMS />
        </MySuspense>
      ) : schoolType === "THS" ? (
        <MySuspense>
          <SchoolTHS />
        </MySuspense>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default School;
