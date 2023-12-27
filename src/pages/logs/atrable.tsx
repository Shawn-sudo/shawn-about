import React from "react";
import logo from "../../assets/appIconRounded.svg";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../../components/styles/timeline.css";

const aug2021_iphone = "../../assets/atrable/Aug26_2021.png";
const aug2021_iphone_new = "../../assets/atrable/Aug26_2021_ViewResponses.png";

const dec2021_2848 = "../../assets/atrable/IMG_2848.png";
const dec2021_2850 = "../../assets/atrable/IMG_2850.png";
const dec2021_2849 = "../../assets/atrable/IMG_2849.png";
const dec2021_2851 = "../../assets/atrable/IMG_2851.png";

const feb2022_1 = "../../assets/atrable/Simulator_Screen_Shot_Feb7_1.png";
const feb2022_2 = "../../assets/atrable/Simulator_Screen_Shot_Feb7_2.png";
const feb2022_3 = "../../assets/atrable/Simulator_Screen_Shot_Feb7_3.png";
const feb2022_4 = "../../assets/atrable/Simulator_Screen_Shot_Feb7_4.png";

const jul2022_1 = "../../assets/atrable/Atrable App Image 1.png";
const jul2022_2 = "../../assets/atrable/Atrable App Image 2.png";
const jul2022_3 =
  "../../assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.24.28.png";
const jul2022_4 =
  "../../assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 20.47.25.png";
const jul2022_5 =
  "../../assets/atrable/Simulator Screen Shot - iPhone 11 Pro Max - 2022-06-23 at 21.19.37.png";
const aug2022_1 =
  "../../assets/atrable/v1.1.2/iPhone_6.5/Atrable App Image 1.png";
const aug2022_2 =
  "../../assets/atrable/v1.1.2/iPhone_6.5/Atrable App Image 2.png";

const oct2022_record_audio_diary =
  "../../assets/atrable/v1.2.0/iPhone_6.5/record_audio_diary.png";
const oct2022_send_to_friends =
  "../../assets/atrable/v1.2.0/iPhone_6.5/send_to_friends.png";

const nov2022_compactUIForChatroom =
  "../../assets/atrable/2022_11/IMG_8939.png";

const dec2022_notificationIndicator =
  "../../assets/atrable/2022_12/new_friend_request_chat_message_indicator.png";
const dec2022_displayReactionsAndVisitors =
  "../../assets/atrable/2022_12/Simulator Screen Shot - iPhone 14 - 2022-12-28 at 10.47.59.png";

const jan2023_thumbnail = "../../assets/atrable/2023_1/video_thumbnail.png";
const jan2023_openUrl =
  "../../assets/atrable/2023_1/open_url_email_phoneNumber.png";
const jan2023_checkNotified = "../../assets/atrable/2023_1/IMG_9642.jpg";

const feb2023_sendPhotos = "../../assets/atrable/2023_2/send_photos.jpg";

const mar2023_screenShot_cover = "../../assets/atrable/2023_3/cover.png";
const mar2023_screenShot_diary = "../../assets/atrable/2023_3/diary.png";
const mar2023_screenShot_chat = "../../assets/atrable/2023_3/chat.png";

const apr2023_weeklySummaryNotification =
  "../../assets/atrable/2023_4/weekly_summary_notification.png";

const may2023_new_home_page_ui =
  "../../assets/atrable/2023_5/new_home_page_ui.png";

const jul2023_newPostDetailsPage = "../../assets/atrable/2023_7/IMG_1977.jpg";
const jul2023_newHomePageUI = "../../assets/atrable/2023_7/IMG_1980.png";
const jul2023_appDetailsCoverImage = "../../assets/atrable/2023_7/cover5.png";

const aug2023_doneButton1 = "../../assets/atrable/2023_8/IMG_3110.jpg";
const aug2023_doneButton2 = "../../assets/atrable/2023_8/IMG_3111.jpg";
const aug2023_diaryView =
  "../../assets/atrable/2023_8/screenshot_diaryView.png";

const sep2023_getNotifiedButton =
  "../../assets/atrable/2023_9/Screenshot 2023-10-07 at 9.44.10 PM.png";
const sep2023_notifyFriendsCheckbox =
  "../../assets/atrable/2023_9/IMG_3110.jpg";
const sep2023_greetings_whatsGoingOn =
  "../../assets/atrable/2023_9/greetings_whatsGoingOn.png";
const sep2023_greetings_goodMorning =
  "../../assets/atrable/2023_9/greetings_goodMorning.png";
