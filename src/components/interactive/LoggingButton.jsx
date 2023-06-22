import { useState, useEffect } from "react";
import Icon from "../visuals/Icon";
import Modal from "../interactive/Modal";

export default function LoggingButton(props) {
  const [pressed, setPressed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseup", () => {
      setPressed(false);
    });
  }, []);

  return (
    <>
      <button
        className="row button front loggingbutton"
        onClick={() => setModalOpen(true)}
        onMouseDown={() => setPressed(true)}
        style={{ width: "250px" }}
      >
        <h3 className="text">{props.name}</h3>
        <Icon type={props.icon} key={props.icon} pressed={pressed} />
      </button>

      {modalOpen && (
        <Modal
          type={props.modal}
          handleClose={(log) => {
            setModalOpen(false);
            if (log) props.handleLog(log);
          }}
        />
      )}
    </>
  );
}
