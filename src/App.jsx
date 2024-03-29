import { useImmer } from "use-immer";
import Logging from "./components/sections/LoggingSection";
import Statistics from "./components/sections/StatisticsSection";
import Usage from "./components/sections/UsageSection";
import { useEffect } from "react";

function App() {
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);

  const initData = () => {
    let dataObj = {
      dailyGoal: 70,
      history: [],
    };

    for (let i = 6; i >= 0; i--) {
      const date = new Date(todaysDate);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      console.log(date.toDateString());
      console.log(i);
      dataObj.history.push({
        date: date.toDateString(),
        usage: {
          drink: 0,
          shower: 0,
          flush: 0,
          other: 0,
          total: 0,
        },
      });
    }
    return dataObj;
  };

  const [data, setData] = useImmer(
    JSON.parse(window.localStorage.getItem("watertrackr_data")) || initData()
  );

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

  useEffect(() => {
    window.localStorage.setItem("watertrackr_data", JSON.stringify(data));
  }, [data]);

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
