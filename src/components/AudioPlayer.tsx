import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface AudioPlayerProps {
  src: string;
}

const playIconPath = "/icons/play-quiz.svg";
const pauseIconPath = "/icons/pause-recording.svg";

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playIcon, setPlayIcon] = useState<string>(playIconPath);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
        setDuration(audioElement.duration);
      }
    };

    audioElement?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setPlayIcon(playIconPath);
      } else {
        audioRef.current.play();
        setPlayIcon(pauseIconPath);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressBarWidth = duration
    ? `${(currentTime / duration) * 100}%`
    : "0%";

  return (
    <div className="w-80 h-10 mx-auto rounded-lg p-2 gap-3 flex items-center bg-gray-200">
      <Image
        src={playIcon} // Use state to toggle between play and pause icons
        alt={isPlaying ? "pause" : "play"}
        width={24}
        height={24}
        onClick={togglePlay}
      />
      <div className="leading-[2.60rem] max-w-[40px]">
        {formatTime(currentTime)}
      </div>
      <div className="w-48 h-1 bg-white">
        <div
          className="h-full bg-black"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => {
          setIsPlaying(false);
          setPlayIcon(playIconPath);
        }}
      />
    </div>
  );
};

export default AudioPlayer;
