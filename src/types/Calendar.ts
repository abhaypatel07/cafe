import { ToolbarProps } from "react-big-calendar";
import { CalendarEvent } from "./Event";

export interface CalendarEventHoverProps {
  event: CalendarEvent;
}

export interface CalendarEventPopupProps {
  event: CalendarEvent;
  onClose: () => void;
}

export interface TimezoneOption {
  label: string;
  value: string;
}

export interface CustomToolbarProps extends ToolbarProps {
  onTimezoneChange: (timezone: string) => void;
  selectedTimezone: string;
}

export interface CalendarDate {
  date: Date;
}
