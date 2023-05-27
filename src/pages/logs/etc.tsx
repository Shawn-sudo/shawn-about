import { Link } from "gatsby";
import React from "react";
import Card from "../../components/Card";
import LogsLayout from "../../components/layouts.tsx/LogsLayout";
import "../../components/styles/resume.css";

function EtcLog() {
  return (
    <>
      <title>Resume as of Jan 2022 | About Seihyun Lee</title>
      <LogsLayout>
        <main>
          <div
            style={{
              margin: 20,
            }}
          >
            <h1>Resume (CV)</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>As of Mar 2023</h3>
              <h3>Seihyun (Shawn) Lee</h3>
            </div>
          </div>
          <Card id="resume">
            <h1>Summary</h1>
            <p>
              I'm a student who is interested in living a happy life using
              technologies.
            </p>

            <h1>Projects</h1>
            <h2>
              <a
                href="https://www.atrable.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atrable
              </a>{" "}
              (Aug 2021 - present)
            </h2>
            <p>
              I am creating a social media platform where people can share
              honest stories about themselves with their friends
              (https://www.atrable.com). I came to this idea after seeing how
              many people create artificial images of themselves on social media
              and how these artificial images impact others. I hope to combat
              this through Atrable, where people can easily share authentic
              videos and audio clips of themselves instead of photos.
            </p>
            <p>
              For Atrable, I'm using Flutter and Firebase. With my programming
              knowledge, I fix real world problems such as loading diaries
              (posts) with pagination, saving chat messages on the user's
              device, sending and receiving notifications, recording and
              uploading audios, etc.
            </p>
            <p>
              To see my works, go to{" "}
              <a href="/logs/atrable" target="_blank" rel="noopener noreferrer">
                /logs/atrable
              </a>
            </p>

            <h2>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Personal Website
              </a>{" "}
              (Feb 2022 - present)
            </h2>
            <p>
              I am making a personal website to record and organize my journeys.
              For the website, I'm using Gatsby, which is a React framework for
              generating static websites like blogs. Along with the fancy
              framework, I also use the plain web language such as HTML and CSS.
            </p>

            <h2>DNA Barcoding Project (Team name: Watdr) (2022-2023)</h2>
            <p>
              I researched the relationship between pH rate and moss with my
              friend Pranav.
            </p>
            <p>
              pH is important in the freshwater ecosystem as it sets up the
              conditions for how easily nutrients are available and how easily
              things like heavy metals can dissolve in the water. Different
              water bodies have different levels of pH, depending on location,
              temperature, and other factors. Moss is a bioindicator, meaning
              that it is a naturally occurring indicator of pollution, air
              quality, and water quality. We wanted to investigate if the
              difference in pH level would affect biodiversity of the inhabiting
              moss. We also wondered if there will be an ideal pH level that
              allows many different species of moss to inhabit. Our hypothesis
              was that biodiversity would peak as the pH level of surrounding
              water gets closer to 7.
            </p>
            <p>
              We first went to different water streams in our town and collected
              water and moss samples. Then, we went to the Harlem DNA Barcoding
              Lab and analyzed the diversity of the moss that we collected. We
              plotted out the relationship between pH rate and moss diversity,
              and figured out that moss thrives in the environment with pH
              around 7.5
            </p>
            <p>
              One thing I'm unsatisfied: For the value to be more accurate and
              more applicable, we would've had to collect hundreds of samples.
              However, we couldn't do so because of our limitation of time and
              energy that we can spend as high school students.
              {/* we couldn't collect hundreds of samples due
              to our limitation of time{" "} */}
            </p>

            <h2>
              <a
                href="https://sites.google.com/tenafly.k12.nj.us/shawn/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                What is the relationship between the pandemic and depression?
              </a>{" "}
              (Mar 2021)
            </h2>
            <p>
              As a middle school graduation project, I researched the
              relationship between the pandemic and depression. I learned that
              depression happens more widely than I thought, which is mainly
              caused by the COVID pandemic.
            </p>
            <p>
              For the project, I made a simple depression test based on PHQ-9
              using HTML5, CSS, and Javascript (
              <a
                href="https://shawn-school.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://shawn-school.web.app
              </a>
              ).
            </p>
            <p>
              Later on (around mid 2022), I noticed that the depression rate
              didn't rapidly decrease although the pandemic was nearly over. I
              realized that the pandemic was just an indirect cause of increased
              depression rate; the direct cause was increased usage of social
              media, where people often promote fake images of themselves. I
              wanted to make a better place for people to record and share their
              lives than other social media, so I brought many shifts in the app
              that I was making at that time. For example, I implemented audio
              and video features for the app, so that people can easily focus on
              their story itself, rather than how they appear to others.
            </p>

            <h1>Academic Achievements</h1>
            <h2>Qualified for AIME (2021 Fall & 2022)</h2>
            <p>
              I qualified for AIME twice! I scored in the top 2.5% on AMC 10.
            </p>
            <h2>
              First Place in Bergen County Math League (2021-2022 & 2022-2023)
            </h2>
            <p>
              After participating in the competition in the school math club, I
              got first place in BCML Group 3 twice.
            </p>

            <h2>99th percentile on PSAT (Oct 2022)</h2>
            <p>
              I thought my English was bad, but I guess it improved over time.
            </p>

            <h1>School Clubs</h1>
            <h2>Math Club (Sep 2022 - present)</h2>
            <p>
              Every week, we participate in math competitions, such as NJML,
              BCML, and AMC.
            </p>
            <h2>Chemistry Club (Sep 2022 - present)</h2>
            <p>
              I learned about interesting chemical reactions by listening to
              others' presentations. I also made a presentation about how water
              dissolves ions and polar molecules with its exceptionally high
              electronegativity.
            </p>
            <p>
              As a team, we made a website to explain the Flint water crisis (
              <a
                href="https://njchemolympics2022master.gatsbyjs.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://njchemolympics2022master.gatsbyjs.io
              </a>
              ).
            </p>
            <h2>International Student Advisory Board (Dec 2022 - present)</h2>
            <p>
              We go to Tenafly Middle School ELL class every Thursday and help
              students adapt into American culture. As I came to America just 2
              years ago, I can relate with and help them very well.
            </p>

            <h1>Volunteers</h1>
            <h2>Scratch Coding Class (Dec 2022 - Jan 2023)</h2>
            <p>
              I taught the fun of coding with Scratch coding. I made students
              come up with their own ideas and we implemented it together.
            </p>
            <p>
              To see more information, go to{" "}
              <a
                href="/logs/scratch-coding-class-dec-2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                /logs/scratch-coding-class-dec-2022
              </a>
            </p>
            <h2>Church Volunteer</h2>
            <p>
              I help children to focus on worship and get closer to the stories
              in the Bible.
            </p>
          </Card>
          <div
            style={{
              margin: 20,
              marginTop: 40,
            }}
          >
            <h3>Resume written on Jan 2022</h3>
          </div>
          <Card>
            <div>
              <h2>Tenafly Middle School, March 2021</h2>
              <h3>
                What is the relationship between the pandemic and depression?
              </h3>
              <p>
                I researched the relationship between the pandemic and
                depression for my I-Search project. I interviewed Mr. Vagnone to
                get to know depression from a scientist's view. I made a simple
                depression <a href="https://shawn-school.web.app">test</a> using
                HTML, CSS, and JS, based on the Patient Health Questionnaire
                (PHQ-9). I organized my research data by making a{" "}
                <a href="https://sites.google.com/tenafly.k12.nj.us/shawn/home">
                  website
                </a>{" "}
                and by filming a{" "}
                <a href="https://drive.google.com/file/d/1g-puxuU-0pTH0O_g4KKd_pb_pT5HwutC/view?usp=sharing">
                  video
                </a>
                .
              </p>
              <h2>Chemistry Club, September 2021 to present</h2>
              <p>
                By listening to others' presentations, I learned about the
                interesting chemical reactions and how they are researched. I
                gave a presentation on how water dissolves ions and polar
                molecules with an explanation of electronegativity.
              </p>
              <h2>Math Club, September 2021 to present</h2>
              <p>
                Every week, we participate in math competitions, such as NJML,
                BCML, AMC. I am qualified for AIME for being in the top 2.5% of
                AMC 10.
              </p>
              <h2>Creating a Social Media, August 2021 to present</h2>
              <p>
                I am creating an audio-based social media. I was creating an app
                where users can share a post and chat about it. At that time, I
                started using Instagram, and it made me exhausted. Since
                pictures and videos are required for the users to express
                themselves, they had to reveal their appearances. This caused
                the users, including me, to decorate ourselves as a nice guy to
                the public. As a result, everybody there looked nice. Everybody
                looked nice, and I was so tired of it. I wondered if there was a
                way to express myself without showing me directly, but requires
                users to be more responsible than on text-based social media
                like Twitter. The audio was the solution, so I am creating
                audio-based social media. I am planning to release the first
                build by this summer.
              </p>
              <h2>
                Convergence Club (융합어드벤처 동아리), March 2020 to January
                2021 in South Korea
              </h2>
              <p>
                We gave a presentation for an hour about science technologies in
                many different fields, such as global warming, recombinant DNA
                technology, teeth health, viruses. For another hour, we debated
                about a topic related to the presentation, like Is there any
                problem with recombinant DNA technology?. I gave a presentation
                on how viruses work, especially about coronaviruses, and our
                body's reaction to them.
              </p>
              <h2>
                Korea Workers' Compensation & Welfare Service Ansan Hospital,
                August 2019
              </h2>
              <p>
                I met MD. Jeon and researched what Prosthetics & Orthotics do. I
                learned how hand molds are made and how to fabricate medical
                supportive devices based on the mold.
              </p>
              <h2>The Invention of Fixed Hair Dryer, Spring of 2017</h2>
              <p>
                When I was young, my arms were weak. It was hard for me to use
                the powerful, heavy hair dryer. To make it easy to use the hair
                dryer, I duct-taped it to an old fan. As a result, I could
                easily dry my hair by spinning around the Fixed Hair Dryer. I
                could also make the fan spin by itself, so that heat would not
                be concentrated.
              </p>
              <h2>
                First place for the School Math Contest (교내 수학학력경진대회),
                2015 to 2018
              </h2>
              <p>
                In Yeouido Elementary School, every student participates in the
                school math contest every semester. I got first place in the
                tests for 3 years, 6 times, from 3rd-year 2nd semester to
                6th-year 1st semester.
              </p>
              <h2>Frisbee Club, September 2021 to present</h2>
              <p>
                Every Wednesday, I played frisbee with my friends in this club.
                I could learn how teamwork works.
              </p>
              <h2>Creating a Website, February 2022</h2>
              <p>
                I made a website to introduce myself (here). Because I made the
                website by writing the code directly, I could customize every
                single element in the website freely.{" "}
                <a href="https://github.com/shawn-sudo/shawn-about">
                  Source code
                </a>
              </p>
              <h2>
                Monitoring water quality in Hongjecheon, March 2019 to October
                2019
              </h2>
              <p>
                I volunteered to monitor water quality in Hongjecheon, a river
                located in Seoul. I could see how pollution differs according to
                the weather; if it rained, the water was more polluted than it
                was on a sunny day.
              </p>
              <h2>Music creation, 2019 to present</h2>
              <p>
                Started with some silly melodies, now making not-bad-not-good
                songs. <Link to="/music">here</Link>
              </p>
            </div>
          </Card>
        </main>
      </LogsLayout>
    </>
  );
}

export default EtcLog;
