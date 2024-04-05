import moment from "moment";

const LessonEntry = ({
  classNumber,
  lessonDate,
}: {
  classNumber: number;
  lessonDate: string;
}) => {
  const formattedDate = moment(lessonDate).format("ddd, MMM DD");
  return (
    <div className="flex items-center justify-between bg-yellow-200 rounded-full pr-4 py-1">
      <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center mr-3">
        <span className="text-black text-lg font-bold">{classNumber}</span>
      </div>
      <div>
        <span className="text-m">{formattedDate}</span>
      </div>
    </div>
  );
};

export default LessonEntry;
