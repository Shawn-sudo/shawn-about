import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import Card from "../../components/Card";
import { StaticImage } from "gatsby-plugin-image";

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
              I wanted to do it in school during lunchtime, so I'm making
              Busking Club with my friend Ian. We recently did a demo busking,
              and it was great! Everybody loved the idea of seeing their friends
              singing some songs for them. Even the teachers loved it; one of
              them told us how great it is to bring positive energy to our
              community by busking during lunchtime. I think it's great too!
            </p>
            <p>
              I filmed some videos while doing the busking demo. I'll put it
              here once I edit and upload it.
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
              We'll be doing this every week starting from the next year. You
              can always join us if you're a THS student. Anyways, I hope it
              goes well!
            </p>
            <p style={{ textAlign: "end" }}>- Written on Jun. 19, 2023</p>
          </Card>
        </div>
      </LogsLayout>
    </>
  );
}

export default BuskingClub;
