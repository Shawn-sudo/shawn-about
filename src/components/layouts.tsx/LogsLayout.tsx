import { Link } from "gatsby";
import React, { useEffect } from "react";
import Layout from "./Layout";

type LogPage = {
  path: string;
  title: string;
};

type Props = {
  children?: React.ReactNode;
};

function LogsLayout(props: Props) {
  const selectedMenuButtonStyle: React.CSSProperties = {
    backgroundColor: "var(--primary-color)",
    color: "var(--button-text-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  const logPages: LogPage[] = [
    { path: "/logs/atrable", title: "Developing Atrable" },
    { path: "/logs/busking-club", title: "Busking Club" },
    { path: "/logs/submerged-under-snow", title: "Submerged Under Snow" },
    { path: "/logs/oklahoma-musical", title: "Oklahoma!" },
    {
      path: "/logs/scratch-coding-class-dec-2022",
      title: "Scratch Coding Class (Dec 2022)",
    },
    {
      path: "/logs/interest-in-computers",
      title: "Getting Interested in Computers (good old days)",
    },
    { path: "/logs/etc", title: "ETC (Resume / CV)" },
  ];

  useEffect(() => {
    //ensure that the current menu item is revealed
    logPages.forEach((page) => {
      if (window.location.pathname.includes(page.path)) {
        document
          .getElementById(page.path)
          ?.scrollIntoView({ inline: "center", block: "center" });
      }
    });
  });

  return (
    <Layout>
      <div
        style={{
          overflowX: "scroll",
          overscrollBehaviorX: "contain",
          display: "flex",
          position: "relative",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "var(--highlight-color)",
        }}
      >
        {/* left padding */}
        <div style={{ width: "calc(50vw - 700px)", flexShrink: 0 }} />

        {logPages.map((page) => {
          return (
            <Link
              to={page.path}
              id={page.path}
              key={page.path}
              className="horizontal_menu_button"
              partiallyActive={true}
              activeStyle={selectedMenuButtonStyle}
            >
              {page.title}
            </Link>
          );
        })}

        {/* right padding */}
        <div style={{ width: "calc(50vw - 700px)", flexShrink: 0 }} />
      </div>

      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "auto",
          paddingTop: 10,
        }}
      >
        {props.children}
      </div>
    </Layout>
  );
}

export default LogsLayout;
