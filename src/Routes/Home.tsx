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
                  color: "var(--primary-color)",
                  fontWeight: "bold",
                }}
              >
                Computer
              </span>
              &nbsp;and&nbsp;
              <span
                style={{
                  color: "var(--primary-color)",
                  fontWeight: "bold",
                }}
              >
                Chemistry
              </span>
            </p>
            <Link
              to="/logs/atrable"
              style={{
                textDecoration: "none",
                borderRadius: 20,
              }}
            >
              <Card>
                <div className="portfolio-item_atrable">
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
                    <h4
                      style={{
                        color: "var(--secondary-color)",
                      }}
                    >
                      Audio Required!
                    </h4>
                    <h3 className="learn-more">
                      More Story &nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </h3>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src="/assets/atrable/Atrable App Image 1.png"
                      alt="Your not-so-special moments,"
                      width="25%"
                      style={{
                        borderRadius: "15px 0px 0px 15px",
                      }}
                    />
                    <img
                      src="/assets/atrable/Atrable App Image 2.png"
                      alt="Share it on Atrable"
                      width="25%"
                      style={{
                        borderRadius: "0px 15px 15px 0px",
                      }}
                    />
                    <img
                      src="/assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 20.47.25.png"
                      alt="Atrable app detail image - my page"
                      width="25%"
                      style={{
                        borderRadius: 15,
                      }}
                    />
                    <img
                      src="/assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.19.37.png"
                      alt="Atrable app detail image - post details"
                      width="25%"
                      style={{
                        borderRadius: 15,
                      }}
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
        </Wrapper>
      </div>
    </div>
  );
};

export default Home;
