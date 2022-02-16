import Wrapper from "../Components/Wrapper";

const Music = () => {
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
      <p>They are all incomplete.</p>
      <p>
        It is impossible to
        <ul>
          <li>get a good score in every class</li>
          <li>make my own social media service</li>
          <li>make this website by myself (not using website builders)</li>
          <li>make music professionally</li>
        </ul>
        at once, so I gave up professionally making music .
      </p>
    </Wrapper>
  );
};

export default Music;
