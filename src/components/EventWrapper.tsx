import React, { useState } from "react";
import CalendarEventHover from "./calendar/CalendarEventHover";

const EventWrapperComponent: React.FC<any> = ({ event, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!hoverPosition) {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      setIsHovered(true);
      setHoverPosition({
        x: e.clientX + scrollX,
        y: e.clientY + scrollY,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverPosition(null);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isHovered && hoverPosition && (
        <CalendarEventHover
          event={event}
          position={{ top: hoverPosition.y, left: hoverPosition.x }}
          onMouseLeavePopup={handleMouseLeave}
        />
      )}
    </div>
  );
};

export default EventWrapperComponent;
