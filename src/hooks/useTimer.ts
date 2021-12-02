import moment from "moment";
import React, { useEffect, useState } from "react";

const useTimer = (interval: number) => {
  const [time, setTime] = useState<Date | moment.Moment>(moment());

  if (interval <= 0) throw new Error("Invalid interval for timer.");

  useEffect(() => {
    setInterval(() => {
      setTime(moment());
    }, interval);
  }, []);

  return time;
};

export default useTimer;
