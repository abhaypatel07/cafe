import React, { useCallback, useState } from "react";
import { Calendar, EventPropGetter, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarToolbar from "./CalendarToolbar";
import CalendarEventPopup from "./CalendarEventPopup";
import { CalendarEvent } from "@/types/Event";
import CustomWeekHeader from "./CustomWeekHeader";
import EventWrapperComponent from "../EventWrapper";

const localizer = momentLocalizer(moment);

const initialEvents = [
  {
    id: 1,
    levels: ["Dark green", "Lime"],
    teacher: {
      name: "Aviad Duvdevani",
      photo:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    title: "Lesson",
    start: new Date("2024-03-03T10:00:00-00:00"),
    end: new Date("2024-03-03T11:00:00-00:00"),
    color: "darkgreen",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    url: "https://citizen.cafe/lesson-url",
  },
  {
    id: 2,
    levels: ["Dark green", "Lime"],
    teacher: {
      name: "Aviad Duvdevani",
      photo:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    title: "Lesson",
    start: new Date("2024-03-06T10:00:00-00:00"),
    end: new Date("2024-03-06T11:00:00-00:00"),
    color: "darkgreen",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    url: "https://citizen.cafe/lesson-url",
  },
  {
    id: 3,
    levels: ["Lime"],
    teacher: {
      name: "Aviad Duvdevani",
      photo:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    title: "Lime",
    start: new Date("2024-03-04T12:00:00-00:00"),
    end: new Date("2024-03-04T14:00:00-00:00"),
    color: "lime",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    url: "https://citizen.cafe/lesson-url",
  },
  {
    id: 4,
    levels: ["Lime"],
    teacher: {
      name: "Aviad Duvdevani",
      photo:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    title: "Lime",
    start: new Date("2024-03-07T12:00:00-00:00"),
    end: new Date("2024-03-07T14:00:00-00:00"),
    color: "lime",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    url: "https://citizen.cafe/lesson-url",
  },
];

const MyCalendar: React.FC = () => {
  const eventStyleGetter: EventPropGetter<any> = (
    event,
    start,
    end,
    isSelected,
  ) => {
    var style = {
      backgroundColor: "white",
      color: event.color || "black",
      borderRadius: "3px",
      border: `3px solid ${event.color}`,
      opacity: 1,
      display: "block",
      padding: "2px",
      fontSize: "12px",
    };
    return {
      style: style,
    };
  };
  const [timezone, setTimezone] = useState(moment.tz.guess());
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>();

  const onSelectEvent = (event: any) => {
    if (selectedEvent?.id !== event.id) {
      setSelectedEvent(event);
    }
  };

  const convertEventsToTimezone = (targetTimezone: string) => {
    return initialEvents.map((event) => {
      const startMoment = moment.parseZone(event.start);
      const endMoment = moment.parseZone(event.end);

      const startInTargetTz = startMoment.tz(targetTimezone).format();
      const endInTargetTz = endMoment.tz(targetTimezone).format();

      const returnStart = moment(
        startInTargetTz,
        "YYYY-MM-DDTHH:mm:ss",
      ).toDate();
      const returnEnd = moment(endInTargetTz, "YYYY-MM-DDTHH:mm:ss").toDate();

      return {
        ...event,
        start: returnStart,
        end: returnEnd,
      };
    });
  };

  const handleTimezoneChange = useCallback((newTimezone: string) => {
    const events = convertEventsToTimezone(newTimezone);
    setEvents(events);
    setTimezone(newTimezone);
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        formats={{
          timeGutterFormat: "h A",
        }}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "66vh" }}
        min={new Date(0, 0, 0, 0, 0)}
        max={new Date(0, 0, 0, 23, 0)}
        views={["week", "month"]}
        defaultView="week"
        components={{
          eventWrapper: EventWrapperComponent,
          toolbar: (props) => (
            <CalendarToolbar
              {...props}
              onTimezoneChange={handleTimezoneChange}
              selectedTimezone={timezone}
            />
          ),
          week: {
            header: CustomWeekHeader,
          },
        }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={onSelectEvent}
      />
      {selectedEvent && (
        <CalendarEventPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(undefined)}
        />
      )}
    </div>
  );
};

export default MyCalendar;
