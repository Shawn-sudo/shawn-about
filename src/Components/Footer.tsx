import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const githubLogo = "../assets/social_media_logo/github-mark-white.svg";
const atrableLogo =
  "../assets/social_media_logo/atrable_icon2_rounded_512x512.png";
const youtubeLogo = "../assets/social_media_logo/yt_icon_mono_dark.png";

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
        href="https://www.buymeacoffee.com/seihyun"
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
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{
            height: 60,
            width: 217,
            borderRadius: 20,
          }}
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
