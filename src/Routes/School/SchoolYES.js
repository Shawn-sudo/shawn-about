import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import CardImageWrapper from "../../Components/CardImageWrapper";

const SchoolYES = () => {
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
                disply: "block",
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
          to="/logs"
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            color: "#69f0ae",
          }}
        >
          Log
        </Link>
      </div>
      {/* <div
        style={{
          height: 500,
          width: 100,
          backgroundColor: "blue",
        }}
      /> */}
    </div>
  );
};

export default SchoolYES;
