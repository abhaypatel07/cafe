export interface CCEvent {
  name: string;
  eventDate: Date;
}

export interface CalendarEvent {
  id: string;
  levels: string[];
  teacher: {
    name: string;
    photo: string;
  };
  title: string;
  start: Date;
  end: Date;
  color: string;
  image: string;
  url: string;
}
