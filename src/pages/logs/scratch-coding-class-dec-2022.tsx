import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import "../../components/styles/timeline.css";
import Card from "../../components/Card";

const day4_rachel =
  "../../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 6.51.04 PM.png";
const day4_youl =
  "../../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 6.50.41 PM.png";
const day5_dontGetHitBySnow =
  "../../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 8.19.41 PM.png";
const day6_carAndGravity =
  "../../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 7.14.12 PM.png";
const day6_superMarioSimpleRemix =
  "../../assets/scratch-coding-class-dec-2022/Screenshot 2023-01-14 at 7.12.41 PM.png";

export default function Logs_scratch_coding_dec_2022() {
  return (
    <>
      <title>Scratch Coding Class (Dec 2022) | About Seihyun Lee</title>

      <LogsLayout>
        <main>
          <div
            style={{
              maxWidth: 750,
              margin: "auto",
            }}
          >
            <Card className="paragraph-with-padding">
              <h2>Reflection</h2>
              <p>
                <strong>It was quite difficult </strong>
                than I expected it to be.
              </p>
              <dl>
                <p>
                  My students were little kids (1st-4th grade), but we tried to
                  make something that was too advanced for our level.
                </p>
                <p>
                  <strong>On the 1st day</strong>, I asked my students to
                  explore{" "}
                  <a
                    href="https://scratch.mit.edu/explore/projects/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    the Scratch website
                  </a>{" "}
                  and pick what they would like to make. Of course, the projects
                  on that page are the most advanced ones, involving many math
                  and physics concepts that my students weren't familiar with. I
                  should've gone with more of the easier ones before showing
                  that page.
                </p>
                <p>
                  <strong>On the 4th day</strong>, I asked my students to come
                  up with their own project idea. I thought this would be a
                  great way to let my students expand their creativity, but
                  there was one problem: they all wanted to make something too
                  advanced for our level. Most of my students had a hard time
                  implementing it because they weren't familiar with the math &
                  physics concepts that were necessary to know to make it. I
                  also had a hard time, because I had to teach them... quite a
                  lot. We all suffered, but I couldn't revert the plan because I
                  already promised my students that we'll bring all of their
                  ideas to come true 😎😬.
                </p>
                <p>
                  I should've acknowledged that my students needed help with the
                  fundamental concepts before starting to implement advanced
                  ones.
                </p>
                <p>
                  In the future, I'll use this course plan to teach higher
                  grades (4th-6th grade I guess). For lower grades, I'm just
                  going to make stuff together somewhere like our school library
                  tutoring club.
                </p>
              </dl>
              <p style={{ textAlign: "end" }}>- Written on Jun. 18, 2023</p>
            </Card>
          </div>
          <div className="timeline">
            <div style={{ height: 50 }} />
            <div className="container left">
              <div className="content">
                <h2>Day 6: Make Esther & Youl's Idea</h2>
                <h4>Jan 14, 2023</h4>

                <a
                  href="https://scratch.mit.edu/projects/788031574/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Super Mario Simple Remix</h3>

                  <StaticImage
                    src={day6_superMarioSimpleRemix}
                    alt="screenshot of the game"
                    imgStyle={{ borderRadius: 20 }}
                  />
                </a>
                <a
                  href="https://scratch.mit.edu/projects/775118887/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Car and Gravity</h3>
                  <StaticImage
                    src={day6_carAndGravity}
                    alt="screenshot of the game"
                    imgStyle={{ borderRadius: 20 }}
                  />
                </a>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Day 5: Make Rachel's Idea</h2>
                <h4>Jan 7, 2023</h4>
                <a
                  href="https://scratch.mit.edu/projects/780905457/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Don't get hit by snow</h3>
                  <StaticImage
                    src={day5_dontGetHitBySnow}
                    alt="screenshot of the game"
                    imgStyle={{ borderRadius: 20 }}
                  />
                </a>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Day 4: What do you want to make?</h2>
                <h4>Dec 24, 2022</h4>
                <p>Come up with one thing that you want to make together</p>
                <h3>Youl: Remix Mario</h3>
                <StaticImage
                  src={day4_youl}
                  alt="Sketch of super mario question block"
                  imgStyle={{ borderRadius: 20 }}
                />
                <h3>Rachel: Avoid Snow</h3>
                <StaticImage
                  src={day4_rachel}
                  alt="Sketch of avoiding snow & snowman game"
                  imgStyle={{ borderRadius: 20 }}
                />
                <h3>Esther: wanted a flying car (I forgot to take a photo)</h3>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Day 3: Games</h2>
                <h4>Dec 17, 2022</h4>
                <h3>
                  <a
                    href="https://scratch.mit.edu/explore/projects/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore other projects
                  </a>{" "}
                  and remake the Christmas Card:{" "}
                  <a
                    href="https://scratch.mit.edu/projects/774990535/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Merry Chritmas (2)
                  </a>
                </h3>
                <h3>
                  Make a game together:{" "}
                  <a
                    href="https://scratch.mit.edu/projects/752460875/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Don't get hit by poop
                  </a>
                </h3>
                <ul>
                  <li>
                    I loved the original game (
                    <a
                      href="https://scratch.mit.edu/projects/3053248/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      똥피하기
                    </a>
                    ) when I was learning Scratch in Korea few years ago. I made
                    a somewhat easier & simpler version of it.
                  </li>
                  <li>
                    However, as we started making the code together, my students
                    looked like 😵‍💫. I'll come up with a more interesting class
                    next time.
                  </li>
                </ul>

                <a
                  href="https://docs.google.com/presentation/d/1WJ4iCyi-Us-IbaCAYCpRkiMUL-owwy5hf9M1BzCigXw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  [3] Games (Slideshow)
                </a>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Day 2: Christmas Cards</h2>
                <h4>Dec 10, 2022</h4>
                <h3>
                  Make a card together with Scratch:{" "}
                  <a
                    href="https://scratch.mit.edu/projects/750126531/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Merry Christmas! (v1)
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
                <h4>Dec 3, 2022</h4>
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
            <div style={{ height: 100 }} />
          </div>
        </main>
      </LogsLayout>
    </>
  );
}
