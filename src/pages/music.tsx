import React from "react";
import Layout from "../components/layouts.tsx/Layout";
import audio1 from "../assets/musics/Mongrong12 - 2:7:22, 9.23 PM.mp3";
import audio2 from "../assets/musics/Project - 2:12:22, 4.09 PM.m4a";
import audio3 from "../assets/musics/Project - 2:14:22, 7.13 PM.m4a";

function Music() {
  return (
    <>
      <title>Music | About Seihyun Lee</title>

      <Layout>
        <main>
          <audio controls>
            <source src={audio1} type="audio/mpeg" />
            <p>Your browser does not support the audio element. 😢</p>
          </audio>
          <audio controls>
            <source src={audio2} type="audio/mpeg" />
            <p>Your browser does not support the audio element.</p>
          </audio>
          <audio controls>
            <source src={audio3} type="audio/mpeg" />
            <p>Your browser does not support the audio element.</p>
          </audio>
          <p>
            I usually make music while studying for a test. Tests are inspiring.
          </p>
          <p>
            They are all incomplete tho. I don't have time to complete those rn
            :/
          </p>
        </main>
      </Layout>
    </>
  );
}

export default Music;
