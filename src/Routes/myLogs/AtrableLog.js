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
              I made basic features that a social media (SNS specifically)
              should provide, such as friend management, viewing others'
              profiles, sending text messages.
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
              see that the app used to have different characteristics.
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
