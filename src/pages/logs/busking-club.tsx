import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import Card from "../../components/Card";
import { StaticImage } from "gatsby-plugin-image";
import "../../components/styles/timeline.css";

const jun2023_videoCorruption1 =
  "../../assets/busking-club/2023_6/Screenshot 2023-12-26 at 1.19.51 PM.png";
const jun2023_videoCorruption2 =
  "../../assets/busking-club/2023_6/Screenshot 2023-12-26 at 12.00.07 PM.png";
const jun2023_videoCorruption3 =
  "../../assets/busking-club/2023_6/Screenshot 2023-12-26 at 12.25.47 PM.png";

const frontOfCafeteria_1 =
  "../../assets/busking-club/Screenshot 2023-06-19 at 1.14.58 PM.png";
const frontOfCafeteria_2 =
  "../../assets/busking-club/Screenshot 2023-06-19 at 1.14.04 PM.png";
const inGym =
  "../../assets/busking-club/Screenshot 2023-06-19 at 1.51.18 PM.png";

function BuskingClub() {
  const imgStyle_outer: React.CSSProperties = {
    width: "60vw",
    maxWidth: 300,
    margin: 5,
    boxShadow: "var(--shadow-big)",
    borderRadius: 20,
  };
  const imgStyle_inner: React.CSSProperties = { borderRadius: 20 };

  return (
    <>
      <title>Busking Club | About Seihyun Lee</title>
      <LogsLayout>
        <main>
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <h2>Sep 2023 - </h2>
                <p>
                  The club grew quite big. We have around 40 members with 15
                  active buskers.
                </p>
                <p>
                  We're actively busking every two weeks, but I'm not able to
                  actively update this page,{" "}
                  <a
                    href="https://www.instagram.com/thsbuskingclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  , and{" "}
                  <a
                    href="https://youtube.com/@THSBuskingClub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube channel
                  </a>{" "}
                  because I have no time to manage those :/
                </p>
                <p>
                  I observed Chemistry Club, and I realized that the president
                  distributes jobs to other officers. That's the leadership
                  right there 👆
                </p>
                <p>
                  Next Monday (Today == Jan 4, 2024), I'm gonna have some
                  conversations with the club officers to give them each
                  platform (among Instagram, YouTube, Google Classroom, and
                  GroupMe) that they'll be responsible for. Our advisor, Mr.
                  Finn, will make sure that we're all doing our jobs well.
                </p>
                <p>
                  I heard that smart companies build a <strong>system</strong>{" "}
                  to operate smoothly by giving employees roles &
                  responsibilities. I'm trying to implement that system here 🤓
                </p>

                <h3>Current State (as of Jan 2024)</h3>
                <p>
                  We have a solid <i>backbone</i>; we found the "supply"{" "}
                  <span
                    style={{ color: "var(--hint-color)", fontStyle: "italic" }}
                  >
                    (= musicians in our school who want to practice performing
                    in front of others)
                  </span>{" "}
                  and the "demand"{" "}
                  <span
                    style={{ color: "var(--hint-color)", fontStyle: "italic" }}
                  >
                    (= students who are exhausted after preparing for tests,
                    etc)
                  </span>{" "}
                  and matched them well!
                </p>
                <p>Now, I'm trying to make this club a bit more awesome!</p>

                <details>
                  <summary
                    style={{
                      color: "var(--primary-color)",
                      cursor: "pointer",
                      fontSize: "larger",
                      fontWeight: "bold",
                    }}
                  >
                    Aiming to build a strong team
                  </summary>
                  <p>
                    When together, we have endless potential. Together, we can
                    go to many places—from senior centers and local restaurants
                    to Times Square—and perform our music there. To do that,
                    though, we first need a strong, supportive team. Next
                    Monday, I'm going to have conversations with the officers
                    about this too.
                  </p>
                  <p style={{ color: "var(--hint-color)" }}>
                    More explanation: practicing, rehearsing, going to those
                    places, and performing the music consume quite a lot of time
                    & effort. When we put more of our efforts in, we want to
                    have more incentives back, or else we'll easily get
                    depressed and won't put that much effort like before. The
                    crowds' claps would not be enough to keep us motivated—think
                    about how most pop stars go through burn-out. I think it's
                    because claps just disappear instantaneously. Our buskers's
                    minds would want to get something that won't disappear too
                    quickly by being in this club, and friendship can be an
                    answer! (I'm kinda applying things I learned while
                    developing Atrable lol) That's why I'm trying to build a
                    strong team first.
                  </p>
                </details>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>June 9th, 2023</h2>
                <h3>My first busking with Ian!</h3>
                <p>I filmed some videos while doing the busking demo 🎥</p>
                <iframe
                  width="100%"
                  height="280"
                  src="https://www.youtube-nocookie.com/embed/SqIJGXvo8JQ?si=TJZuuLOz06qAutIO"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    border: 0,
                    borderRadius: 30,
                    margin: "auto",
                  }}
                />
                <p style={{ color: "var(--hint-color)" }}>
                  I re-rendered the video 17 times to put on YouTube because of
                  some weird visual effect caused by video file corruption. I
                  personally liked it, but I thought I would be the only one who
                  liked it, so I tried removing those weird effects.
                </p>
                <div style={{ display: "flex" }}>
                  <StaticImage
                    src={jun2023_videoCorruption1}
                    alt="Video corruption screenshot 1"
                    style={imgStyle_outer}
                    imgStyle={imgStyle_inner}
                  />
                  <StaticImage
                    src={jun2023_videoCorruption2}
                    alt="Video corruption screenshot 2"
                    style={imgStyle_outer}
                    imgStyle={imgStyle_inner}
                  />
                  <StaticImage
                    src={jun2023_videoCorruption3}
                    alt="Video corruption screenshot 3"
                    style={imgStyle_outer}
                    imgStyle={imgStyle_inner}
                  />
                </div>
                <p style={{ color: "var(--hint-color)" }}>
                  Apparently, I was experiencing this issue because there was
                  not enough space left in my main drive. I exported the video
                  on another drive and those visual effects are gone now. Phew.
                </p>
              </div>
            </div>
          </div>
        </main>
        <div style={{ maxWidth: 750, margin: "auto" }}>
          <Card className="paragraph-with-padding">
            <h2>Busking = Street Performance</h2>

            <p>
              I've been wanting to do busking after hearing that Busker Busker,
              a famous band in Korea that made many songs like{" "}
              <a
                href="https://www.youtube.com/watch?v=tXV7dfvSefo"
                target="_blank"
                rel="noopener noreferrer"
              >
                벚꽃 엔딩
              </a>
              , used to do busking in their early 20s.
            </p>
            <p>
              I wanted to do it in school during lunchtime, so I made Busking
              Club with my friend Ian. We recently did a demo busking, and it
              was great! Everybody loved the idea of seeing their friends
              singing some songs for them. Even the teachers loved it; one of
              them told us how great it is to bring positive energy to our
              community by busking during lunchtime. I think it's great too!
            </p>
            <div
              style={{
                display: "flex",
              }}
            >
              <StaticImage
                src={frontOfCafeteria_1}
                alt="In front of cafeteria 1"
                style={imgStyle_outer}
                imgStyle={imgStyle_inner}
              />
              <StaticImage
                src={frontOfCafeteria_2}
                alt="In front of cafeteria 2"
                style={imgStyle_outer}
                imgStyle={imgStyle_inner}
              />
              <StaticImage
                src={inGym}
                alt="In the gym"
                style={imgStyle_outer}
                imgStyle={imgStyle_inner}
              />
            </div>
            <p>
              We'll be doing this every week starting the next year. You can
              always join us if you're a THS student. Anyway, I hope it goes
              well!
            </p>
            <p style={{ textAlign: "end" }}>- Written on Jun. 19, 2023</p>
          </Card>
        </div>
      </LogsLayout>
    </>
  );
}

export default BuskingClub;
