import "./App.css";
import moment from "moment";

import { Monitor } from "./components/Monitor/Monitor";
import { ChoosedMonth } from "./components/ChoosedMonth/ChoosedMonth";
import { useState } from "react";

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <div style={{ width: "100vw", padding: "0 20px" }}>
      <Monitor
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <ChoosedMonth today={today} startDay={startDay} />
    </div>
  );
}

export default App;
