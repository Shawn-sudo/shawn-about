import React from "react";
import logo from "../../assets/appIconRounded.svg";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../../components/timeline.css";

function AtrableLog() {
  return (
    <>
      <title>Developing Atrable | About Seihyun Lee</title>
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

      <LogsLayout>
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
        <main>
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <h2>Sep - Oct 2022: Changes for v1.2.0</h2>
                <h3>"Post" → "Diary"</h3>
                <p>
                  Uploaded audios were being called "Audio Post", but the word
                  "diary" fits better than "post".
                </p>
                <p>
                  When I say it's a "post", it gives me a feeling of disclosing
                  myself to the public. It isn't wrong, but the audios are more
                  daily, personal, reflective, which are closer to diaries.
                </p>
                <h3>Post + Chat</h3>
                <p>
                  I started to think that comments are not for diaries after
                  changing the wordings. Through comments, you literally
                  "comment" on others. This wouldn't be desirable for an
                  uploader who just wants to record their day.
                </p>
                <p>
                  Changing the preexisting codes for direct messages a bit, you
                  can send your post to your friends and reply to friends'
                  posts.
                </p>
                <p>Post comments are deprecated.</p>
                <h3>Post Visibility Setting</h3>
                <p>
                  The old db structure for post visibility settings didnn't make
                  sense, so I made some changes. It was quite a huge change.
                </p>
                <h3>Found some Bugs</h3>
                <a
                  href="https://github.com/firebase/flutterfire/issues/9457"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐛 [cloud_firestore] collectionGroup using get() throws
                  [cloud_firestore/unavailable] The service is currently
                  unavailable. #9457
                </a>
                <br />
                <br />
                <a
                  href="https://github.com/fluttercommunity/plus_plugins/issues/1053"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  share_plus Disable touch input on share screen open #1053
                </a>
                <p>(Nobody except the manager seems to be interested tho)</p>
                <h3>New App Details Image</h3>
                <p>
                  I thought the old one (from Aug 2022) isn't really appealing,
                  so I made some modifications.
                </p>
                <div style={{ display: "flex" }}>
                  <StaticImage
                    src="../../assets/atrable/v1.2.0/iPhone_6.5/record_audio_diary.png"
                    alt="Your not-so-special moments,"
                    imgStyle={{
                      borderRadius: "20px 0px 0px 20px",
                    }}
                  />
                  <StaticImage
                    src="../../assets/atrable/v1.2.0/iPhone_6.5/send_to_friends.png"
                    alt="Share it on Atrable"
                    imgStyle={{
                      borderRadius: "0px 20px 20px 0px",
                    }}
                  />
                </div>
                <h3>v1.1.2 release</h3>
                <p>I released v1.1.2 (Aug 2022 works) on App Store. </p>
                <p>
                  My Android friends also want to get this app, so I gotta
                  release it on the Play Store too.
                </p>
              </div>
            </div>

            <div className="container right">
              <div className="content">
                <h2>Aug 2022: Changes for v1.1.2</h2>
                <h3>Post Carousel</h3>
                <p>
                  Slide the post to listen to the uploader's previous / next
                  post
                </p>
                <p>This lets you see the full story of a post</p>
                <h3>Post Comments Design Change</h3>
                <p>Comments look more like a single chat thread.</p>
                <h3>New App Details Image</h3>
                <p>
                  I thought the old one (from Jul 2022) isn't really appealing,
                  so I made some modifications.
                </p>
                <div style={{ display: "flex" }}>
                  <StaticImage
                    src="../../assets/atrable/v1.1.2/iPhone_6.5/Atrable App Image 1.png"
                    alt="Your not-so-special moments,"
                    imgStyle={{
                      borderRadius: "20px 0px 0px 20px",
                    }}
                  />
                  <StaticImage
                    src="../../assets/atrable/v1.1.2/iPhone_6.5/Atrable App Image 2.png"
                    alt="Share it on Atrable"
                    imgStyle={{
                      borderRadius: "0px 20px 20px 0px",
                    }}
                  />
                </div>
              </div>
            </div>

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
                <h3>Tried to Advertise </h3>
                <p>
                  I made a video to submit this app to Congressional App
                  Challenge and advertise it at once. I was trying to kill two
                  "birds" with one "stone", but I think I lost both birds; I was
                  being too informal to submit it to the contest, but the video
                  was quite boring to be a good advertisement. I'm going to
                  refilm it 😼
                </p>
                <h3>Change the Catchphrase</h3>
                <p>
                  It used to be "Share your day with audio and video." I thought
                  it was too wordy, so I changed it to "Your not-so-special
                  moments, share it on Atrable"
                </p>
                <div>
                  <h3>App Details Image</h3>
                  <p>I made these pictures using Vectornator.</p>
                  <StaticImage
                    src="../../assets/atrable/Atrable App Image 1.png"
                    alt="Your not-so-special moments,"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: "20px 0px 0px 20px" }}
                  />
                  <StaticImage
                    src="../../assets/atrable/Atrable App Image 2.png"
                    alt="Share it on Atrable"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: "0px 20px 20px 0px" }}
                  />
                  <StaticImage
                    src="../../assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.24.28.png"
                    alt="Atrable app detail - share post"
                    style={{ width: "33.33%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src="../../assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 20.47.25.png"
                    alt="Atrable app detail - my page"
                    style={{ width: "33.33%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src="../../assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.19.37.png"
                    alt="Atrable app detail - post details"
                    style={{ width: "33.33%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                </div>
                <h3>Changes on Fundamental Features</h3>
                <ul>
                  <li>Replace likes with emoji reactions</li>
                  <dl>
                    "Likes" give me a feeling that I should post something
                    "likeable" (or smth that can be loved by the public). I
                    wanted to feel free to record and share whatever I wanted
                    to, and emoji lets reactions with more diverse emotions.
                  </dl>
                  <li>
                    Replace <code>Share With Friends</code> with{" "}
                    <code>OnlyFriendsPost</code>
                  </li>
                  <dl>
                    The old post visibility settings with{" "}
                    <code>Share With Friends</code> didn't make sense, so I
                    replaced it with <code>OnlyFriendsPost</code>s instead.
                  </dl>
                  <dl>
                    So now, there are 2 type of posts: <code>PublicPost</code>{" "}
                    and <code>OnlyFriendsPost</code>. Anybody can view a{" "}
                    <code>PublicPost</code>, and only friends can view an{" "}
                    <code>OnlyFriendsPost</code>.
                  </dl>
                </ul>
                <h3>Fix Bugs</h3>
                <p>There were a lot a lot 😩😵‍💫</p>
                <h3>Minor Changes on v1.1.0 </h3>
                <p>(David strongly suggested)</p>
                <ul>
                  <li>Smoother audio player seekbar</li>
                  <li>Crop profile photo when setting it</li>
                </ul>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Mar-Jun 2022: Finalizing App</h2>
                <h3>Play Audios</h3>
                <p>
                  Using <code>ManageAudioPlayers</code> (I made it!), each page
                  can manage audio plays.
                </p>
                <h3>Suggested Posts</h3>
                <p>
                  In <code>SuggestedPosts</code> page, random public posts are
                  displayed.
                </p>
                <p>Audios are automatically played as the page is scrolled.</p>
                <h3>Post Details</h3>
                <p>
                  In <code>PostDetailsPage</code>, the uploader can see the
                  details of the post (views, likes, and comments). Comments are
                  accessable here.
                </p>
                <h3>Post Likes & Comments & Views</h3>
                <p>You can like a post by pressing the ❤️ button.</p>
                <p>
                  You can comment about a post on the linked{" "}
                  <code>PostCommentChatroom</code>, which is a public chatroom
                  for anyone.
                </p>
                <p>
                  View would be counted when more than 1/3 or 10 sec of the
                  audio is played.
                </p>
                <h3>
                  Add <code>Share With Friends</code>
                </h3>
                <p>
                  In <code>SharePost</code>, replace <code>send to</code>{" "}
                  feature, which used to send post itself through chatroom, with{" "}
                  <code>Share With Friends</code>.
                </p>
                <h3>Chatroom Design Change</h3>
                <p>
                  Show the time when the message sent, with a better design.
                </p>
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
                  to fetch older messages and use FirebaseFirestore realtime
                  update feature to fetch newer messages in real time.
                </p>
                <h3>Etc</h3>
                <p>
                  Continue with Apple when signing in/up, don't force/require
                  people to verify email: only show a popup, allow users to
                  check past records locally, set correct keyboard text
                  capitalization settings, dark mode, ...
                </p>
              </div>
            </div>

            <div className="container left">
              <div className="content">
                <h2>Jan-Feb 2022: Audio!</h2>
                <p>
                  Implemented audio-related features: sharing an audio post,
                  sending an audio message, playing those in a chatroom, etc.,
                </p>
                <StaticImage
                  src="../../assets/atrable/Simulator_Screen_Shot_Feb7_1.png"
                  alt="Simulator_Screen_Shot_Feb7_1"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
                <StaticImage
                  src="../../assets/atrable/Simulator_Screen_Shot_Feb7_2.png"
                  alt="Simulator_Screen_Shot_Feb7_1"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
                <StaticImage
                  src="../../assets/atrable/Simulator_Screen_Shot_Feb7_3.png"
                  alt="Simulator_Screen_Shot_Feb7_1"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
                <StaticImage
                  src="../../assets/atrable/Simulator_Screen_Shot_Feb7_4.png"
                  alt="Simulator_Screen_Shot_Feb7_1"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
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
                <StaticImage
                  src="../../assets/atrable/IMG_2848.png"
                  alt="IMG_2848"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
                <StaticImage
                  src="../../assets/atrable/IMG_2850.png"
                  alt="IMG_2850"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
                <StaticImage
                  src="../../assets/atrable/IMG_2849.png"
                  alt="IMG_2849"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
                <StaticImage
                  src="../../assets/atrable/IMG_2851.png"
                  alt="IMG_2851"
                  style={{ width: "50%" }}
                  imgStyle={{ borderRadius: 20 }}
                />
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Oct 2021</h2>
                <p>
                  I got the idea of an&nbsp;
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    audio
                  </span>
                  -based social media, not for podcasts but for personal
                  recordings and sharing.
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
                  &nbsp;to explain my idea of the app using Google Sites. These
                  sites explain Atrable differently from now.
                </p>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Jun - Aug 2021</h2>
                <p>
                  I built an app using Flutter by watching tutorials on YouTube,
                  reading official/unofficial documents (instructions), and
                  reading questions & answers on Stack Overflow.
                </p>
                <p>
                  The main focus of the app was to make people share a post and{" "}
                  <strong>directly</strong> chat about it.
                </p>
                <p>(It's a prototype, so nothing really worked well tho)</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    src="../../assets/atrable/Aug26_2021_ViewResponses.png"
                    alt="Aug26_2021_ViewResponses"
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src="../../assets/atrable/Aug26_2021.png"
                    alt="Aug26_2021"
                    imgStyle={{ borderRadius: 10 }}
                  />
                </div>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Apr - May 2021</h2>
                <p>
                  I tried making a{" "}
                  <a
                    href="https://atrable-project.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    website
                  </a>{" "}
                  using React. The purpose was to share your projects and let
                  others use it, but I'd only implemented fundamental
                  authentication system.
                </p>
              </div>
            </div>
          </div>
        </main>
      </LogsLayout>
    </>
  );
}

export default AtrableLog;
