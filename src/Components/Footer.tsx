import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../assets/social_media_logo/GitHub_Logo_White.png";
import atrableLogo from "../assets/appIconRounded.svg";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "var(--secondary-color-darker)",
        color: "white",
      }}
    >
      <div style={{ height: 20 }} />
      <Link to="/">
        <img
          src="/assets/profile/profile.jpg"
          alt="my face"
          style={{
            height: 75,
            width: 75,
            objectFit: "cover",
            padding: 7.5,
            borderRadius: 30,
            boxShadow: "var(--shadow-big)",
          }}
        />
      </Link>
      <p style={{ fontWeight: "bold" }}>Made by Seihyun (Shawn) Lee</p>
      <a
        href="https://github.com/Shawn-sudo/shawn-about"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "white",
        }}
      >
        Source code
      </a>
      <p>&copy; 2022. Seihyun Lee </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <a
          href="https://github.com/Shawn-sudo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github" height={50} />
        </a>
        <a
          href="https://get.atrable.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={atrableLogo} alt="github" height={50} />
        </a>
      </div>
      <div style={{ height: 20 }} />
    </footer>
  );
}

export default Footer;
