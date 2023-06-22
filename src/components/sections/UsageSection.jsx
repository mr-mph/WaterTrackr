import Button from "../interactive/Button";
import Modal from "../interactive/Modal";
import { useState } from "react";
import Droplet from "../visuals/Droplet";

export default function UsageSection(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="col card mid">
      <h2 className="text">Today's Usage</h2>
      <div className="col card mid-front">
        <Droplet value={props.usage} max={props.goal} />
        <Button
          text="Edit Daily Goal"
          handleClick={() => setModalOpen((prev) => !prev)}
        />
      </div>
      {modalOpen && (
        <Modal
          type={[
            {
              text: "What's your daily goal?",
              type: "input",
              unit: "Gallons",
              value: props.goal,
            },
          ]}
          handleClose={(state) => {
            setModalOpen(false);
            if (state) props.handleGoalChange(state[0].value);
          }}
        />
      )}
    </div>
  );
}
