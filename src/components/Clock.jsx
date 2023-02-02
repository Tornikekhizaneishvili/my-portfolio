import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString([], { timeStyle: "short" }));
    }, 1000);
  }, []);

  return (
    <div className="fixed top-[1.5%] left-[50%] md:invisible lg:visible text-white text-2xl font-clock cursor-pointer hover:text-red-500 duration-300 ">
      {clockState}
    </div>
  );
}

export default Clock;
