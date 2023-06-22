import Switch from "./Switch";
import Button from "./Button";
import IconButton from "./IconButton";

import { useState } from "react";
import NumberPicker from "./NumberPicker";

export default function Modal(props) {
  const [state, setState] = useState(props.type);

  const handleChange = (text, newValue) => {
    setState((prevState) =>
      prevState.map((item) => {
        return item.text == text ? { ...item, value: newValue } : item;
      })
    );
  };

  const rows = state.map((item) => {
    return (
      <div className="col" key={item.text}>
        <span className="text" style={{ fontSize: "20pt" }}>
          {item.text}
        </span>

        {item.type == "input" ? (
          <NumberPicker
            text={item.unit}
            value={item.value}
            handleChange={(newValue) => handleChange(item.text, newValue)}
          />
        ) : (
          <Switch
            options={item.options}
            selected={item.value}
            handleSwitch={(newValue) => handleChange(item.text, newValue)}
          />
        )}
      </div>
    );
  });

  return (
    <>
      <div className="modal-background"></div>
      <div className="card col modal">
        <IconButton type="x" handleClick={() => props.handleClose(false)} />
        {rows}
        <Button
          text="Save"
          handleClick={() => {
            props.handleClose(state);
          }}
        />
      </div>
    </>
  );
}
