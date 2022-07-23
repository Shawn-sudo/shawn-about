import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";

function InterestInComputersLog() {
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
              color: "var(--primary-color)",
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
          &nbsp;on my laptop, but it didn't work well; the screen was render
          like 1 frame per 3 seconds.
        </p>
        <p>
          I was searching up why this was not working. Since then, I started to
          get interested in computers, especially in hardwares. I somewhat
          understood how the components of the computer (CPU, RAM, GPU,
          mainboard (motherboard / logicboard), sound card, pci lanes for
          connections, I/O ports, ...) interact, but to deeply understand those
          interactions, I had to know the software, too.
          {/* Mention that I've made the computer guide pdf for this, in the log or smth */}
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
          , to understand the basic concepts in programming, such as class,
          variable, function, loops, ...
        </p>
        <p>
          Then, I wanted to build an app using the programming knowledge that I
          learned.{" "}
          <a
            href="https://flutter.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flutter
          </a>
          &nbsp;was the perfect framework for this, as it supports
          cross-platform app development. I learned&nbsp;
          <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
            Dart
          </a>
          &nbsp;to use Flutter. After a year of effort, developing it at least 4
          hours a day, I published the app, Atrable, on the Apple App Store.
        </p>
        <Link to="/logs/atrable" className="learn-more">
          More Story about Atrable&nbsp;
          <i className="fas fa-arrow-right"></i>
        </Link>
        <p>
          I am also building my website (this one). This website would be
          gradually developed as I keep doing activities 💪.
        </p>
      </Card>
    </div>
  );
}

export default InterestInComputersLog;
