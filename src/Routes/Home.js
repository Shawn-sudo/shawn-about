import React, { useEffect } from "react";
import Card from "../Components/Card";
// import * as THREE from "three";
import Wrapper from "../Components/Wrapper";
// import SmallTown from "../Components/3D";
//todo: put these in logs

const Home = () => {
  document.title = "Home | About Seihyun Lee";
  //structure of this page: as if My avatar is presentationing
  //There are many companies that say "We connect people!"
  //But, do they?
  //Instagram: Showing off to others, rather than being connected
  //            "Who is living a happier life?"
  //            pic: everybody smiling
  //Facebook: Tooooooooo public
  //            "Who has more friends??" "What post did u liked?" "What was the chat with u and Jacob about?" "Your account has been disabled. Upload your ID"
  //            eyes(like big brother), bugs
  //Snapchat: Streak Game
  //          🔥300: Best Friend
  //          🔥200: Best Friend
  //          🔥100: Best Friend
  //          🔥30: Close Friend
  //          🔥3: Friend

  //structure
  //  1. Projects
  //  1-1. Personal Projects
  //      Closquare: Moving a whole "Table" into a mobile device
  //          Used Flutter and Firebase
  //          --> Failed
  //      Atrable - 1: Sharing projects with others
  //          --> Failed
  //      Atrable - 2:
  //      Atrable: Audio based Social Media
  //  1-2. School Projects
  //      I-Research: About the relationship between the pandemic and depression (Mar - Apr, 2021)
  //      Karooni: Book Reading (To Kill a Mockingbird) (Apr - May, 2021)
  //  2. Diaries

  //School / App / Music / Log
  //School: Class / Club
  //App: About Atrable (about.atrable.com)
  //App --> Log: Show my dev history
  //Music: Just made a few melodies
  //    --> Log: What I've done / My recordings
  //Log: What I've done for App, Music, School, Club

  useEffect(() => {
    //Not related to the 3d thing
    // var windowHalfY = window.innerHeight / 2;
    // const homeElement = document.querySelector("#Home");
    // homeElement.focus();
    // const slide1CenterTitle = document.querySelector(
    //   "#slide0 #center-title-container"
    // );
    // let scrolledY = 0;
    // let scrolledYBefore = 0;
    // homeElement.addEventListener("scroll", (event) => {
    //   scrolledYBefore = scrolledY;
    //   scrolledY = homeElement.scrollTop;
    //   if (scrolledY < windowHalfY) {
    //     slide1CenterTitle.style.display = "block";
    //     slide1CenterTitle.style.opacity = 1 - scrolledY / windowHalfY;
    //   } else {
    //     slide1CenterTitle.style.display = "none";
    //   }
    // });
  });

  return (
    <div id="Home" tabIndex="-1">
      <div className="slide" id="slide0">
        <Wrapper>
          {/* <SmallTown /> */}
          <div
            style={{
              textAlign: "center",
            }}
            className="short_portfoliio"
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
              <img
                src="/assets/profile/profile.jpg"
                alt="my face"
                className="profile"
              />
            </div>
            <h2>Seihyun (Shawn) Lee</h2>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Interested in science
              </span>
              &nbsp;- especially in&nbsp;
              <span
                style={{
                  color: "#69f0ae",
                  fontWeight: "bold",
                }}
              >
                Chemistry
              </span>
              &nbsp;and&nbsp;
              <span
                style={{
                  color: "#69f0ae",
                  fontWeight: "bold",
                }}
              >
                Computer
              </span>
            </p>

            <div style={{ maxWidth: 800, margin: "auto" }}>
              <img
                src="/assets/atrable/Simulator_Screen_Shot_Feb7_1.png"
                alt="Simulator_Screen_Shot_Feb7_1"
                width="25%"
                style={{
                  borderRadius: "10px",
                }}
              />
              <img
                src="/assets/atrable/Simulator_Screen_Shot_Feb7_2.png"
                alt="Simulator_Screen_Shot_Feb7_1"
                width="25%"
                style={{
                  borderRadius: "10px",
                }}
              />
              <img
                src="/assets/atrable/Simulator_Screen_Shot_Feb7_3.png"
                alt="Simulator_Screen_Shot_Feb7_1"
                width="25%"
                style={{
                  borderRadius: "10px",
                }}
              />
              <img
                src="/assets/atrable/Simulator_Screen_Shot_Feb7_4.png"
                alt="Simulator_Screen_Shot_Feb7_1"
                width="25%"
                style={{
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              className="flexbox"
              style={{
                display: "flex",
                gap: "2%",
              }}
            >
              {/* <div
                className="item"
                style={{
                  marginLeft: "auto",
                }}
              >
                <Card>
                  <div
                    style={{
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="fas fa-atom"
                      style={{
                        color: "#69f0ae",
                        marginRight: 10,
                        fontSize: 25,
                        display: "inline",
                      }}
                    ></i>
                    <h3
                      style={{
                        display: "inline",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      Chemistry
                    </h3>
                  </div>
                  <p>
                    There are a lot of chemical phenomena that fascinate me.
                  </p>
                  <p>
                    For a simple example, I was pouring a handful of salt into
                    the water. I thought that it might be too much, but the
                    water dissolved the salt very well. I poured a little more
                    salt, and the water could still dissolve it. In my view,
                    water was unexceptionally good at dissolving salt.
                  </p>
                  <p>
                    Later, I learned that Oxygen has a higher electronegativity
                    than Hydrogen, which causes the electrons to tend to stay
                    near Oxygen. This eventually causes the polarity of the
                    water molecule, which makes water to be good at dissolving
                    ions and polar molecules.
                  </p>
                  <p>
                    As it is shown in my experience of pouring salt into the
                    water, many factors are related to a chemical reaction, even
                    if it looks simple. It is interesting for me to learn and
                    research how elements and compounds interact with each
                    other.
                  </p>
                </Card>
              </div> */}
              {/* <div
                className="item"
                style={{
                  marginRight: "auto",
                }}
              >
              
              </div> */}
            </div>
            <div
              style={{
                height: 60,
              }}
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Home;
