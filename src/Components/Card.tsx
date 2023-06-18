import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Card(props: Props) {
  return (
    <div
      className={props.className}
      style={{
        width: "calc(100% - 60px)",
        padding: 15,
        margin: "auto",
        marginTop: 7.5,
        marginBottom: 7.5,
        backgroundColor: "var(--surface-color)",
        borderRadius: 30,
        boxShadow: "var(--shadow-big)",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
