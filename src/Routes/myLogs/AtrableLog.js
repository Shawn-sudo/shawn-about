import appIconRounded from "../../appIconRounded.svg";
import "./Timeline.css";

const AtrableLog = () => {
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
              <li>Viewing audio posts</li>
              <li>Code stablization: especially for Profile.dart</li>
            </ul>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Jan-Feb 2022</h2>
            <p>
              Adding audio-related features: sending an audio message, sharing
              an audio post, playing those, etc.,
            </p>
            {/* todo: show those features */}
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Nov - Dec 2021</h2>
            <p>
              I made basic features that a social media should provide, such as
              friend management, viewing others' profiles, sending text
              messages, etc.,
            </p>

            <img
              src="/assets/atrable/IMG_2848.png"
              alt="IMG_2848"
              width="50%"
              style={{
                borderRadius: 20,
              }}
            />

            <img
              src="/assets/atrable/IMG_2850.png"
              alt="IMG_2850"
              width="50%"
              style={{
                borderRadius: 20,
              }}
            />

            <img
              src="/assets/atrable/IMG_2849.png"
              alt="IMG_2849"
              width="50%"
              style={{
                borderRadius: 20,
              }}
            />
            <img
              src="/assets/atrable/IMG_2851.png"
              alt="IMG_2851"
              width="50%"
              style={{
                borderRadius: 20,
              }}
            />
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Oct 2021</h2>
            <p>I got the idea of sharing audio with friends as a post.</p>
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
              &nbsp;to introduce the app using Google Sites.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Aug 2021</h2>
            <p>
              I built an app where people can share a post and chat directly
              about it.
            </p>
            <img
              src="/assets/atrable/Aug26_2021.png"
              alt="Aug26_2021"
              width="50%"
              style={{
                // padding: 7.5,
                borderRadius: 10,
              }}
            />
            <img
              src="/assets/atrable/Aug26_2021_ViewResponses.png"
              alt="Aug26_2021_ViewResponses"
              width="50%"
              style={{
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AtrableLog;
