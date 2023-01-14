import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import "../../components/timeline.css";

export default function Logs_scratch_coding_dec_2022() {
  return (
    <>
      <title>Coding Class (Dec 2022) | About Seihyun Lee</title>

      <LogsLayout>
        <main>
          <div className="timeline">
            <div className="container right">
              <div className="content">
                <h2>Reflection</h2>
                <p>
                  The plan was to make some fun stuff together on Scratch.
                  Although I rushed a bit too much on the last day, it was a
                  nice experience for me to share the fun of coding with kids.
                </p>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Day 6: Make Esther & Youl's Idea</h2>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Day 5: Make Rachel's Idea</h2>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Day 4: What do you want to make?</h2>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Day 3: Games</h2>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Day 2: Christmas Cards</h2>
                {/*  */}
                {/* <h3>Christmas Cards</h3> */}
                <h3>
                  Make a card together with Scratch:{" "}
                  <a
                    href="https://scratch.mit.edu/projects/750126531/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Merry Christmas!
                  </a>
                </h3>
                <ul>
                  <li>
                    When you tap on the cat, it responds with sound and motions
                  </li>
                  <li>
                    Used <code>repeat</code>, <code>play sound</code>,{" "}
                    <code>turn __ degrees</code>, <code>wait __ seconds</code>,
                    and <code>say __ for __ seconds</code>
                  </li>
                </ul>
                <h3>
                  <a
                    href="https://scratch.mit.edu/explore/projects/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore other projects
                  </a>
                </h3>
                <a
                  href="https://docs.google.com/presentation/d/1NeagMoWSjM3SXi7H6M3DQRTbY7i1XIGDfdaGc2yQs-o/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  [2] Christmas Card (Slideshow)
                </a>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Day 1: Intro</h2>
                <h3>Explain what Scratch is</h3>
                <h3>Create Scratch account together</h3>
                <ul>
                  <li>I thought this would be super easy, but it wasn't :/</li>
                </ul>
                <h3>
                  Make a simple project together:{" "}
                  <a
                    href="https://scratch.mit.edu/projects/742761224/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Towards your mouse
                  </a>
                </h3>
                <ul>
                  <li>The cat moves towards your mouse</li>
                  <li>
                    Used <code>forever</code> block and some <code>Motion</code>{" "}
                    blocks
                  </li>
                </ul>
                <a
                  href="https://docs.google.com/presentation/d/1GOTz0O6pap4dxkVW3inMechCUedVLGSpMlB4I_9Rfyw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  [1] First day (Slideshow)
                </a>
              </div>
            </div>
          </div>
        </main>
      </LogsLayout>
    </>
  );
}
