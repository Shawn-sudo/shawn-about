import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Wrapper(props: Props) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div
      style={{ minHeight: "100vh", marginTop: 55, width: "100%" }}
      className={props.className + " transition-by-it-self "}
    >
      {props.children}
    </div>
  );
}

export default Wrapper;
