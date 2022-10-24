import { Link } from "gatsby";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/layouts.tsx/Layout";
import { StaticImage } from "gatsby-plugin-image";

function Home() {
  return (
    <>
      <title>About Seihyun Lee</title>

      <Layout>
        <div
          style={{
            textAlign: "center",
            maxWidth: 1000,
            margin: "auto",
          }}
        >
          <div
            style={{
              margin: "auto",
            }}
          >
            <div
              style={{
                height: 100,
              }}
            />
            <StaticImage
              src="../assets/profile/profile.jpg"
              alt="Shawn's face"
              transformOptions={{ fit: "inside" }}
              style={{
                width: 100,
                height: 100,
                boxShadow: "var(--shadow-big)",
                borderRadius: "25%",
              }}
              imgStyle={{ borderRadius: "25%" }}
            />
          </div>
          <h2>Seihyun Lee</h2>
          <p>I'm Seihyun (Shawn) Lee</p>
          <Link
            to="/logs/atrable"
            style={{
              textDecoration: "none",
              borderRadius: 20,
            }}
          >
            <Card>
              <div
                className="flexBox"
                style={{
                  display: "flex",
                  color: "grey",
                }}
              >
                <div style={{ padding: 20 }}>
                  <h1
                    style={{
                      color: "white",
                      fontSize: 75,
                      textShadow: "0px 5px 15px var(--shadow-color)",
                      marginTop: 50,
                      marginBottom: 0,
                    }}
                  >
                    Atrable
                  </h1>
                  <p>A personal project</p>
                  <h3 className="learn-more">Developing Story →</h3>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <StaticImage
                    src="../assets/atrable/v1.2.0/iPhone_6.5/record_audio_diary.png"
                    alt="Record your stories with Audio Diary"
                    style={{ width: "25%" }}
                    imgStyle={{ borderRadius: "15px 0px 0px 15px" }}
                  />
                  <StaticImage
                    src="../assets/atrable/v1.2.0/iPhone_6.5/send_to_friends.png"
                    alt="Send it to friends"
                    style={{ width: "25%" }}
                    imgStyle={{ borderRadius: "0px 15px 15px 0px" }}
                  />
                  <StaticImage
                    src="../assets/atrable/v1.2.0/iPhone_6.5/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 23.19.04.png"
                    alt="Atrable app detail - uploading audio"
                    style={{ width: "25%" }}
                    imgStyle={{ borderRadius: 15 }}
                  />
                  <StaticImage
                    src="../assets/atrable/v1.2.0/iPhone_6.5/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 23.22.09.png"
                    alt="Atrable app detail - view profile"
                    style={{ width: "25%" }}
                    imgStyle={{ borderRadius: 15 }}
                  />
                </div>
              </div>
            </Card>
          </Link>
          <div
            style={{
              height: 60,
            }}
          />
        </div>
      </Layout>
    </>
  );
}

export default Home;
