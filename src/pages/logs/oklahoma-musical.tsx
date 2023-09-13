import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import Card from "../../components/Card";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const myOklahomaProfile = "../../assets/oklahoma-musical/IMG_2913.jpg";
const kansasCity = "../../assets/oklahoma-musical/DSC02321.jpg";
const itsAScandal = "../../assets/oklahoma-musical/DSC02333-2.jpg";
const oklahoma = "../../assets/oklahoma-musical/DSC02377.jpg";
const endingScene = "../../assets/oklahoma-musical/DSC02391.jpg";

function OklahomaMusical() {
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
      <title>Oklahoma! | About Seihyun Lee</title>
      <LogsLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Oklahoma! Act 1 */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fDkOa2W_cPg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: 0,
              borderRadius: 30,
              margin: "auto",
              padding: 5,
            }}
          />

          {/* Oklahoma! Act 2 */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PqATTKGvXw0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: 0,
              borderRadius: 30,
              margin: "auto",
              padding: 5,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 75,
            marginBottom: 75,
            textAlign: "center",
          }}
        >
          <div style={{ margin: "auto" }}>
            <StaticImage
              src={myOklahomaProfile}
              alt="My profile photo for the musical"
              style={imgStyle_outer}
              imgStyle={imgStyle_inner}
            />
            <p>"Hi I'm Slim!"</p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src={kansasCity}
              alt="A scene from our musical"
              style={imgStyle_outer}
              imgStyle={imgStyle_inner}
            />
            <p>
              <i>Kansas City</i>
            </p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src={itsAScandal}
              alt="A scene from our musical"
              style={imgStyle_outer}
              imgStyle={imgStyle_inner}
            />
            <p>
              <i>It's a Scandal! It's a Outrage!</i>
            </p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src={oklahoma}
              alt="A scene from our musical"
              style={imgStyle_outer}
              imgStyle={imgStyle_inner}
            />
            <p>"🎶 OOOOOO-klahoma where the wind comes... 🎵"</p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src={endingScene}
              alt="Ending bye bye scene"
              style={imgStyle_outer}
              imgStyle={imgStyle_inner}
            />
            <p>Bye</p>
          </div>
        </div>
        <div style={{ maxWidth: 750, margin: "auto" }}>
          <Card className="paragraph-with-padding">
            <p>My first musical!</p>
            <h2>I am Slim 🕺</h2>
            <p>
              My director Mr. AC gave me the role of <strong>Slim</strong>, who
              is an energetic dude with a big voice and a friend of Will Parker.
              I'm guessing he made me act out Slim because I am actually slim.
            </p>
            <h2>VVIP seat for the live music 😎🎧</h2>
            <p>
              One of the best things of being part of this musical was that I
              could listen to the wonderful live orchestra & gorgeous voices
              right next to me. I experienced some sort of ecstasy when I heard
              the music live. The recorded ones (like{" "}
              <a
                href="https://www.instagram.com/p/CrTda2APii3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/p/CrTepTqsKe7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>
              ) sound good, but the live music can't compare with the recorded
              ones — it's just so much better!
            </p>
            <h2>What I learned</h2>
            <p>
              I learned that I don't like being someone I'm not. Acting is not
              my thing, but I also learned that <strong>music</strong> is
              definitely my thing. I started a new club where we can perform
              music in school during lunchtime, so{" "}
              <Link to="/logs/busking-club">check it out</Link> if you're
              interested.
            </p>
            <p style={{ textAlign: "end" }}>- Written on Jun. 19, 2023</p>
          </Card>
        </div>
        <div style={{ height: 100 }} />
      </LogsLayout>
    </>
  );
}

export default OklahomaMusical;
