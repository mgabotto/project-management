import React, { useState } from "react";
import DropDown from "./DropDown";
import { StageRow, DescriptionRow } from "./TableStyle";

const TaskRow = ({ task, update }) => {
  const [display, setDisplay] = useState("hide");

  const displayDescription = () =>
    display === "hide" ? setDisplay("show") : setDisplay("hide");

  const updateStage = (id, value) => {
    update(id, value);
  };

  return (
    <>
      <StageRow>
        <td>{task.name.macroproceso}</td>
        <td onClick={displayDescription}>{task.name.proceso}</td>

        {Object.keys(task.stages).map((stage, key) => {
          return (
            <td key={key}>
              <DropDown updateStage={updateStage} data={task.stages[stage]} />
            </td>
          );
        })}
      </StageRow>

      <DescriptionRow display={display}>
        <td colSpan="11">
          <div className="details">
            <div className="responsables">
              <div className="responsable">
                <p>Responsable de seguimiento</p>
                <textarea
                  // value={task.respSeguimiento}
                  name="respSeguimiento"
                  cols="12"
                  rows="1"
                />
              </div>
              <div className="responsable">
                <p>Key User</p>
                <textarea
                  // value={task.keyUser}
                  name="keyUser"
                  cols="12"
                  rows="1"
                />
              </div>
            </div>
            <div className="description">
              <p>Description</p>
              <textarea
                // value={task.observaciones}
                placeholder="Observaciones"
                rows="3"
                cols="40"
              />
            </div>
          </div>
        </td>
      </DescriptionRow>
    </>
  );
};

export default TaskRow;
