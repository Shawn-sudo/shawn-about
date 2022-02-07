import React from "react";
import { Link } from "react-router-dom";
import appIconRounded from "../appIconRounded.svg";

const Footer = () => {
  return (
    <footer
      className="App-footer"
      style={{ textAlign: "center", backgroundColor: "ghostwhite" }}
    >
      <div style={{ height: 20 }} />
      <Link to="/">
        <img
          src={appIconRounded}
          alt="logo"
          height="80"
          style={{
            padding: 7.5,
            borderRadius: 30,
            boxShadow: "0px 3px 5px rgba(112, 144, 156, 0.3)",
          }}
        />
      </Link>
      <p>&copy; 2022. Seihyun Lee </p>
      <p>Above image is the logo for my audio-based social media</p>
      <p style={{ fontWeight: "bold" }}>Fully made by Seihyun (Shawn) Lee</p>
      <p
        style={{
          color: "grey",
          opacity: 0.5,
        }}
      >
        Used&nbsp;
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </a>
        ,&nbsp;
        <a
          href="https://firebase.google.com/products/hosting"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firebase Hosting
        </a>
        , and&nbsp;
        <a
          href="https://fontawesome.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
      </p>
      <div>{window.location.pathname}</div>
      <div style={{ height: 20 }} />
    </footer>
  );
};

export default Footer;
