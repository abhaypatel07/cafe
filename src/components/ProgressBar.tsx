const ProgressBar = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) => {
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="flex items-center justify-center w-full ml-10">
      <span className="font-normal text-base leading-normal text-gray2 whitespace-nowrap">{`${completed}/${total} lessons`}</span>
      <div
        className="w-full h-[10px] mx-4 bg-gray-200 rounded-full overflow-hidden relative"
        style={{ border: "1px solid black" }}
      >
        <div className="h-full rounded-l-full transition-all duration-300 ease-in-out ">
          <div
            className="bg-primary h-full rounded-l-full"
            style={{
              width: `${progress}%`,
            }}
          >
            {progress > 0 && (
              <div className="absolute bg-primary left-0 top-0 bottom-0 w-3 rounded-l-full"></div>
            )}
          </div>
        </div>
      </div>

      <span className="font-normal text-base leading-normal text-gray3">{`${progress.toFixed(0)}%`}</span>
    </div>
  );
};

export default ProgressBar;
