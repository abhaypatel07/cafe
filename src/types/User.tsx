export interface User {
  id?: string;
  avatar?: string;
  name?: string;
  icon?: string;
}

export interface UserProfile extends User {
  firstName?: string;
  lastName?: string;
  birthDay?: string;
  email?: string;
  country?: string;
  city?: string;
  nationality?: string;
  gender?: string;
  company?: string;
  profession?: string;
  passionateAbout?: string;
  studyReason?: string;
}