const sep2023_changePassword = "../../assets/atrable/2023_9/IMG_3112.jpg";
const sep2023_android_conversationNotification =
  "../../assets/atrable/2023_9/screenshot_android_conversationNotification.png";

const oct2023_rewind_skip_content =
  "../../assets/atrable/2023_10/rewind_skip_content.png";
const oct2023_there_are_new_diaries =
  "../../assets/atrable/2023_10/IMG_4210.jpg";
const oct2023_sort_by_uploaded_created =
  "../../assets/atrable/2023_10/IMG_4212.jpg";
const oct2023_compactDiaryUIAfter = "../../assets/atrable/2023_10/IMG_4214.jpg";
const oct2023_compactDiaryUIBefore =
  "../../assets/atrable/2023_10/IMG_4216.jpg";

export default function Logs_atrable() {
  return (
    <>
      <title>Developing Atrable | About Seihyun Lee</title>

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
                <h2>Oct 2023 -</h2>
                <p>
                  Check my{" "}
                  <a
                    href="https://github.com/Shawn-sudo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  to see what I'm up to lately.
                </p>
                <p>
                  Go to{" "}
                  <a
                    href="https://www.atrable.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    atrable.com
                  </a>{" "}
                  to learn more about Atrable.
                </p>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Oct 2023</h2>

                <article>
                  <h3>David & Mark joined for marketing!</h3>
                  <p>
                    We've made several videos for advertisement. We're going to
                    publish them once I implement the new core features.
                  </p>
                </article>

                <article>
                  <h3>5 sec skip / rewind</h3>
                  <p>
                    For audios, tap the button ◀◀ and ▶▶. For videos, double tap
                    to skip or rewind.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <StaticImage
                      src={oct2023_rewind_skip_content}
                      alt="Screenshot"
                      imgStyle={{ borderRadius: 20 }}
                      style={{ margin: "auto" }}
                      height={450}
                    />
                  </div>
                </article>

                <article>
                  <h3>Update "There are new diaries" banner</h3>
                  <p>
                    Previously, the app checked the database every time you went
                    back to the home page. Now it's updated in real time.
                  </p>
                  <StaticImage
                    src={oct2023_there_are_new_diaries}
                    alt="Screenshot"
                    imgStyle={{ borderRadius: 20 }}
                    style={{ margin: 5 }}
                    height={450}
                  />
                </article>

                <article>
                  <h3>Sort diaries by time uploaded / recorded</h3>
                  <p>
                    Diaries on the home are sorted by the time uploaded, and the
                    diaries on the profile page are sorted by the time created.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <StaticImage
                      src={oct2023_sort_by_uploaded_created}
                      alt="Screenshot"
                      imgStyle={{ borderRadius: 20 }}
                      style={{ margin: 5 }}
                      height={200}
                    />
                  </div>
                </article>

                <article>
                  <h3>More compact design for diaries in home</h3>
                  <p>It shrinks friends' profiles on the home by default.</p>
                  <p>Based on the feedback from David</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <StaticImage
                        src={oct2023_compactDiaryUIBefore}
                        alt="Screenshot"
                        imgStyle={{ borderRadius: 20 }}
                        style={{ margin: 5 }}
                        height={450}
                      />
                      <p style={{ fontWeight: "bold" }}>Before</p>
                    </div>
                    <div>
                      <StaticImage
                        src={oct2023_compactDiaryUIAfter}
                        alt="Screenshot"
                        imgStyle={{ borderRadius: 20 }}
                        style={{ margin: 5 }}
                        height={450}
                      />
                      <p style={{ fontWeight: "bold" }}>After</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Sep 2023</h2>
                <article>
                  <h3>Subscribe to Friends</h3>
                  <p>Get notified when your friends upload a diary.</p>
                  <p>TODO: Subscribe to a public figure</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <StaticImage
                      src={sep2023_getNotifiedButton}
                      alt="Get Notified button"
                      imgStyle={{ borderRadius: 20 }}
                      style={{ margin: 5 }}
                      height={450}
                    />
                    <StaticImage
                      src={sep2023_notifyFriendsCheckbox}
                      alt="Notify friends checkbox in Upload Diary page"
                      imgStyle={{ borderRadius: 20 }}
                      style={{ margin: 5 }}
                      height={450}
                    />
                  </div>
                </article>
                <article>
                  <h3>Friendly Message under Record Button</h3>
                  <p>I like greeting people</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <StaticImage
                      src={sep2023_greetings_goodMorning}
                      alt="Greetings - Good morning"
                      imgStyle={{ borderRadius: 20 }}
                    />
                    <StaticImage
                      src={sep2023_greetings_whatsGoingOn}
                      alt="Greetings - What's going on?"
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>
                <article>
                  <h3>Change Password Without Leaving the App</h3>
                  <p>
                    Opening an external link to change the password doesn't give
                    you a good experience. It's better to change it without
                    leaving the app.
                  </p>
                  <p>
                    If you go through "Forgot Password", it'll still guide you
                    using external link though.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={sep2023_changePassword}
                      alt="Account Settings page"
                      imgStyle={{ borderRadius: 20 }}
                      height={450}
                    />
                  </div>
                </article>
                <article>
                  <h3>Android: Fix Conversation Notifications Appearance</h3>
                  <p>
                    Atrable chat notifications were shown way below the
                    notification center with no profile photo on Android, and I
                    found the reason why! The conversation notification requires
                    Shortcuts to be implemented, but I forgot to do that. I did
                    it now though.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={sep2023_android_conversationNotification}
                      alt="Screenshot of Android chat notification"
                      imgStyle={{ borderRadius: 20 }}
                      height={450}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Aug 2023</h2>
                <article>
                  <h3>Show Date & Visibility for Diary</h3>
                  <p>Check the date & visibility of diaries right away</p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={aug2023_diaryView}
                      alt="Screenshot of diary view"
                      imgStyle={{ borderRadius: 20 }}
                      height={450}
                    />
                  </div>
                </article>
                <article>
                  <h3>iOS: "Done" Button to Close Keyboard</h3>
                  <p style={{ color: "var(--hint-color)" }}>
                    For "Upload Diary" page
                  </p>
                  <p>
                    iPhones don't have back button, I have to implement it
                    separately :0
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <StaticImage
                      src={aug2023_doneButton1}
                      alt="Screenshot of the Upload Diary page without keyboard opened"
                      imgStyle={{ borderRadius: 20 }}
                      style={{ margin: 5 }}
                      height={450}
                    />
                    <StaticImage
                      src={aug2023_doneButton2}
                      alt="Screenshot of the Upload Diary page with keyboard opened"
                      imgStyle={{ borderRadius: 20 }}
                      style={{ margin: 5 }}
                      height={450}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Jul 2023</h2>
                <article>
                  <h3>New Buttons on Diary Details Page</h3>
                  <p>Share Link and Export Audio/Video</p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={jul2023_newPostDetailsPage}
                      alt="Screenshot of the new details page"
                      height={200}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>
                <article>
                  <h3>New Home Page UI</h3>
                  <ul>
                    <li>Display your diaries on the top of the page</li>
                    <li>Make Explore tab more accessible</li>
                  </ul>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={jul2023_newHomePageUI}
                      alt="Screenshot of the new home page"
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>
                <article>
                  <h3>New App Details Cover Image</h3>
                  <p>
                    "Share your actual stories" → "Record your life stories."
                    {/* I made some modifications from the old one (from Mar 2023) */}
                  </p>
                  <p>
                    Saying "share your <u>actual</u> stories" kinda gives the
                    feeling that they should only share the stories that they
                    think is meaningful, which is not good because we want to be
                    more welcoming. So, I changed the motto to "Record your life
                    stories."
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={jul2023_appDetailsCoverImage}
                      alt="Record your life stories"
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Jun 2023</h2>
                <article>
                  <h3>Nothing Much</h3>
                  <p>
                    I was super busy with{" "}
                    <a
                      href="/logs/busking-club"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Busking Club
                    </a>{" "}
                    and final exams 😵
                  </p>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>May 2023</h2>
                <article>
                  <h3>Compact UI for Home Page</h3>
                  <p>and it looks like this 😎</p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={may2023_new_home_page_ui}
                      alt="new home page UI"
                      height={400}
                      imgStyle={{
                        borderRadius: 20,
                      }}
                    />
                  </div>
                </article>
                <article>
                  <h3>2-Step Verification</h3>
                  <p>Extra layer of security with phone number</p>
                  <p>Gotta support secondary method soon</p>
                </article>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Apr 2023</h2>
                <article>
                  <h3>Weekly Summary Notification for Diaries</h3>
                  <p>
                    My friends often forget about Atrable, so I thought
                    reminding them every week would bring them to engage more.
                  </p>
                  <p>
                    Now (= Aug 5, 2023), I learned that this feature doesn't
                    bring people to engage that much (it probably does make
                    people to open the app once or twice, but it doesn't give
                    people enough motivation to start recording diaries). I'm
                    going to deprecate this after implementing something else
                    😼.
                  </p>
                  <StaticImage
                    src={apr2023_weeklySummaryNotification}
                    alt="Screenshot of weekly summary notification"
                    imgStyle={{ borderRadius: 20 }}
                  />
                </article>
                <article>
                  <h3>Easier to Use Notification Settings Page</h3>
                  <p>Switching the toggle would be saved right away.</p>
                </article>
                <article>
                  <h3>Fold Long Text</h3>
                  <p>
                    to prevent David from bugging the app UI using endlessly
                    long text.
                  </p>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Mar 2023</h2>
                <article>
                  <h3>Finally released v1.3.2!</h3>
                  <p>
                    I've been holding releasing v1.3 for a while, I finally
                    released it!
                  </p>
                </article>
                <article>
                  <h3>Padding & Constraints for Big Screen UI</h3>
                  <p>
                    I put some padding & constraints on widget so that it
                    doesn't look broken in big screens.
                  </p>
                </article>
                <article>
                  <h3>Android Conversation Notification</h3>
                  <p>
                    The notification shows the profile photo of the user
                    (Android)
                  </p>
                  <p>
                    I feel like it's still a bit buggy though. Gotta figure out.
                  </p>
                </article>
                <article>
                  <h3>New App Details Image</h3>
                  <p>
                    I thought the old one (from Oct 2022) isn't really
                    appealing, so I made some modifications.
                  </p>
                  <div style={{ display: "flex" }}>
                    <StaticImage
                      src={mar2023_screenShot_cover}
                      alt="Share your actual stories"
                      imgStyle={{
                        borderRadius: "20px 0px 0px 20px",
                      }}
                    />
                    <StaticImage
                      src={mar2023_screenShot_diary}
                      alt="Record your honest feelings with audio and video"
                    />
                    <StaticImage
                      src={mar2023_screenShot_chat}
                      alt="Get closer to your friends by chatting about your diaries"
                      imgStyle={{
                        borderRadius: "0px 20px 20px 0px",
                      }}
                    />
                  </div>
                </article>
                <article>
                  <h3>New Home Page Design</h3>
                  <p>Still working on it</p>
                </article>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Feb 2023</h2>
                <p></p>
                <article>
                  <h3>Retry Uploading / Sending if Failed</h3>
                  <p>
                    If the app gets terminated while uploading a diary or
                    sending a chat message, it would ask you if you're going to
                    retry the uploading / sending it on the next launch.
                  </p>
                </article>

                <article>
                  <h3>Camera Controls</h3>
                  <p>
                    Camera on/off, flip camera, zoom in/out, flashlight on/off
                    Ffmpeg was so hard to deal with. I implemented it though 😵‍💫.
                  </p>
                </article>

                <article>
                  <h3>Send Photos</h3>
                  <p>
                    Send and receive photos. My main focus is on audio and video
                    rather than photo, but you can send photos if you want to.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={feb2023_sendPhotos}
                      alt="Send photos"
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Jan 2023: Stabilize for real-life use [3]</h2>

                <article>
                  <h3>Save messages locally</h3>
                  <p>
                    Previously, all the messages were loaded directly from the
                    server. Now the messages are permantly saved on your device
                    once you read it.
                  </p>
                  <p>
                    Audios, videos, and other imports are not saved on the
                    device, and are saved on the server instead. It'll take up
                    too much storage if all the audios, videos, and photos get
                    saved on the device.
                  </p>
                </article>

                <article>
                  <h3>Check if Message is Notified</h3>
                  <p>
                    Check if the notification for your new message is
                    successfully delivered.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={jan2023_checkNotified}
                      alt="Notified sign under a chat message"
                      height={200}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>

                <article>
                  <h3>Open Url and Phone Number</h3>
                  <p>Open web url and phone number contained in a text.</p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={jan2023_openUrl}
                      alt="Open url, email, and phone number"
                      height={200}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>

                <article>
                  <h3>Thumbnail for Videos</h3>
                  <p>Thumbnails are now generated and displayed for videos.</p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={jan2023_thumbnail}
                      alt="Thumbnail for videos"
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Dec 2022: Stabilize for real-life use [2]</h2>

                <article>
                  <h3>Reactions and Visitors of Diary</h3>
                  <p>
                    Previously, the views (listens / visitors) and the reactions
                    were recorded, but there was no way to see who they were. I
                    wanted to know whom it is that reacted / listened to my
                    diary, so I made this feature.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={dec2022_displayReactionsAndVisitors}
                      alt=""
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>

                <article>
                  <h3>Indicators</h3>
                  <p>
                    Those tiny circle dots indicate new friend requests and chat
                    messages.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src={dec2022_notificationIndicator}
                      alt="New friend request & chat message indicator"
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>

                <article>
                  <h3>Deal with foreground notifications on the native side</h3>
                  <p>
                    Displaying foreground notifications using{" "}
                    <a
                      href="https://pub.dev/packages/flutter_local_notifications"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      flutter_local_notifications
                    </a>{" "}
                    was too complicated for my use.
                  </p>
                  <p>
                    Instead of using the package to display notificaitons from
                    the Flutter side, I wrote some code to sync the currently
                    opened page with the native side (iOS and Android) and
                    filter the incoming notification based on the currently
                    opened page.
                  </p>
                </article>

                <article>
                  <h3>Migrate to NextJS (www.atrable.com)</h3>
                  <p>
                    Because GatsbyJS is not made for Dynamic Server Side
                    Rendering, I migrated to NextJS to fetch some data from the
                    db for profile pages.
                  </p>
                  <p>
                    I also made the website look cooler by displaying some
                    videos on the homepage.
                  </p>
                </article>

                <article>
                  <h3>Created Social Accounts</h3>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/company/atrable/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.linkedin.com/company/atrable/
                    </a>
                  </p>
                  <p>
                    GitHub:{" "}
                    <a
                      href="https://github.com/atrable"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/atrable
                    </a>
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/orgs/atrable/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Discussions
                      </a>
                      : Feature requests, questions, ...
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Nov 2022: Stabilize for real-life use [1]</h2>

                <article>
                  <h3>No more jank when the recorder screen opens</h3>
                  <div
                    style={{
                      padding: "216.22% 0 0 0",
                      position: "relative",
                    }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/771777458?h=8bb47bb2d0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                      title="Much smoother opening for my app"
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                  <p>
                    When the Past Records page opens, the app used to freeze for
                    like 1 full second. The function for sorting the past
                    records was taking a long time, so I wrapped the sorting
                    thingy with{" "}
                    <a
                      href="https://api.flutter.dev/flutter/foundation/compute-constant.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      compute
                    </a>{" "}
                    to prevent it from blocking the main thread or smth.
                  </p>
                </article>

                <article>
                  <h3>Preview audio/video message before sent</h3>
                  <p>
                    Previously, the audio and video messages were sent right
                    after ending the record in a chatroom. I edited it to be
                    able to display the preview of the audio / video before
                    sending it.
                  </p>
                </article>

                <article>
                  <h3>Compact Diary UI in Chatrooms</h3>
                  <p>
                    It now looks more similar to other audio / video messages.
                  </p>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <StaticImage
                      src={nov2022_compactUIForChatroom}
                      alt=""
                      height={400}
                      imgStyle={{
                        borderRadius: 20,
                      }}
                    />
                  </div>
                </article>

                <article>
                  <h3>Send audio to others</h3>
                  <p>
                    This allows you to send the recorded audio / video to others
                    through chatroom.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <StaticImage
                      src="../../assets/atrable/2022_11/IMG_6FD1B5AADC04-1.jpeg"
                      alt="screenshot"
                      height={400}
                      imgStyle={{ borderRadius: 20 }}
                    />
                  </div>
                </article>

                <article>
                  <h3>Communication Notification (iOS)</h3>
                  <p>Notifications on iOS now shows the profile photo.</p>
                  <p>
                    I couldn't develop this (Conversation Notification) for
                    Android, as I couldn't find a way to show profile photos
                    properly in a notification (
                    <a
                      href="https://github.com/firebase/firebase-android-sdk/issues/4500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      firebase-android-sdk Conversation Notification Support for
                      Firebase Messaging #4500
                    </a>
                    ).
                  </p>
                </article>

                <article>
                  <h3>Profile Link & QR code</h3>
                  <p>
                    I wanted to share my Atrable profile with my friends using
                    QR code, instead of typing the username on the search page.
                    I first implemented a way to display the profile on the web.
                    Then I added a button to get profile QR code in the app.
                  </p>
                  <p>
                    I'm using GatsbyJS for{" "}
                    <a
                      href="https://www.atrable.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.atrable.com
                    </a>{" "}
                    now, but I'm starting to see some limitations of
                    Static-Site-Generation :/ The profile is loaded after the
                    initial rendering completes. As a result, if the link is
                    shared through chat apps or social media, the title stays in
                    the default one (which is literally{" "}
                    <code>
                      @&lt;!-- --&gt;[...]&lt;!-- --&gt; | Atrable&lt;!-- --&gt;
                    </code>
                    ). Planning to migrate to NextJS soon.
                  </p>
                  {/* https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/ */}
                  <p>
                    Example:{" "}
                    <a
                      href="https://www.atrable.com/u/shawn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.atrable.com/u/shawn
                    </a>
                  </p>
                </article>

                <article>
                  <h3>Squishy Buttons</h3>
                  <p>The buttons got more squishy.</p>
                </article>

                <article>
                  <h3>Select Records in Past Records</h3>
                  <p>
                    I modified the Past Records page, so that people can select
                    the records and delete / upload / share it.
                  </p>
                </article>

                <article>
                  <h3>Found some bugs</h3>
                  <a
                    href="https://github.com/realm/realm-dart/issues/1023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    realm-dart [Bug]: Unable to install on iOS #1023
                  </a>
                </article>

                <article>
                  <h3>Good for College Application</h3>
                  <p>
                    My friend told me that Atrable would be good for my college
                    application. I wasn't thinking about it, but I think that's
                    true 👍.
                  </p>
                </article>
              </div>
            </div>

            <div className="container left">
              <div className="content">
                <h2>Sep - Oct 2022: Changes for v1.2.0</h2>
                <article>
                  <h3>"Post" → "Diary"</h3>
                  <p>
                    The audios were called "Audio Post", but now I think the
                    word "diary" fits better than "post".
                  </p>
                  <p>
                    When I say it's a "post", it gives me a feeling of
                    disclosing myself to the public. It isn't wrong, but the
                    audios are more daily, personal, reflective, which are
                    closer to diaries.
                  </p>
                </article>

                <article>
                  <h3>Diary + Chat</h3>
                  <p>
                    I started to think that comments are not for "diaries".
                    Through comments, people literally "comment" on others. This
                    wouldn't be desirable for an uploader who just wants to
                    record their day.
                  </p>
                  <p>Diary comments are deprecated.</p>
                  <p>
                    Instead, people can now send their diaries to friends and
                    the friends can reply to it.
                  </p>
                </article>

                <article>
                  <h3>New Diary Visibility Setting</h3>
                  <p>
                    The old db structure for post visibility settings didn't
                    make sense, so I made some changes. It was quite a huge
                    change.
                  </p>
                </article>

                <article>
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
                </article>

                <article>
                  <h3>New App Details Image</h3>
                  <p>
                    I thought the old one (from Aug 2022) isn't really
                    appealing, so I made some modifications.
                  </p>
                  <div style={{ display: "flex" }}>
                    <StaticImage
                      src={oct2022_record_audio_diary}
                      alt="Record your stories with Audio Diary"
                      imgStyle={{
                        borderRadius: "20px 0px 0px 20px",
                      }}
                    />
                    <StaticImage
                      src={oct2022_send_to_friends}
                      alt="Send it to friends"
                      imgStyle={{
                        borderRadius: "0px 20px 20px 0px",
                      }}
                    />
                  </div>
                </article>

                <article>
                  <h3>v1.1.2 Release</h3>
                  <p>I released v1.1.2 (Aug 2022 works) on App Store. </p>
                  <p>
                    My Android friends also want to get this app, so I gotta
                    release it on the Play Store too.
                  </p>
                </article>
              </div>
            </div>

            <div className="container right">
              <div className="content">
                <h2>Aug 2022: Changes for v1.1.2</h2>
                <article>
                  <h3>Post Carousel</h3>
                  <p>
                    You slide the post sideways to listen to the uploader's
                    previous / next post.
                  </p>
                  <p>This lets you see the full story of the uploader.</p>
                </article>

                <article>
                  <h3>Post Comments Design Change</h3>
                  <p>Comments look more like a single chat thread.</p>
                </article>

                <article>
                  <h3>New App Details Image</h3>
                  <p>
                    I thought the old one (from Jul 2022) isn't really
                    appealing, so I made some modifications.
                  </p>
                  <div style={{ display: "flex" }}>
                    <StaticImage
                      src={aug2022_1}
                      alt="Small yet effortful stories,"
                      imgStyle={{
                        borderRadius: "20px 0px 0px 20px",
                      }}
                    />
                    <StaticImage
                      src={aug2022_2}
                      alt="Record + share those with audio"
                      imgStyle={{
                        borderRadius: "0px 20px 20px 0px",
                      }}
                    />
                  </div>
                </article>
                <article>
                  <div
                    style={{
                      padding: "56.25% 0 0 0",
                      position: "relative",
                    }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/785870390?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                      title="Quick Updates on Atrable"
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                </article>
              </div>
            </div>

            <div className="container left">
              <div className="content">
                <h2>Jul 2022: Alpha → Beta</h2>

                <article>
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
                </article>

                <article>
                  <h3>Tried to Advertise </h3>
                  <p>
                    I made{" "}
                    <a
                      href="https://youtu.be/nmAjmrai8dw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      a video
                    </a>{" "}
                    to submit this app to Congressional App Challenge and
                    advertise it at once. I was trying to kill two "birds" with
                    one "stone", but I think I lost both birds; I was being too
                    informal to submit it to the contest, but the video was
                    quite boring to be a good advertisement. I'm going to refilm
                    it 😼
                  </p>
                </article>

                <article>
                  <h3>Change the Catchphrase</h3>
                  <p>
                    It used to be "Share your day with audio and video." I
                    thought it was too wordy, so I changed it to "Your
                    not-so-special moments, share it on Atrable"
                  </p>
                </article>

                <article>
                  <h3>App Details Image</h3>
                  <p>I made these pictures using Vectornator.</p>
                  <StaticImage
                    src={jul2022_1}
                    alt="Your not-so-special moments,"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: "20px 0px 0px 20px" }}
                  />
                  <StaticImage
                    src={jul2022_2}
                    alt="Share it on Atrable"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: "0px 20px 20px 0px" }}
                  />
                  <StaticImage
                    src={jul2022_3}
                    alt="Atrable app detail - share post"
                    style={{ width: "33.33%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={jul2022_4}
                    alt="Atrable app detail - my page"
                    style={{ width: "33.33%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={jul2022_5}
                    alt="Atrable app detail - post details"
                    style={{ width: "33.33%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                </article>

                <article>
                  <h3>Changes on the Fundamental Features</h3>
                  <ul>
                    <li>Replace likes with emoji reactions</li>
                    <dl>
                      "Likes" give me a feeling that I should post something
                      "likeable" (or smth that can be loved by the public). I
                      replaced the likes system with emoji-counting system to
                      feel free to record and share whatever I wanted to,
                      because emoji lets reactions with more diverse and actual
                      emotions.
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
                </article>

                <article>
                  <h3>Fix Bugs</h3>
                  <p>There were a lot a lot 😩😵‍💫</p>
                </article>

                <article>
                  <h3>Minor Changes on v1.1.0 </h3>
                  <p>(David strongly suggested)</p>
                  <ul>
                    <li>Smoother audio player seekbar</li>
                    <li>Crop profile photo when setting it</li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Mar-Jun 2022: Alpha Build</h2>

                <article>
                  <h3>Play Audios</h3>
                  <p>
                    Using <code>ManageAudioPlayers</code> (I made it!), each
                    page can efficiently manage audio plays.
                  </p>
                </article>

                <article>
                  <h3>Suggested Posts</h3>
                  <p>
                    In <code>SuggestedPosts</code> page, random public posts are
                    fetched and displayed.
                  </p>
                  <p>
                    Audios are automatically played as the page is scrolled.
                  </p>
                </article>

                <article>
                  <h3>Post Details</h3>
                  <p>
                    In <code>PostDetailsPage</code>, the uploader can see the
                    details of the post (views, likes, and comments). Comments
                    are accessable here.
                  </p>
                </article>

                <article>
                  <h3>Post Likes & Comments & Views</h3>
                  <p>You can like a post by pressing the ❤️ button.</p>
                  <p>
                    You can comment about a post on the linked{" "}
                    <code>PostCommentChatroom</code>, which is a public chatroom
                    for anyone.
                  </p>
                  <p>
                    View would be counted when more than 1/3 or 3 sec of the
                    audio is played.
                  </p>
                </article>

                <article>
                  <h3>
                    Post Visibility: <code>Share With Friends</code>
                  </h3>
                  <p>
                    In <code>SharePost</code>, I replaced <code>send to</code>{" "}
                    feature, which was used to send post itself through
                    chatroom, with <code>Share With Friends</code>.
                  </p>
                  <p>
                    With <code>Share With Friends</code>, people can allow only
                    some of their friends to view the post.
                  </p>
                </article>

                <article>
                  <h3>Chatroom Design Change</h3>
                  <p>
                    Show the time when the message sent, with a better design.
                  </p>
                  <p>
                    If it's not a <code>DMChatroom</code>, show people's
                    profiles.
                  </p>
                  <p>Sending indicator with shimmer effect.</p>
                </article>

                <article>
                  <h3>Chatroom Pagination</h3>
                  <p>
                    Much better pagination; I used{" "}
                    <code>
                      <a
                        href="https://pub.dev/packages/infinite_scroll_pagination"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        infinite_scroll_pagination
                      </a>
                    </code>{" "}
                    to fetch older messages and use FirebaseFirestore realtime
                    update feature to fetch newer messages in real time.
                  </p>
                </article>

                <article>
                  <h3>Etc</h3>
                  <p>
                    Continue with Apple when signing in/up, don't force/require
                    people to verify email: only show a popup, allow users to
                    check past records locally, set correct keyboard text
                    capitalization settings, dark mode, ...
                  </p>
                </article>
              </div>
            </div>

            <div className="container left">
              <div className="content">
                <h2>Jan-Feb 2022: Audio!</h2>
                <p>
                  I implemented audio-related features such as sharing an audio
                  post, sending an audio message, playing those in a chatroom,
                  etc.,
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <StaticImage
                    src={feb2022_1}
                    alt="Simulator_Screen_Shot_Feb7_1"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={feb2022_2}
                    alt="Simulator_Screen_Shot_Feb7_1"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={feb2022_3}
                    alt="Simulator_Screen_Shot_Feb7_1"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={feb2022_4}
                    alt="Simulator_Screen_Shot_Feb7_1"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                </div>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>Nov - Dec 2021</h2>
                <p>
                  I made basic features that a social networking platform should
                  provide, such as friend relationship management, viewing
                  others' profiles, heart (like) button, and sending chat
                  messages.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <StaticImage
                    src={dec2021_2848}
                    alt="IMG_2848"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={dec2021_2850}
                    alt="IMG_2850"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={dec2021_2849}
                    alt="IMG_2849"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={dec2021_2851}
                    alt="IMG_2851"
                    style={{ width: "50%" }}
                    imgStyle={{ borderRadius: 20 }}
                  />
                </div>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Oct 2021</h2>
                <p>
                  I got the idea of an&nbsp;
                  <strong>audio</strong>
                  -based social media. Existing social media platforms focus on
                  photos, which makes people focus on the appearances. On the
                  other hand, audio lets you focus on the actual stuff that is
                  going on. Audio also gives rich feeling of being connected,
                  and I loved it.
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
                  &nbsp;to explain my idea of the app using Google Sites. It's
                  quite different from how Atrable is like now.{" "}
                  <span style={{ opacity: 0.08 }}>
                    (now = Dec 30, 2022 21:41:20)
                  </span>
                </p>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <h2>Jun - Aug 2021</h2>
                <p>
                  I built an app using Flutter by watching tutorials on YouTube,
                  reading official/unofficial documents, and reading questions &
                  answers on Stack Overflow.
                </p>
                <p>
                  The main focus of the app is to make people share a post and{" "}
                  <strong>directly</strong> chat about it.
                </p>
                <p>(It's a prototype, so nothing really works well)</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    src={aug2021_iphone_new}
                    alt="Aug26_2021_ViewResponses"
                    imgStyle={{ borderRadius: 20 }}
                  />
                  <StaticImage
                    src={aug2021_iphone}
                    alt="Aug26_2021"
                    imgStyle={{ borderRadius: 10 }}
                  />
                </div>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>- May 2021</h2>
                <p>
                  I tried making a{" "}
                  <a
                    href="https://atrable-project.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    website
                  </a>{" "}
                  where people can share their travel stories, view other
                  traveler's stories, and follow travelers. But guess what{" "}
                  <span style={{ opacity: 0.08 }}>chicken butt</span>, I'd only
                  implemented fundamental authentication system there.
                </p>
                <p>
                  Check{" "}
                  <code>
                    <a
                      href="https://github.com/Shawn-sudo/space-shuttle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shawn-sudo/space-shuttle
                    </a>{" "}
                  </code>
                  for more info
                </p>
                <a
                  href="https://github.com/Shawn-sudo/space-shuttle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/Shawn-sudo/space-shuttle/master/build/assets/logo/logo1.png"
                    style={{ width: "100%" }}
                  />
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
