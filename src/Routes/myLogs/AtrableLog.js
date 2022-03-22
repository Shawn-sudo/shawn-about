import appIconRounded from "../../appIconRounded.svg";
import "./Timeline.css";

const AtrableLog = () => {
  document.title = "Log - Atrable | About Seihyun Lee";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={appIconRounded}
          alt="logo"
          height="30"
          style={{
            padding: 7.5,
            paddingLeft: 15,
            display: "inline",
          }}
        />
        <h3
          style={{
            display: "inline",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          Atrable
        </h3>
      </div>

      <div className="timeline">
        <div className="container right">
          <div className="content">
            <h2
              style={{
                color: "#fdd835",
              }}
            >
              TO-DO
            </h2>
            <ul>
              <li>View / play audio posts</li>
            </ul>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Jan-Feb 2022</h2>
            <p>
              Added audio-related features: sending an audio message, sharing an
              audio post, playing those in a chatroom, etc.,
            </p>
            <img
              src="/assets/atrable/Simulator_Screen_Shot_Feb7_1.png"
              alt="Simulator_Screen_Shot_Feb7_1"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/Simulator_Screen_Shot_Feb7_2.png"
              alt="Simulator_Screen_Shot_Feb7_1"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/Simulator_Screen_Shot_Feb7_3.png"
              alt="Simulator_Screen_Shot_Feb7_1"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/Simulator_Screen_Shot_Feb7_4.png"
              alt="Simulator_Screen_Shot_Feb7_1"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Nov - Dec 2021</h2>
            <p>
              I made basic features that a social media should provide, such as
              friend management, viewing others' profiles, sending text
              messages.
            </p>
            <img
              src="/assets/atrable/IMG_2848.png"
              alt="IMG_2848"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/IMG_2850.png"
              alt="IMG_2850"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/IMG_2849.png"
              alt="IMG_2849"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/IMG_2851.png"
              alt="IMG_2851"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Oct 2021</h2>
            <p>
              I got the idea of the&nbsp;
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                audio
              </span>
              -based social media.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Aug - Sep 2021</h2>
            <p>
              I made&nbsp;
              <a
                href="https://intro.chat.atrable.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main Page
              </a>
              ,&nbsp;
              <a
                href="https://about.chat.atrable.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Page
              </a>
              , and&nbsp;
              <a
                href="https://get.chat.atrable.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Page
              </a>
              &nbsp;to explain my idea of the app using Google Sites
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Jan - Aug 2021</h2>
            <p>
              I built an app by viewing tutorials in YouTube, reading
              official/unofficial Flutter documents, and reading questions &
              answers in Stack Overflow. The app allows people to share a post
              and chat directly about it.
            </p>
            <img
              src="/assets/atrable/Aug26_2021_ViewResponses.png"
              alt="Aug26_2021_ViewResponses"
              width="50%"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/assets/atrable/Aug26_2021.png"
              alt="Aug26_2021"
              width="50%"
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AtrableLog;
