import React from "react";
import Card from "../../components/Card";
import DevelopingLabel from "../../components/DevelopingLabel";
import SchoolLayout from "../../components/layouts.tsx/SchoolLayout";

function SchoolTHS() {
  const selectedButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  return (
    <>
      <title>My Stories from Tenafly High School | About Seihyun Lee</title>

      <SchoolLayout>
        <div className="SchoolTHS">
          <h1>Tenafly High School</h1>
          <h3>2021 - </h3>

          <DevelopingLabel />
          <div
            className="menu_bar"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          ></div>
          <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </SchoolLayout>
    </>
  );
}

export default SchoolTHS;
