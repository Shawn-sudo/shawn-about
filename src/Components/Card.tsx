import React from "react";

type Props = {
  children?: React.ReactNode;
};

function Card(props: Props) {
  return (
    <div
      style={{
        width: "calc(100% - 60px)",
        padding: 15,
        margin: "auto",
        marginTop: 7.5,
        marginBottom: 7.5,
        backgroundColor: "var(--surface-color)",
        borderRadius: 20,
        boxShadow: "var(--shadow-big)",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
