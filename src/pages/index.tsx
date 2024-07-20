import { Link } from "gatsby";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/layouts.tsx/Layout";
import { StaticImage } from "gatsby-plugin-image";

const profilePhoto = "../assets/profile/profile2.png";

const atrable_cover = "../assets/atrable/2023_7/cover5.png";
const atrable_diary = "../assets/atrable/2023_3/diary.png";
const atrable_chat = "../assets/atrable/2023_3/chat.png";

const myOklahomaProfile = "../assets/oklahoma-musical/IMG_2913.jpg";
const kansasCity = "../assets/oklahoma-musical/DSC02321.jpg";
const endingScene = "../assets/oklahoma-musical/DSC02391.jpg";

const frontOfCafeteria_1 =
  "../assets/busking-club/Screenshot 2023-06-19 at 1.14.58 PM.png";
const frontOfCafeteria_2 =
  "../assets/busking-club/Screenshot 2023-06-19 at 1.14.04 PM.png";
const inGym = "../assets/busking-club/Screenshot 2023-06-19 at 1.51.18 PM.png";

const submergedUnderSnow_performance =
  "../assets/submerged-under-snow/IMG_4297.jpg";
const submergedUnderSnow_albumCover =
  "../assets/submerged-under-snow/submerged-under-snow-album-cover.jpg";

const game_superMarioRemix =
  "../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 7.12.41 PM.png";
const game_carAndGravity =
  "../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 7.14.12 PM.png";
const game_dontGetHit =
  "../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 8.19.41 PM.png";

function Home() {
  const socialLinkStyle = {
    color: "var(--text-color)",
    margin: 10,
    fontSize: "large",
    textDecoration: "none",
  };

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
              src={profilePhoto}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              fontSize: "large",
            }}
          >
            <a
              href="https://github.com/Shawn-sudo"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <strong>GitHub @shawn-sudo</strong>
            </a>

            <a
              href="https://www.atrable.com/u/shawn"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <strong>Atrable @shawn</strong>
            </a>

            <a
              href="https://www.youtube.com/@seihyun"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <strong>YouTube @seihyun</strong>
            </a>
          </div>
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
                  <div className="learn-more">Developing Story →</div>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    margin: 15,
                  }}
                >
                  <StaticImage
                    src={atrable_cover}
                    alt="Share your actual stories"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "20px 0px 0px 20px" }}
                  />
                  <StaticImage
                    src={atrable_diary}
                    alt="Record your honest feelings with audio and video"
                    style={{ width: "100%" }}
                  />
                  <StaticImage
                    src={atrable_chat}
                    alt="Get closer to your friends by chatting about your diaries"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "0px 20px 20px 0px" }}
                  />
                </div>
              </div>
            </Card>
          </Link>
          <Link
            to="/logs/busking-club"
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
                      fontSize: 50,
                      minWidth: 320,
                      marginTop: 50,
                    }}
                  >
                    Busking Club
                  </h1>
                  <p>A school club</p>
                  <p>May 2023 - Now</p>
                  <div className="learn-more">Learn More →</div>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: 15,
                  }}
                >
                  <StaticImage
                    src={frontOfCafeteria_1}
                    alt="In front of cafeteria 1"
                    style={{ width: "100%", maxWidth: 250, margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={frontOfCafeteria_2}
                    alt="In front of cafeteria 2"
                    style={{ width: "100%", maxWidth: 250, margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={inGym}
                    alt="In the gym"
                    style={{ width: "100%", maxWidth: 250, margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                </div>
              </div>
            </Card>
          </Link>
          <Link
            to="/logs/submerged-under-snow"
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
                      color: "skyblue",
                      fontSize: 40,
                      fontWeight: "800",
                      marginTop: 25,
                      marginBottom: 25,
                    }}
                  >
                    Submerged Under Snow
                  </h1>
                  <p>My new single!!</p>
                  <p>Nov 2023</p>
                  <div className="learn-more">Learn More →</div>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    margin: 15,
                  }}
                >
                  <StaticImage
                    src={submergedUnderSnow_performance}
                    alt="Performing Submerged Under Snow"
                    height={300}
                    style={{ width: "100%", maxWidth: 250, margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={submergedUnderSnow_albumCover}
                    alt="Submerged Under Snow Album Cover"
                    height={300}
                    style={{ width: "100%", maxWidth: 250, margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
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
                      fontSize: 50,
                      fontWeight: "800",
                      fontStyle: "italic",
                      fontFamily: "American Typewriter",
                      marginTop: 25,
                      marginBottom: 25,
                    }}
                  >
                    Oklahoma!
                  </h1>
                  <p>A school musical</p>
                  <p>Feb 2023 - Apr 2023</p>
                  <div className="learn-more">Learn More →</div>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    margin: 15,
                  }}
                >
                  <StaticImage
                    src={myOklahomaProfile}
                    alt="My profile photo for the musical"
                    style={{ width: "100%", margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={kansasCity}
                    alt="A scene from our musical"
                    style={{ width: "100%", margin: 5 }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={endingScene}
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
                      marginTop: 25,
                      marginBottom: 25,
                      minWidth: 250,
                    }}
                  >
                    Scratch Coding Class
                  </h1>
                  <p>Dec 2022 - Jan 2023</p>
                  <div className="learn-more">Learn More →</div>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <StaticImage
                    src={game_superMarioRemix}
                    alt="Game: Super Mario Simple Remix"
                    style={{ width: "100%" }}
                    imgStyle={{ borderRadius: "10px 0px 0px 20px" }}
                  />
                  <StaticImage
                    src={game_carAndGravity}
                    alt="Game: Car and Gravity"
                    style={{ width: "100%" }}
                  />
                  <StaticImage
                    src={game_dontGetHit}
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
