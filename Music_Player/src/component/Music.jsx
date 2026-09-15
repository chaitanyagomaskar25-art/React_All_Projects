import React, { useRef, useState,useEffect } from "react";

const Music = () => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const songs = [
    {
      title: "Song One",
      file: "/videos/song1.mp4",
    },
    {
      title: "Song Two",
      file: "/videos/song2.mp4",
    },
    {
      title: "Three",
      file: "/videos/song3.mp4",
    },
    {
      title: "Song Four",
      file: "/videos/song4.mp4",
    },
    {
      title: "Song Five",
      file: "/videos/song5.mp4",
    },
    {
      title: "Song Six",
      file: "/videos/song6.mp4",
    },
    {
      title: "Song Seven",
      file: "/videos/song7.mp4",
    },
    {
      title: "Song Eight",
      file: "/videos/song8.mp4",
    },
    {
      title: "Song Nine",
      file: "/videos/song9.mp4",
    },
    {
      title: "Song Ten",
      file: "/videos/song10.mp4",
    },
    {
      title: "Song Eleven",
      file: "/videos/song11.mp4",
    },

    {
      title: "Twelve",
      file: "/videos/song12.mp4",
    },
    {
      title: "Song Thriteen",
      file: "/videos/song13.mp4",
    },
    {
      title: "Song Forteen",
      file: "/videos/song14.mp4",
    },
    {
      title: "Song Fifteen",
      file: "/videos/song15.mp4",
    },
    {
      title: "Song Sixteen",
      file: "/videos/song16.mp4",
    },
  ];
  


useEffect(() => {
    audioRef.current.load();
}, [currentIndex]);


  const playMusic = () => audioRef.current.play();
  const pauseMusic = () => audioRef.current.pause();

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === songs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  return (
    <div className="music-container">
      <div className="music-card">
        <h1>🎵 Music Player</h1>

        <video
          key={currentIndex}
          ref={audioRef}
          src={songs[currentIndex].file}
          controls
          autoPlay
          className="video-player"
        />

        <h2>{songs[currentIndex].title}</h2>

        <div className="btn-group">
          <button onClick={playMusic}>▶ Play</button>
          <button onClick={pauseMusic}>⏸ Pause</button>
        </div>

        <div className="btn-group">
          <button onClick={handlePrev}>⏮ Prev</button>
          <button onClick={handleNext}>⏭ Next</button>
        </div>
      </div>
    </div>
  );
};

export default Music;