import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Question } from "@/types/Quiz";
import AudioPlayer from "../AudioPlayer";

interface SpeakQuestionProps {
  question: Question;
  setAnswer: (audio: string) => void;
}

const SpeakQuestion: React.FC<SpeakQuestionProps> = ({
  question,
  setAnswer,
}) => {
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recordedAnswer, setRecordedAnswer] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (recording) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [recording]);

  useEffect(() => {
    const handleRecording = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error("getUserMedia is not supported");
        return;
      }

      try {
        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder: MediaRecorder = new MediaRecorder(stream, {
          mimeType: "audio/webm",
        });
        const chunks: Blob[] = [];

        recorder.ondataavailable = (event: BlobEvent) => {
          chunks.push(event.data);
        };

        recorder.onstop = () => {
          const audioBlob: Blob = new Blob(chunks, { type: "audio/webm" });
          const audioUrl: string = URL.createObjectURL(audioBlob);
          setRecordedAnswer(audioUrl);
          setAnswer(audioUrl);
          setRecording(false);
        };

        setMediaRecorder(recorder);
        setAudioChunks(chunks);

        if (recording) {
          recorder.start();
        }
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    };

    if (recording) {
      handleRecording();
    }

    return () => {
      if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
      }
    };
  }, [recording]);

  const formatTime = (time: number): string => {
    const hours: number = Math.floor(time / 60);
    const minutes: number = time % 60;
    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  const toggleRecording = () => {
    setTimer(0);
    setRecording((prev: boolean) => {
      if (prev && mediaRecorder && mediaRecorder.state === "recording") {
        setRecordedAnswer("");
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      }
      return !prev;
    });
  };

  return (
    <div>
      <h2 className="font-bold text-2xl leading-9 text-center mb-3">
        {question?.question_text}
      </h2>

      {!recording ? (
        !recording && recordedAnswer === "" ? (
          <button
            onClick={toggleRecording}
            className="h-10 flex flex-row mx-auto mt-6 w-fit items-center justify-center rounded-2xl border border-black px-2 gap-2"
          >
            <Image
              src={"/icons/record-mic.svg"}
              alt="Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <span>Record your answer</span>
          </button>
        ) : (
          <div className="flex flex-col gap-4">
            <AudioPlayer src={recordedAnswer} />
            <button
              onClick={toggleRecording}
              className="w-44 h-10 py-2 flex flex-row justify-center mx-auto my-auto rounded-2xl border border-gray-400 gap-2"
            >
              <Image
                src={"/icons/microphone.svg"}
                alt="record-icon"
                width={24}
                height={24}
              />

              <span className="font-medium text-sm leading-5">
                Record Again
              </span>
            </button>
          </div>
        )
      ) : (
        <div className="w-80 h-10 mx-auto gap-2 mt-6 flex flex-row rounded-lg justify-between pl-4 pr-8 bg-gray-200">
          <Image
            src={"/icons/record-icon.svg"}
            alt="recording"
            width={24}
            height={24}
          />
          <div className="leading-[2.60rem]">{formatTime(timer)}</div>
          <Image
            src={"/icons/record-bar.svg"}
            alt="recording"
            width={180}
            height={20}
          />
          <Image
            className="hover:cursor-pointer"
            src={"/icons/pause-recording.svg"}
            alt="pause/play"
            width={22}
            height={22}
            onClick={() => {
              toggleRecording();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SpeakQuestion;
