import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import "../../components/styles/timeline.css";
import { StaticImage } from "gatsby-plugin-image";
import Card from "../../components/Card";

const performanceThumbnail = "../../assets/submerged-under-snow/IMG_4297.jpg";

function SubmergedUnderSnow() {
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
      <title>Submerged Under Snow | About Seihyun Lee</title>
      <LogsLayout>
        <main>
          <h1>My new single!!</h1>
          {/* TODO: better sound engineering  */}
          <Card className="paragraph-with-padding">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1704297975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
              style={{
                fontSize: 10,
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100,
              }}
            >
              <a
                href="https://soundcloud.com/seihyunlee"
                title="Seihyun"
                target="_blank"
                style={{
                  color: "#cccccc",
                  textDecoration: "none",
                }}
              >
                Seihyun
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/seihyunlee/submerged-under-snow"
                title="Submerged Under Snow"
                target="_blank"
                style={{
                  color: "#cccccc",
                  textDecoration: "none",
                }}
              >
                Submerged Under Snow
              </a>
            </div>
            <iframe
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/track/62Cn6C3dJNJdD4r8En9CxG?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <p>
              I made this song for Mr. Whitehead's AP Lang class after reading{" "}
              <strong>Ethan Frome</strong> by Edith Wharton!
            </p>
            <p style={{ color: "var(--hint-color)" }}>
              I don't have expensive recording equipment, so the music doesn't
              sound the best. Re-recording & re-mastering might improve the
              sound quality, but I guess I'm a bit too busy for that...
            </p>
            <h2>Quick Explanation</h2>
            <h3>Love In Winter = Christmas</h3>
            <p>
              Ethan Frome is a love story of Ethan and Mattie happening in
              Starkfield during the snowy winter time. A love story taking place
              in a cold village… doesn't that sound familiar? Yes, it's just
              like Christmas! I used chords that reminded me of Christmas to
              give the contrasting feeling of warm love and cold Christmas
              weather.
            </p>

            <h3>Freshness & Crunchiness of Winter Snow</h3>
            <p>
              I used EQ to highlight the higher pitch (around 1500Hz or above).
              This emphasizes the “th” / “sh” / “ch” / “s” / ... sound, giving
              the feeling of the crunchy snow.
            </p>

            <h3>Roaring Regret</h3>
            <p>
              No spoilers, but... something sad happens to the main characters,
              so I expressed the regrets they would've felt through the roaring
              bass sound.
            </p>

            <h3>Smash!</h3>
            <p>
              Throughout the story, the narrator tries to figure out what the
              "smash-up" is. I put a smash sound on the drum beat to express the
              "smash-up".
            </p>

            <h3>Simple Lyrics</h3>
            <p>
              I wrote generalizable, simple lyrics so that not only Ethan and
              Mattie, but anybody who's going through a difficult time with
              their friends can understand and relate with the song.
            </p>
          </Card>
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <h2>Winter break</h2>
                <h4 style={{ color: "var(--hint-color)" }}>
                  Dec 23, 2023 - Jan 1, 2024
                </h4>
                <p>
                  I made some final edits and released the single through
                  DistroKid!
                </p>
                <p>
                  Check this{" "}
                  <a
                    href="https://distrokid.com/hyperfollow/seihyun/submerged-under-snow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hyperfollow link
                  </a>
                  .
                </p>
                <p>
                  I used a random cool photo that I took on a NJ highway as my
                  album cover photo. I'm going to replace that once I film the
                  music video with David.
                </p>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Performance</h2>
                <h4 style={{ color: "var(--hint-color)" }}>Nov 30, 2023</h4>
                <p>
                  I sang in class using the equipment that I got for the busking
                  club lol. I'll post the video one day.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <StaticImage
                    src={performanceThumbnail}
                    alt="Video corruption screenshot 1"
                    height={400}
                    style={imgStyle_outer}
                    imgStyle={imgStyle_inner}
                  />
                </div>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>The due date</h2>
                <p>is the day that I'm most productive 😼</p>
                <p style={{ color: "var(--hint-color)" }}>
                  (actually had one day extension)
                </p>
                <h3>Nov 29 Version</h3>
                <p>
                  I finished writing the lyrics and melody for the second part
                  as quickly as possible. I was rushing too much, so my voice
                  quality isn't the best lol.
                </p>
                <>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1704756084&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#cccccc",
                      lineBreak: "anywhere",
                      wordBreak: "normal",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontFamily:
                        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                      fontWeight: 100,
                    }}
                  >
                    <a
                      href="https://soundcloud.com/seihyunlee"
                      title="Seihyun"
                      target="_blank"
                      style={{
                        color: "#cccccc",
                        textDecoration: "none",
                      }}
                    >
                      Seihyun
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://soundcloud.com/seihyunlee/submerged-under-snow-nov-29-2023-version"
                      title="Submerged Under Snow"
                      target="_blank"
                      style={{
                        color: "#cccccc",
                        textDecoration: "none",
                      }}
                    >
                      Submerged Under Snow (Nov 29, 2023 Version)
                    </a>
                  </div>
                </>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Fall break</h2>
                <h4 style={{ color: "var(--hint-color)" }}>
                  Nov 23 - 26, 2023
                </h4>
                <h3>Nov 26 Version</h3>
                <p>
                  I wrote some lyrics, made some melodies, and recorded them.
                </p>
                <p>
                  The lyrics originally started with "We're under the snow," but
                  I changed it to "Submerged under snow" because that sounds a
                  bit more interesting.
                </p>
                <>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1704749967&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#cccccc",
                      lineBreak: "anywhere",
                      wordBreak: "normal",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontFamily:
                        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                      fontWeight: 100,
                    }}
                  >
                    <a
                      href="https://soundcloud.com/seihyunlee"
                      title="Seihyun"
                      target="_blank"
                      style={{
                        color: "#cccccc",
                        textDecoration: "none",
                      }}
                    >
                      Seihyun
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://soundcloud.com/seihyunlee/submerged-under-snow-nov-26-2023-version"
                      title="Submerged Under Snow"
                      target="_blank"
                      style={{
                        color: "#cccccc",
                        textDecoration: "none",
                      }}
                    >
                      Submerged Under Snow (Nov 26, 2023 Version)
                    </a>
                  </div>
                </>

                {/* Under the Snow... */}
                <h3>Nov 23 Version</h3>
                <p>Basic synth chords, bass, and drum beat!</p>
                <p>
                  I made the chords a while ago using Logic Pro{" "}
                  <span style={{ color: "var(--hint-color)" }}>
                    (trial version 🤫)
                  </span>
                  . The combination of the chords gave me a winter feeling, so I
                  chose to use it for this project.
                </p>
                <>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1704744405&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#cccccc",
                      lineBreak: "anywhere",
                      wordBreak: "normal",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontFamily:
                        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                      fontWeight: 100,
                    }}
                  >
                    <a
                      href="https://soundcloud.com/seihyunlee"
                      title="Seihyun"
                      target="_blank"
                      style={{
                        color: "#cccccc",
                        textDecoration: "none",
                      }}
                    >
                      Seihyun
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://soundcloud.com/seihyunlee/submerged-under-snow-nov-23-2023-version"
                      title="Submerged Under Snow"
                      target="_blank"
                      style={{
                        color: "#cccccc",
                        textDecoration: "none",
                      }}
                    >
                      Submerged Under Snow (Nov 23, 2023 Version)
                    </a>
                  </div>
                </>
              </div>
            </div>
          </div>
        </main>
        {/* Going to record music video with David soon */}
      </LogsLayout>
    </>
  );
}

export default SubmergedUnderSnow;
