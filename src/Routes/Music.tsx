import React from "react";
import Wrapper from "../Components/Wrapper";

function Music() {
  document.title = "Music | About Seihyun Lee";
  return (
    <Wrapper>
      <audio controls>
        <source
          src="/assets/musics/Mongrong12 - 2:7:22, 9.23 PM.mp3"
          type="audio/mpeg"
        />
        <p>Your browser does not support the audio element. 😢</p>
      </audio>
      <audio controls>
        <source
          src="/assets/musics/Project - 2:12:22, 4.09 PM.m4a"
          type="audio/mpeg"
        />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <audio controls>
        <source
          src="/assets/musics/Project - 2:14:22, 7.13 PM.m4a"
          type="audio/mpeg"
        />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <p>I make musics when I have nothing left to do.</p>
      <p style={{ opacity: 0.2 }}>
        Sometimes, I make music while studying for a test. Tests are inspiring.
      </p>
      <p>They are all incomplete. I don't have time to complete those rn.</p>
    </Wrapper>
  );
}

export default Music;
