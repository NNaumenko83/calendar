import "./App.css";
import moment from "moment";
import { CalendarGrid } from "./components/CalendarGrid/CalendarGrid";
import { DaysGrid } from "./components/DaysGrid/DaysGrid";
import { Monitor } from "./components/Monitor/Monitor";

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });

  const currentDay = moment();
  const startDay = currentDay.clone().startOf("month").startOf("week");

  return (
    <div>
      <Monitor currentDay={currentDay} />
      <DaysGrid />
      <CalendarGrid startDay={startDay} currentDay={currentDay} />
    </div>
  );
}

export default App;
