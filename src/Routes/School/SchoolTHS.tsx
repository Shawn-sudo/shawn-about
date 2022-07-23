import React from "react";
import { useState } from "react";
import Card from "../../Components/Card";

const SchoolTHS = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const selectedButtonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--hint-color)",
    boxShadow: "0 0 0 var(--shadow-color)",
  };

  return (
    <div className="SchoolTHS">
      <div
        style={{
          fontWeight: "bolder",
          fontSize: "larger",
          padding: 20,
          backgroundColor: "#fdd835",
        }}
      >
        Developing
      </div>
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
  );
};

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
