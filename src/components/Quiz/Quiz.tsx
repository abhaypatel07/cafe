import React, { useState, useCallback, useEffect } from "react";
import ListenQuestion from "./ListenQuestion";
import SpeakQuestion from "./SpeakQuestion";
import { QuestionType, Quiz } from "@/types/Quiz";
import Image from "next/image";
import QuizProgressBar from "./QuizProgressBar";
import { Lesson } from "@/types/Lesson";
import { getQuizByQuizId } from "@/services/quizService";
import QuizActions from "./QuizActions";

interface QuizProps {
  currentLesson: Lesson;
  nextLesson: () => void;
}

const Quiz: React.FC<QuizProps> = ({ currentLesson, nextLesson }) => {
  const [quiz, setQuiz] = useState<Quiz>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizStart, setIsQuizStart] = useState(false);
  const [answer, setAnswer] = useState<any>();
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!currentLesson?.quiz_id) {
        return;
      }

      try {
        const quiz = await getQuizByQuizId(currentLesson?.quiz_id);
        setQuiz(quiz);
        setCurrentQuestionIndex(0);
        setIsQuizStart(false);
        setIsDone(false);
      } catch (error) {
        console.error("Failed to fetch quiz", error);
      }
    };

    fetchQuiz();
  }, [currentLesson]);

  useEffect(() => {
    setAnswer(null);
    setIsDone(false);
  }, [currentQuestionIndex]);

  const goToNextQuestion = () => {
    if (
      !quiz ||
      !quiz.questions ||
      currentQuestionIndex >= quiz.questions.length - 1
    ) {
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswer(null);
  };

  const renderQuestion = () => {
    if (
      quiz?.questions[currentQuestionIndex]?.type === QuestionType.textToVoice
    ) {
      return (
        <SpeakQuestion
          question={quiz?.questions[currentQuestionIndex]}
          setAnswer={setAnswer}
        />
      );
    } else {
      if (quiz?.questions[currentQuestionIndex]) {
        return (
          <ListenQuestion
            question={quiz?.questions[currentQuestionIndex]}
            setAnswer={setAnswer}
            answer={answer}
            isDone
          />
        );
      }
    }
  };

  return (
    <div className="w-[1170px] h-[480px] flex flex-col justify-center px-4 py-10 gap-6">
      {!isQuizStart ? (
        <>
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-[35.27px]">
            {" "}
            {currentLesson?.title}
          </h2>
          <Image
            src="/icons/practice.svg"
            alt="Start Quiz"
            width={87}
            height={114}
            className="mx-auto"
          />
          <p className="text-lg lg:text-xl leading-[23.52px] text-center">
            <span className="font-bold">When you see the 🎤 sign:</span> Record
            yourself saying the sentence in Hebrew (the emojis indicate if it’s
            M/F).
          </p>
          <p className="text-lg lg:text-xl leading-[23.52px] text-center">
            <span className="font-bold">When you see the 📝 sign:</span> Listen
            to the recording and type the English translation in the box, Also,
            write down the Hebrew translation in your notebook.
          </p>
          <button
            className="w-[209px] h-[40px] text-white gap-2 border-t-0 border-r-0 border-b-0 rounded-[16px] bg-black mx-auto"
            onClick={() => {
              setIsQuizStart(true);
            }}
          >
            Start Quiz
          </button>
        </>
      ) : (
        <>
          <Image
            className="mr-auto hover:cursor-pointer"
            src={"/icons/cross.svg"}
            alt="cross"
            width={24}
            height={24}
            onClick={() => {
              setAnswer(null);
              setCurrentQuestionIndex(0);
              setIsQuizStart(false);
            }}
          />
          <div>
            <QuizProgressBar
              completed={currentQuestionIndex + 1}
              total={quiz?.questions?.length ?? 0}
            />
          </div>
          {renderQuestion()}
          <QuizActions
            isDone={isDone}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            nextLesson={nextLesson}
            goToNextQuestion={goToNextQuestion}
            answer={answer}
            setIsDone={setIsDone}
            quiz={quiz}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
