import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import CardImageWrapper from "../../Components/CardImageWrapper";

function SchoolYES() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardImageWrapper src="/assets/YES/20171112_224402.jpeg" />
          <div style={{ width: "50%" }}>
            <img
              style={{
                display: "block",
                borderRadius: 15,
                margin: 30,
                objectFit: "cover",
                maxWidth: 250,
              }}
              width="70%"
              alt="img"
              src="/assets/YES/20180911_143835.jpeg"
            />
          </div>
        </div>
      </Card>
      <div style={{ margin: 20 }}>
        <h2 style={{ display: "inline" }}>More on </h2>
        <Link
          to="/logs/YES"
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            color: "#69f0ae",
          }}
        >
          Log
        </Link>
      </div>
    </div>
  );
}

export default SchoolYES;
