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
              src="../assets/profile/profile2.png"
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
          <p>나는 이세현</p>
          <Link
            to="/logs/atrable"
            style={{
              textDecoration: "none",
              borderRadius: 20,
              margin: 5,
            }}
          >
            <Card>
              <div className="responsive-flexBox" style={{ color: "grey" }}>
                <div style={{ margin: 40 }}>
                  <h1
                    style={{
                      color: "rgb(255, 110, 100)",
                      fontSize: 75,
                      marginTop: 50,
                      marginBottom: 0,
                    }}
                  >
                    Atrable
                  </h1>
                  <p>A personal project</p>
                  <p>Jun 2021 - Now</p>
                  <h3 className="learn-more">Developing Story →</h3>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    margin: 15,
                  }}
                >
                  <StaticImage
                    src="../assets/atrable/2023_3/cover.png"
                    alt="Share your actual stories"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "20px 0px 0px 20px" }}
                  />
                  <StaticImage
                    src="../assets/atrable/2023_3/diary.png"
                    alt="Record your honest feelings with audio and video"
                    style={{ width: "100%" }}
                  />
                  <StaticImage
                    src="../assets/atrable/2023_3/chat.png"
                    alt="Get closer to your friends by chatting about your diaries"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "0px 20px 20px 0px" }}
                  />
                </div>
              </div>
            </Card>
          </Link>
          <Link
            to="/logs/oklahoma-musical"
            style={{
              textDecoration: "none",
              borderRadius: 20,
              margin: 5,
            }}
          >
            <Card>
              <div className="responsive-flexBox" style={{ color: "grey" }}>
                <div style={{ padding: 20 }}>
                  <h1
                    style={{
                      color: "orange",
                      fontSize: 60,
                      fontWeight: "800",
                      fontStyle: "italic",
                      marginBottom: 0,
                    }}
                  >
                    Oklahoma!
                  </h1>
                  <p>A school musical</p>
                  <p>Feb 2023 - Apr 2023</p>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    margin: 15,
                  }}
                >
                  <StaticImage
                    src="../assets/oklahoma-musical/IMG_2913.jpg"
                    alt="My profile photo for the musical"
                    style={{ width: "100%", margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src="../assets/oklahoma-musical/DSC02321.jpg"
                    alt="A scene from our musical"
                    style={{ width: "100%", margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src="../assets/oklahoma-musical/DSC02391.jpg"
                    alt="Ending bye bye scene"
                    style={{ width: "100%", margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                </div>
              </div>
            </Card>
          </Link>
          <Link
            to="/logs/scratch-coding-class-dec-2022"
            style={{
              textDecoration: "none",
              borderRadius: 20,
              margin: 5,
            }}
          >
            <Card>
              <div className="responsive-flexBox" style={{ color: "grey" }}>
                <div style={{ padding: 20 }}>
                  <h1
                    style={{
                      color: "var(--primary-color)",
                      marginTop: 50,
                      marginBottom: 0,
                      minWidth: 250,
                    }}
                  >
                    Scratch Coding Class
                  </h1>
                  <p>Dec 2022 - Jan 2023</p>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <StaticImage
                    src="../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 7.12.41 PM.png"
                    alt="Game: Super Mario Simple Remix"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "10px 0px 0px 20px" }}
                  />
                  <StaticImage
                    src="../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 7.14.12 PM.png"
                    alt="Game: Car and Gravity"
                    style={{ width: "100%" }}
                  />
                  <StaticImage
                    src="../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 8.19.41 PM.png"
                    alt="Game: Don't get hit by snow"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "0px 10px 20px 0px" }}
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
