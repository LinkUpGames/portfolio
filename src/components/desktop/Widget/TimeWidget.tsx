import Widget from "../Widget";
import clockIcon from "pixelarticons/svg/clock.svg";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const TimeWidget = () => {
  // STATES
  /**
   * The time to display in the upper right corner
   */
  const [time, setTime] = useState(
    DateTime.now().toLocaleString({
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  // EFFECTS
  /**
   * Update the time for the clock every second
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        DateTime.now().toLocaleString({
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Widget className="flex gap-1 md:gap-2 w-full items-center justify-center">
      <img src={clockIcon} className="object-contain w-6 h-6 md:w-8 md:h-8" />

      <h4 className="text-base md:text-lg text-green">{time}</h4>
    </Widget>
  );
};

export default TimeWidget;
