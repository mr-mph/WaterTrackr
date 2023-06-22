import { useImmer } from "use-immer";
import Logging from "./components/sections/LoggingSection";
import Statistics from "./components/sections/StatisticsSection";
import Usage from "./components/sections/UsageSection";
import { useEffect } from "react";

function App() {
  // TODO: save to local storage using useEffect
  const [data, setData] = useImmer(
    JSON.parse(window.localStorage.getItem("watertrackr_data")) || {
      dailyGoal: 70,
      history: [],
    }
  );

  useEffect(() => {
    window.localStorage.setItem("watertrackr_data", JSON.stringify(data));
  }, [data]);

  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  if (data.history.at(-1).date != todaysDate.toDateString()) {
    setData((prevData) => {
      prevData.history.push({
        date: todaysDate.toDateString(),
        usage: {
          drink: 0,
          shower: 0,
          flush: 0,
          other: 0,
          total: 0,
        },
      });
    });
  }

  const handleGoalChange = (newGoal) => {
    setData((prevData) => {
      prevData.dailyGoal = newGoal;
    });
  };

  const handleLog = (log) => {
    setData((prevData) => {
      prevData.history[prevData.history.length - 1].usage[log.id] +=
        log.gallons;
      prevData.history[prevData.history.length - 1].usage.total += log.gallons;
    });
  };

  return (
    <>
      <h1 className="text">Dashboard</h1>
      <div className="row card main back">
        <Logging handleLog={handleLog} />
        <Statistics history={data.history} dailyGoal={data.dailyGoal} />
        <Usage
          goal={data.dailyGoal}
          usage={data.history.at(-1).usage.total}
          handleGoalChange={handleGoalChange}
        />
      </div>
    </>
  );
}

export default App;
