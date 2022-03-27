import { Link } from "react-router-dom";
import Card from "../../Components/Card";

const InterestInComputersLog = () => {
  return (
    <div
      className="item"
      style={{
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        maxWidth: 750,
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
            className="fas fa-laptop-code"
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
            Computer
          </h3>
        </div>
        <p>
          I used to be interested in airplanes when I was 12. I tried to
          run&nbsp;
          <a
            href="https://www.x-plane.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            an airplane simulator
          </a>
          &nbsp;on my laptop, but it didn't work well: it took at least 20
          minutes to load the simulator because my computer was poor.
        </p>
        <p>
          Since then, I started to get interested in computers. I was interested
          in hardware at that time. I somewhat understood how the components of
          the computer interact. To understand those interactions in deep, I had
          to understand the software.
          {/* Mention that I've made a .pub file for this, in the log or smth */}
        </p>
        <p>
          I started with the most widely-used language,&nbsp;
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python
          </a>
          , to understand the basic concepts used in programming. I understood
          what class, function, variable, ... are while learning that language.
        </p>
        <p>
          Then, I wanted to build an app that can run on any platform.&nbsp;
          <a
            href="https://flutter.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flutter
          </a>
          &nbsp;was the exact cross-platform app framework for this. I
          learned&nbsp;
          <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
            Dart
          </a>
          &nbsp;to use Flutter. I used&nbsp;
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase
          </a>
          &nbsp;to build an audio-based social media service. I am planning to
          finish it till this summer (2022).
        </p>
        <Link to="/logs/atrable" className="learn-more">
          More Story &nbsp;
          <i className="fas fa-arrow-right"></i>
        </Link>
        <div style={{ height: 20 }} />
        <div>
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
        <p>
          I am also building my website (this one). Since Javascript with jsx is
          quite similar to Flutter codes, it wasn't that difficult to start
          coding with React. This website would be gradually developed as I keep
          doing activities.
        </p>
        <p>
          Also, there's actually no reason to make this simple portfolio website
          with the heavy framework React, but I just wanted to.
        </p>
      </Card>
    </div>
  );
};

export default InterestInComputersLog;
