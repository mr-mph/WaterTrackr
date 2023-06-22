import { useState } from "react";
import Switch from "../interactive/Switch";
import Slider from "../visuals/Slider";
import SpecificDisplay from "../visuals/SpecificDisplay";
import WeekdayDisplay from "../visuals/WeekdayDisplay";

export default function StatisticsSection(props) {
  const [showSpecifics, setShowSpecifics] = useState(false);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const pastWeek = props.history.slice(-7);

  const weekdayComponents = pastWeek.map((day) => {
    return (
      <WeekdayDisplay
        day={daysOfWeek[new Date(day.date).getDay()]}
        value={day.usage.total}
        max={props.dailyGoal}
        key={day.date}
      />
    );
  });

  const totalCategories = {
    drink: 0,
    shower: 0,
    flush: 0,
    other: 0,
    total: 0,
  };

  pastWeek.forEach((day) => {
    Object.keys(totalCategories).forEach((key) => {
      totalCategories[key] += day.usage[key];
    });
  });

  return (
    <div className="col card mid">
      <h2 className="text">Weekly Statistics</h2>
      <div className="col card mid-front">
        <Switch
          options={["General", "Specifics"]}
          selected={showSpecifics ? "Specifics" : "General"}
          handleSwitch={(selected) => setShowSpecifics(selected == "Specifics")}
        />
        <div className="col card front specific-section">
          {showSpecifics ? (
            <>
              <SpecificDisplay
                text="Drinking"
                value={totalCategories.drink}
                max={props.dailyGoal * pastWeek.length}
              />
              <SpecificDisplay
                text="Showering"
                value={totalCategories.shower}
                max={props.dailyGoal * pastWeek.length}
              />
              <SpecificDisplay
                text="Flushing"
                value={totalCategories.flush}
                max={props.dailyGoal * pastWeek.length}
              />
              <SpecificDisplay
                text="Other"
                value={totalCategories.other}
                max={props.dailyGoal * pastWeek.length}
              />
            </>
          ) : (
            <>
              <SpecificDisplay
                text="Past Week"
                value={totalCategories.total}
                max={props.dailyGoal * pastWeek.length}
              />
              <div className="row card mid week stretch">
                {weekdayComponents}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
