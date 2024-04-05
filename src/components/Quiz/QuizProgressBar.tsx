import React from "react";

interface QuizProgressBarProps {
  completed: number;
  total: number;
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({
  completed,
  total,
}) => {
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full ml-10">
        <div
          className="flex w-2/4 mx-auto h-[10px] bg-gray-200 rounded-full justify-center overflow-hidden relative mt-2"
          style={{ border: "1px solid black" }}
        >
          <div className="h-full rounded-l-full transition-all duration-300 ease-in-out ">
            <div className="h-full rounded-l-full">
              {progress > 0 && (
                <div
                  style={{
                    width: `${progress}%`,
                  }}
                  className={`absolute bg-primary left-0 top-0 bottom-0 w-full rounded-l-full`}
                ></div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2 mx-auto">
          <span className="font-normal text-base leading-normal text-gray2">{`${completed} of ${total}`}</span>
        </div>
      </div>
    </div>
  );
};

export default QuizProgressBar;
