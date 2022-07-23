import React from "react";
import logo from "../../appIconRounded.svg";
import "./Timeline.css";

function AtrableLog() {
  document.title = "Log - Atrable | About Seihyun Lee";

  return (
    <>
      {/* <button
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          Go to the beginning
        </button> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
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
        <div className="container left">
          <div className="content">
            <h2>Jul 2022</h2>
            <h3>
              Published on{" "}
              <a
                href="https://get.atrable.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Apple App Store
              </a>
            </h3>
            <h3>Attempt to Advertise </h3>
            <p>
              I made a video to submit this app to Congressional App Challenge
              and advertise it at once. I was trying to kill two "birds" with
              one stone, but I think I lost both birds; I was being too informal
              to submit it to the contest, but the video was quite boring to be
              a good advertisement. I'm going to refilm it 😼
            </p>
            <h3>Fix bugs</h3>
            <p>There were a lot a lot 😩😵‍💫</p>
            <h3>Change the catchphrase</h3>
            <p>
              It used to be "Share your day with audio and video." I thought it
              was too weak, so I changed it to "Your not-so-special moments,
              share it on Atrable"
            </p>
            <div>
              <h3>App Details Image</h3>
              <p>I made these pictures using Vectornator.</p>
              <img
                src="/assets/atrable/Atrable App Image 1.png"
                alt="Your not-so-special moments,"
                width="50%"
                style={{
                  borderRadius: "20px 0px 0px 20px",
                }}
              />
              <img
                src="/assets/atrable/Atrable App Image 2.png"
                alt="Share it on Atrable"
                width="50%"
                style={{
                  borderRadius: "0px 20px 20px 0px",
                }}
              />
              <img
                src="/assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.24.28.png"
                alt="Atrable app detail - share post"
                width="33.33%"
                style={{
                  borderRadius: 20,
                }}
              />
              <img
                src="/assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 20.47.25.png"
                alt="Atrable app detail - my page"
                width="33.33%"
                style={{
                  borderRadius: 20,
                }}
              />
              <img
                src="/assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.19.37.png"
                alt="Atrable app detail - post details"
                width="33.33%"
                style={{
                  borderRadius: 20,
                }}
              />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Mar-Jun 2022: Finalizing App</h2>
            <h3>Play Audios</h3>
            <p>
              Using <code>ManageAudioPlayers</code> (I made it!), each page can
              manage audio plays.
            </p>
            <h3>Suggested Posts</h3>
            <p>
              In <code>SuggestedPosts</code> page, random public posts are
              displayed.
            </p>
            <p>Audios are automatically played as the page is scrolled.</p>
            <h3>Post Details</h3>
            <p>
              In <code>PostDetailsPage</code>, the uploader can see the details
              of the post (views, likes, and comments). Comments are accessable
              here.
            </p>
            <h3>Post Likes & Comments & Views</h3>
            <p>People can like a post by pressing the ❤️ button.</p>
            <p>
              People can comment about a post on the linked{" "}
              <code>PostCommentChatroom</code>, which is a public chatroom for
              anyone.
            </p>
            <p>
              View would be counted when more than 1/3 or 10 sec of the audio is
              played.
            </p>
            <h3>
              Add <code>Share With Friends</code>
            </h3>
            <p>
              In <code>SharePost</code>, replace <code>send to</code> feature,
              which used to send post itself through chatroom, with{" "}
              <code>Share With Friends</code>.
            </p>
            <h3>Chatroom Design Change</h3>
            <p>Show the time when the message sent, with a better design.</p>
            <p>
              If it's not a <code>DMChatroom</code>, show people's profiles.
            </p>
            <p>Indicate sending with shimmer effect.</p>
            <h3>Chatroom Pagination</h3>
            <p>
              Much better pagination: fetch the newest message, use{" "}
              <code>
                <a href="https://pub.dev/packages/infinite_scroll_pagination">
                  infinite_scroll_pagination
                </a>
              </code>{" "}
              to fetch older messages and use FirebaseFirestore realtime update
              feature to fetch newer messages in real time.
            </p>
            <h3>Etc</h3>
            <p>
              Continue with Apple when signing in/up, don't force/require people
              to verify email: only show a popup, allow users to check past
              records locally, set correct keyboard text capitalization
              settings, dark mode, ...
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>Jan-Feb 2022: Audio!</h2>
            <p>
              Implemented audio-related features: sharing an audio post, sending
              an audio message, playing those in a chatroom, etc.,
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
              I made basic features that a social media (SNS specifically)
              should provide, such as friend management, viewing others'
              profiles, and sending chat messages.
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
                href="https://sites.google.com/view/atrable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main Page
              </a>
              ,&nbsp;
              <a
                href="https://sites.google.com/view/aboutatrable"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Page
              </a>
              , and&nbsp;
              <a
                href="https://sites.google.com/view/getatrable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Page
              </a>
              &nbsp;to explain my idea of the app using Google Sites. You can
              see that the app used to be quite different from now.
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
}

export default AtrableLog;
