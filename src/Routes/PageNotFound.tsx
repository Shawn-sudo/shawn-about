import React from "react";
import Wrapper from "../Components/Wrapper";

const PageNotFound = () => {
  return (
    <Wrapper>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            height: 20,
          }}
        />
        <h2>Page Not Found</h2>
        <h3
          style={{
            color: "grey",
          }}
        >
          404
        </h3>
        <p
          style={{
            color: "grey",
            opacity: 0.5,
          }}
        >
          Oh nooo
        </p>
      </div>
    </Wrapper>
  );
};

export default PageNotFound;
