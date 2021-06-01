import React, { useState } from "react";
import Stages from "./Stages";
import { StageRow, DescriptionRow } from "../TableStyle";

const TaskRow = ({ task, update, deleteRow }) => {
  const [display, setDisplay] = useState("hide");

  const displayDescription = () =>
    display === "hide" ? setDisplay("show") : setDisplay("hide");

  return (
    <>
      <StageRow>
        <td className="text">{task.name.macroproceso}</td>
        <td className="text" onClick={displayDescription}>
          {task.name.proceso}
        </td>
        <Stages task={task} />
        <td>
          <i
            className="fas fa-lg fa-times-circle"
            style={{ cursor: "pointer" }}
            onClick={() => deleteRow(task.id)}
          />
        </td>
      </StageRow>

      <DescriptionRow display={display}>
        <td colSpan="11">
          <div className="details">
            <div className="responsables">
              <div className="responsable">
                <p>Responsable de seguimiento</p>
                <textarea name="respSeguimiento" cols="12" rows="1" />
              </div>
              <div className="responsable">
                <p>Key User</p>
                <textarea name="keyUser" cols="12" rows="1" />
              </div>
            </div>
            <div className="description">
              <textarea placeholder="Observaciones" rows="3" cols="40" />
            </div>
          </div>
        </td>
      </DescriptionRow>
    </>
  );
};

export default TaskRow;
