import React, { useEffect, useState } from 'react';
import ErrorPage from '@/components/Error';
import { useRouterManager } from '@/services/RouterManager';
import { getCourseDetails } from '@/services/courseService';
import { CourseColorMap, CourseDetails } from '@/types/Course';
import { Tab, Tabs } from '@nextui-org/react';
import { UserIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FlashCardsPage from './flashcards';
import InfoPage from './info';
import LiveLessonsPage from './liveLesson';
import MaterialsPage from './materials';
import PracticeToGoPage from './practiveToGo';
import RecordingPage from './recordings';

const MyCoursePage = () => {
  const [courseDetails, setCourseDetails] = useState<CourseDetails | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | string[] | undefined>(
    undefined
  );
  const routerManager = useRouterManager();
  const router = useRouter();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // const details = await getCourseDetails('78486'); //TODO: GUY<>OMER LOCAL STORAGE
        setCourseDetails(JSON.parse(localStorage.getItem('course') as string));
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchCourseDetails();
  }, []);

  useEffect(() => {
    if (router.query.tab) {
      setActiveTab(router.query.tab);
    }
  }, [router.query.tab]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  const { color, schedule, instructor, classNote } = courseDetails;

  const myCourseTabs = [
    {
      key: routerManager.MY_COURSE_LIVE_LESSON_TAB,
      title: "Live Lesson",
      icon: "/icons/live-lesson.svg",
      component: LiveLessonsPage,
    },
    {
      key: routerManager.MY_COURSE_RECORDING_TAB,
      title: "Recordings",
      icon: "icons/recording.svg",
      component: RecordingPage,
    },
    {
      key: routerManager.MY_COURSE_FLASHCARDS_TAB,
      title: "Flashcards",
      icon: "icons/flashcards.svg",
      component: FlashCardsPage,
    },
    {
      key: routerManager.MY_COURSE_PRACTICE_TAB,
      title: "Practice To Go",
      icon: "icons/practice.svg",
      component: PracticeToGoPage,
    },
    {
      key: routerManager.MY_COURSE_MATERIALS_TAB,
      title: "Materials",
      icon: "icons/material.svg",
      component: MaterialsPage,
    },
    {
      key: routerManager.MY_COURSE_INFO_TAB,
      title: "Info",
      icon: "icons/info.svg",
      component: InfoPage,
    },
  ];

  const openClassNotes = () => {
    if (classNote) window.open(classNote, '_blank');
  };

  const renderTabContent = () => {
    const currentTab = myCourseTabs.find((t) => t.key === activeTab);
    return currentTab
      ? React.createElement(currentTab.component, { courseDetails })
      : null;
  };

  return (
    <div className="flex flex-col px-10">
      <div className="p-4 gap-4">
        <h1 className="pb-4 text-4xl font-bold">My Course</h1>
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-6 w-6 rounded-full"
            style={{ backgroundColor: CourseColorMap[color] }}
          ></span>
          <div className="text-xl font-bold leading-normal">{color}</div>
          <div className="inline-block align-middle">
            <div className="text-base font-normal leading-normal text-gray-700 whitespace-nowrap">
              {schedule}
            </div>
          </div>
          <div className="flex items-center gap-3 ml-2">
            {instructor?.avatar ? (
              <Image
                src={instructor?.avatar ?? ""}
                alt={instructor?.name as string}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <UserIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
            )}

            <div className="text-base font-normal leading-normal text-gray-700 whitespace-nowrap">
              W/ {instructor?.name}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex-grow">
          <Tabs
            aria-label="Course tabs"
            selectedKey={activeTab as any}
            onSelectionChange={setActiveTab as any}
          >
            {myCourseTabs.map((tab) => (
              <Tab
                key={tab.key}
                value={tab.key}
                className={`px-4 py-2transition w-48 duration-300 ease-in-out rounded-t border border-gray5 ${
                  activeTab === tab.key
                    ? "text-black bg-white border-b-transparent"
                    : "text-gray-400 bg-gray6"
                }`}
                title={
                  <>
                    {tab.icon && (
                      <div className="flex">
                        <Image
                          src={tab.icon}
                          alt={`${tab.title} icon`}
                          width={24}
                          height={24}
                        />
                        <span className="p-1">{tab.title}</span>
                      </div>
                    )}
                  </>
                }
              />
            ))}
          </Tabs>
        </div>
        <div
          className={`ml-4 border rounded-full py-1 px-4 flex items-center text-xs hidden sm:inline ${classNote ? "border-black bg-white text-black cursor-pointer hover:bg-gray-100" : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"}`}
          role="button"
          onClick={classNote ? openClassNotes : undefined}
        >
          <Image
            src="/icons/note.svg"
            alt="class-note"
            width={24}
            height={24}
            className="inline mr-2"
          />
          <span className="text-xs hidden sm:inline">Class Note</span>
        </div>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default MyCoursePage;
