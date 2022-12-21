import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const githubLogo = "../assets/social_media_logo/github-mark-white.svg";
const atrableLogo =
  "../assets/social_media_logo/atrable_icon2_rounded_512x512.png";
const youtubeLogo = "../assets/social_media_logo/yt_icon_mono_dark.png";
const twitterLogo =
  "../assets/social_media_logo/twitter-logo-rounded-square.png";

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
      <p>&copy; 2022. Seihyun Lee </p>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "auto",
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
        <div
          style={{
            flex: "1 1 auto", //expands it
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <a
            href="https://github.com/Shawn-sudo"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <StaticImage src={githubLogo} alt="GitHub" height={35} />
          </a>

          <a
            href="https://www.atrable.com/u/shawn"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <StaticImage src={atrableLogo} alt="Atrable" height={40} />
          </a>

          <a
            href="https://www.youtube.com/@seihyun"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <StaticImage src={youtubeLogo} alt="YouTube" height={35} />
          </a>

          <a
            href="https://twitter.com/seihyunlee"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <StaticImage
              src={twitterLogo}
              alt="Twitter"
              height={35}
              imgStyle={{ borderRadius: 10 }}
            />
          </a>
        </div>
      </div>
      <div style={{ height: 20 }} />
    </footer>
  );
}

export default Footer;
