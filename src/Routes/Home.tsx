import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Wrapper from "../Components/Wrapper";

const Home = () => {
  document.title = "Home | About Seihyun Lee";
  return (
    <div id="Home" tabIndex={-1}>
      <div className="slide" id="slide0">
        <Wrapper>
          <div
            style={{
              textAlign: "center",
              maxWidth: 1000,
              margin: "auto",
            }}
            className="short_portfolio"
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
            <Card>
              <div className="portfolio-item_atrable">
                <div style={{ padding: 20 }}>
                  <h1
                    style={{
                      color: "white",
                      fontSize: 75,
                      textShadow: "0px 5px 15px rgba(112, 144, 156, 0.3)",
                    }}
                  >
                    Atrable
                  </h1>
                  <h4 style={{ margin: 0, padding: 0 }}>Audio Required!</h4>
                  <p>Share your not-so-special moments</p>
                  <Link to="/logs/atrable" className="learn-more">
                    More Story &nbsp;
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  <img
                    src="/assets/atrable/Simulator_Screen_Shot_Feb7_1.png"
                    alt="Simulator_Screen_Shot_Feb7_1"
                    width="25%"
                    style={{
                      borderRadius: 15,
                    }}
                  />
                  <img
                    src="/assets/atrable/Simulator_Screen_Shot_Feb7_2.png"
                    alt="Simulator_Screen_Shot_Feb7_1"
                    width="25%"
                    style={{
                      borderRadius: 15,
                    }}
                  />
                  <img
                    src="/assets/atrable/Simulator_Screen_Shot_Feb7_3.png"
                    alt="Simulator_Screen_Shot_Feb7_1"
                    width="25%"
                    style={{
                      borderRadius: 15,
                    }}
                  />
                  <img
                    src="/assets/atrable/Simulator_Screen_Shot_Feb7_4.png"
                    alt="Simulator_Screen_Shot_Feb7_1"
                    width="25%"
                    style={{
                      borderRadius: 15,
                    }}
                  />
                </div>
              </div>
            </Card>
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
