import { useState } from "react";
import Wrapper from "../../Components/Wrapper";
import SchoolMMS from "./SchoolMMS";
import SchoolTHS from "./SchoolTHS";
import SchoolTMS from "./SchoolTMS";
import SchoolYES from "./SchoolYES";

const PageType = {
  YES: "PageType_YES",
  MMS: "PageType_MMS",
  TMS: "PageType_TMS",
  THS: "PageType_THS",
};

const School = () => {
  document.title = "School | About Seihyun Lee";

  const [pageType, setPageType] = useState(PageType.THS);

  const selectedMenuButtonStyle = {
    backgroundColor: "#69f0ae",
    color: "rgba(0,0,0,0.6)",
    boxShadow: "0 0 0 rgba(112, 144, 156, 0.3)",
  };

  const YESMenuButton = (
    <button
      className="menu_button schoolItem"
      style={pageType === PageType.YES ? selectedMenuButtonStyle : {}}
      onClick={() => {
        setPageType(PageType.YES);
      }}
    >
      Yeouido Elementary School
    </button>
  );
  const MMSMenuButton = (
    <button
      className="menu_button schoolItem"
      style={pageType === PageType.MMS ? selectedMenuButtonStyle : {}}
      onClick={() => {
        setPageType(PageType.MMS);
      }}
    >
      Mogun Middle School
    </button>
  );
  const TMSMenuButton = (
    <button
      className="menu_button schoolItem"
      style={pageType === PageType.TMS ? selectedMenuButtonStyle : {}}
      onClick={() => {
        setPageType(PageType.TMS);
      }}
    >
      Tenafly Middle School
    </button>
  );
  const THSMenuButton = (
    <button
      className="menu_button schoolItem margin_bottom_15"
      style={pageType === PageType.THS ? selectedMenuButtonStyle : {}}
      onClick={() => {
        setPageType(PageType.THS);
      }}
    >
      Tenafly High School
    </button>
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
        <div style={{ width: "100%", textAlign: "center" }}>
          <div
            className="nav"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {/* {pageType === PageType.MMS ? (
              <button
                onClick={() => {
                  setPageType(PageType.YES);
                }}
              >
                YES
              </button>
            ) : pageType === PageType.TMS ? (
              <button
                onClick={() => {
                  setPageType(PageType.MMS);
                }}
              >
                MMS
              </button>
            ) : pageType === PageType.THS ? (
              <button
                onClick={() => {
                  setPageType(PageType.TMS);
                }}
              >
                TMS
              </button>
            ) : (
              <></>
            )} */}
            <h1>
              {pageType === PageType.YES
                ? "Yeouido Elementary School"
                : pageType === PageType.MMS
                ? "Mogun Middle School"
                : pageType === PageType.TMS
                ? "Tenafly Middle School"
                : pageType === PageType.THS
                ? "Tenafly High School"
                : ""}
            </h1>
            {/* {pageType === PageType.YES ? (
              <button
                onClick={() => {
                  setPageType(PageType.MMS);
                }}
              >
                MMS
              </button>
            ) : pageType === PageType.MMS ? (
              <button
                onClick={() => {
                  setPageType(PageType.TMS);
                }}
              >
                TMS
              </button>
            ) : pageType === PageType.TMS ? (
              <button
                onClick={() => {
                  setPageType(PageType.THS);
                }}
              >
                THS
              </button>
            ) : (
              <div />
            )} */}
          </div>
          {pageType === PageType.YES ? (
            <SchoolYES />
          ) : pageType === PageType.MMS ? (
            <SchoolMMS />
          ) : pageType === PageType.TMS ? (
            <SchoolTMS />
          ) : pageType === PageType.THS ? (
            <SchoolTHS />
          ) : (
            <div style={{ fontWeight: "bold" }}>
              No school has been selected
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default School;
