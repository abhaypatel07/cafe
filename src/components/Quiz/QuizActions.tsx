import React from "react";
import Image from "next/image";

interface QuizActionsProps {
  isDone: boolean;
  currentQuestionIndex: number;
  quiz?: {
    questions: {
      text_answer: string;
    }[];
  };
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  nextLesson: () => void;
  goToNextQuestion: () => void;
  answer: any; // Type for the answer prop
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>; // Add setIsDone prop
}

const QuizActions: React.FC<QuizActionsProps> = ({
  isDone,
  currentQuestionIndex,
  quiz,
  setCurrentQuestionIndex,
  nextLesson,
  goToNextQuestion,
  answer,
  setIsDone, // Add setIsDone prop
}) => {
  return (
    <>
      {isDone ? (
        <div className="flex flex-col gap-4 justify-center mx-auto">
          <p className="font-bold text-base md:text-md leading-5 text-center">
            {quiz?.questions[currentQuestionIndex]?.text_answer}
          </p>
          {currentQuestionIndex + 1 === quiz?.questions?.length ? (
            <>
              <div className="flex flex-row gap-6">
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                  }}
                  className="w-52 h-10 border rounded-2xl border-black px-2 gap-2"
                >
                  <span>Start Over</span>
                </button>
                <button
                  onClick={() => {
                    nextLesson();
                  }}
                  className="flex flex-row justify-center w-52 h-10 px-2 pt-2 gap-2 rounded-2xl border-t-0 border-r-0 border-b-0 border-gray-400 bg-black text-white"
                >
                  <span>Next Quiz</span>
                  <Image
                    src={"/icons/arrow-right-black.svg"}
                    alt="next"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                goToNextQuestion();
              }}
              className="flex flex-row justify-center mx-auto w-52 h-10 px-2 pt-2 gap-2 rounded-2xl border-t-0 border-r-0 border-b-0 border-gray-400 bg-black text-white"
            >
              <span>Continue</span>
              <Image
                src={"/icons/arrow-right-black.svg"}
                alt="next"
                width={24}
                height={24}
              />
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-8">
          <button
            className="w-52 h-10 rounded-[16px] border border-black px-2 py-1 gap-2"
            onClick={() => {
              goToNextQuestion();
            }}
          >
            <span className="text-base font-medium leading-[20.58px] text-left">
              Skip
            </span>
          </button>
          <button
            disabled={!!!answer}
            className={`w-52 h-10 rounded-[16px] border border-gray-400 px-2 py-1 gap-2 ${
              !!answer ? "bg-black text-white" : "bg-gray-300 text-white"
            }`}
            onClick={() => {
              setIsDone(true);
            }}
          >
            <span className="text-base font-medium leading-[20.58px] text-left">
              Done
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default QuizActions;
