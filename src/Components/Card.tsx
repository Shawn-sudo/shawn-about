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
        backgroundColor: "ghostwhite",
        borderRadius: 20,
        boxShadow: "0px 5px 10px rgba(112, 144, 156, 0.3)",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
