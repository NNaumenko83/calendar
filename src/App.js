import "./App.css";
import moment from "moment";
import { CalendarGrid } from "./components/CalendarGrid/CalendarGrid";

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });

  const startDay = moment().startOf("month").startOf("week");
  console.log("startDay:", startDay.format("YYYY-MM-DD"));
  const endDay = moment().endOf("month").endOf("week");
  console.log("endDay:", endDay.format("YYYY-MM-DD"));

  const calendar = [];

  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, "day");
  }

  console.log(calendar);

  return (
    <div>
      <CalendarGrid startDay={startDay} />
    </div>
  );
}

export default App;
