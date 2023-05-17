import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "var(--primary-color-darker)",
        color: "white",
      }}
    >
      <div style={{ height: 20 }} />
      <Link to="/">
        <StaticImage
          src="../assets/profile/profile2.png"
          alt="Shawn's face"
          transformOptions={{ fit: "inside" }}
          style={{
            height: 75,
            width: 75,
            objectFit: "cover",
            padding: 7.5,
            boxShadow: "var(--shadow-big)",
            borderRadius: "25%",
          }}
          imgStyle={{ borderRadius: "25%" }}
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
      {/* Copyright sign with the year that the page was rendered */}
      <p>&copy; 2022-{new Date().getFullYear()}. Seihyun Lee </p>
      <a
        href="https://ko-fi.com/seihyun"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: "auto",
          marginTop: 30,
          marginBottom: 20,
          display: "inline-block",
        }}
      >
        <img
          height="36"
          style={{ border: 0, height: 50 }}
          src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "auto",
        }}
        className="meetMeOn"
      >
        <div
          style={{
            flex: "1 1 auto", //expands it
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            Meet me on
          </h3>

          <a
            href="https://github.com/Shawn-sudo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub @shawn-sudo</strong>
          </a>

          <a
            href="https://www.atrable.com/u/shawn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Atrable @shawn</strong>
          </a>

          <a
            href="https://www.youtube.com/@seihyun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>YouTube @seihyun</strong>
          </a>
        </div>
      </div>
      <div style={{ height: 20 }} />
    </footer>
  );
}

export default Footer;
