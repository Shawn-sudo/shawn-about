import React from "react";

type Props = {
  src: string;
};

function CardImageWrapper(props: Props) {
  return (
    <img src={props.src} width="50%" style={{ borderRadius: 15 }} alt="img" />
  );
}

export default CardImageWrapper;
