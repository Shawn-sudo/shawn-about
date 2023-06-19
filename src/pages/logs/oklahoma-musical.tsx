import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import Card from "../../components/Card";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function OklahomaMusical() {
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
              src="../../assets/oklahoma-musical/IMG_2913.jpg"
              alt="My profile photo for the musical"
              style={{ width: "60vw", maxWidth: 300, margin: 5 }}
              imgStyle={{ borderRadius: 20 }}
            />
            <p>"Hi I'm Slim!"</p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src="../../assets/oklahoma-musical/DSC02321.jpg"
              alt="A scene from our musical"
              style={{ width: "60vw", maxWidth: 300, margin: 5 }}
              imgStyle={{ borderRadius: 20 }}
            />
            <p>
              <i>Kansas City</i>
            </p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src="../../assets/oklahoma-musical/DSC02333-2.jpg"
              alt="A scene from our musical"
              style={{ width: "60vw", maxWidth: 300, margin: 5 }}
              imgStyle={{ borderRadius: 20 }}
            />
            <p>
              <i>It's a Scandal! It's a Outrage!</i>
            </p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src="../../assets/oklahoma-musical/DSC02377.jpg"
              alt="A scene from our musical"
              style={{ width: "60vw", maxWidth: 300, margin: 5 }}
              imgStyle={{ borderRadius: 20 }}
            />
            <p>"🎶 OOOOOO-klahoma where the wind comes... 🎵"</p>
          </div>
          <div style={{ margin: "auto" }}>
            <StaticImage
              src="../../assets/oklahoma-musical/DSC02391.jpg"
              alt="Ending bye bye scene"
              style={{ width: "60vw", maxWidth: 300, margin: 5 }}
              imgStyle={{ borderRadius: 20 }}
            />
            <p>Bye</p>
          </div>
        </div>
        <div style={{ maxWidth: 700, margin: "auto" }}>
          <Card className="paragraph-with-padding">
            <p>My first musical!</p>
            <h2>I am Slim 🕺</h2>
            <p>
              My director Mr. AC gave me the role of <strong>Slim</strong>, who
              is an energetic dude with a big voice and a friend of Will Parker.
              I'm guessing that he made me act out Slim because I am literally
              slim.
            </p>
            <h2>VVIP seat for the live music 😎🎧</h2>
            <p>
              One of the best things of being part of this musical was that I
              could listen to the wonderful live orchestra & gorgeous voices
              right next to me. I experienced some sort of ecstasy when I heard
              the music live. The live music can't compare with the recorded
              ones like{" "}
              <a
                href="https://www.instagram.com/p/CrTda2APii3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this one
              </a>{" "}
              or{" "}
              <a
                href="https://www.instagram.com/p/CrTepTqsKe7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this one
              </a>{" "}
              — it's just so much better!
            </p>
            <h2>What I learned</h2>
            <p>
              I learned that acting is not my thing, but I also learned that{" "}
              <strong>music</strong> is definitely my thing. I started a new
              club where we can perform music during lunch time in school, so{" "}
              <Link to="/logs/busking-club">check it out</Link> if you're
              interested.
            </p>
          </Card>
        </div>
      </LogsLayout>
    </>
  );
}

export default OklahomaMusical;
