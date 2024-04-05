export interface Material {
  id?: string;
  course_id: string;
  created_at: Date;
  last_update: Date;
  created_by_user_id: string;
  content: string;
  links: string[];
  images_url: string[];
}
