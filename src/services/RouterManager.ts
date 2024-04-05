import { useRouter } from "next/router";

class RouterManager {
  private router: ReturnType<typeof useRouter>;

  public readonly AUTH_PATH = "/auth";
  public readonly LOGIN_PATH = `${this.AUTH_PATH}/login`;
  public readonly FORGOT_PASSWORD_PATH = `${this.AUTH_PATH}/forgot-password`;
  public readonly RESET_PASSWORD_PATH = `${this.AUTH_PATH}/reset-password`;
  public readonly PRACTICES_PATH = "/practices";
  public readonly FLASHCARDS_PATH = "/flashcards";
  public readonly RECORDING_PATH = "/recording";
  public readonly HOME_PAGE_PATH = "/";
  public readonly MY_COURSES_PAGE_PATH = "/my-courses";
  public readonly MASTERCLASSES_PAGE_PATH = "/masterclasses";
  public readonly HELP_PAGE_PATH = "/help";
  public readonly NEED_HELP_PAGE_PATH = "/need-help";
  public readonly USER_PROFILE_PAGE_PATH = "/account/profile";
  public readonly USER_CERTIFICATE_PAGE_PATH = "/account/profile";
  public readonly USER_NOTIFICATION_PAGE_PATH = "/account/profile";
  public readonly MESSAGES_PAGE_PATH = "/messages";
  public readonly NOTIFICATIONS_PAGE_PATH = "/notifications";
  public readonly MY_COURSE_PATH = "/my-course";
  public readonly PAST_COURSES_PATH = "/past-courses";
  public readonly TERM_CONDITIONS_PAGE_PATH = "/terms-conditions";
  public readonly PRIVACY_POLICY_PAGE_PATH = "/privacy-page";
  public readonly MY_COURSE_LIVE_LESSON_TAB = "live-lessons";
  public readonly MY_COURSE_RECORDING_TAB = "recordings";
  public readonly MY_COURSE_FLASHCARDS_TAB = "flashcards";
  public readonly MY_COURSE_PRACTICE_TAB = "practiceToGo";
  public readonly MY_COURSE_MATERIALS_TAB = "materials";
  public readonly MY_COURSE_INFO_TAB = "info";

  constructor(router: ReturnType<typeof useRouter>) {
    this.router = router;
  }

  goTo = (path: string) => {
    this.router.push(path);
  };

  goToMyCourseTab = (tab: string) => {
    this.router.push(`/my-course?tab=${tab}`, undefined, { shallow: true });
  };
}

export function useRouterManager() {
  const router = useRouter();
  return new RouterManager(router);
}
