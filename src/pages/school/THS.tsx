import React from "react";
import { useState } from "react";
import Card from "../../components/Card";
import DevelopingLabel from "../../components/DevelopingLabel";
import SchoolLayout from "../../components/layouts.tsx/SchoolLayout";

function SchoolTHS() {
  const [currentTab, setCurrentTab] = useState(0);

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
          >
            <button
              style={currentTab === 0 ? selectedButtonStyle : {}}
              onClick={() => {
                setCurrentTab(0);
              }}
            >
              In Class
            </button>
            <button
              style={currentTab === 1 ? selectedButtonStyle : {}}
              onClick={() => {
                setCurrentTab(1);
              }}
            >
              Club
            </button>
          </div>
          {currentTab === 0 ? <InClass /> : <Club />}
        </div>
      </SchoolLayout>
    </>
  );
}

const InClass = () => {
  return (
    <div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

const Club = () => {
  return (
    <div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default SchoolTHS;
