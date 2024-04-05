import BackLink from "@/components/ui/BackLink";
import MyCoursePage from "@/pages/my-course";
import { getCourseDetails } from "@/services/courseService";
import { CourseDetails } from "@/types/Course";
import { getBaseUrl } from "@/utils/utils";

export const getServerSideProps = async (context: any) => {
  try {
    const baseUrl = getBaseUrl(context);
    let courseDetails = await getCourseDetails(context.params.id, baseUrl);

    return {
      props: {
        courseDetails,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

const PastCoursePage = ({
  courseDetails,
  error,
}: {
  courseDetails: CourseDetails;
  error: any;
}) => {
    return (
      <div>
        <BackLink classname="mt-6 mb-2 px-14" />

        <MyCoursePage 
        // courseDetails={courseDetails} error={error} 
        />
      </div>
    );
}

export default PastCoursePage;
