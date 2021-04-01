import React, { useState } from "react";
import DropDown from "./DropDown";
import { StageRow, DescriptionRow } from "./TableStyle";

const TaskRow = ({ task }) => {
  const [display, setDisplay] = useState("hide");

  const displayDescription = () =>
    display === "hide" ? setDisplay("show") : setDisplay("hide");

  return (
    <>
      <StageRow>
        <td> {task.macroproceso}</td>
        <td className="process" onClick={displayDescription}>
          {task.proceso}
        </td>
        <td>
          <DropDown data={task.recInformacion} />
        </td>
        <td>
          <DropDown data={task.modelado} />
        </td>
        <td>
          <DropDown data={task.atrProcesos} />
        </td>
        <td>
          <DropDown data={task.atrTareas} />
        </td>
        <td>
          <DropDown data={task.fad} />
        </td>
        <td>
          <DropDown data={task.validacion.validacionTGS.keyUser} />
        </td>
        <td>
          <DropDown data={task.validacion.validacionTGS.coordProcesos} />
        </td>
        <td>
          <DropDown data={task.validacion.validacionEdison} />
        </td>
        <td>
          <DropDown data={task.statusGeneral} />
        </td>
      </StageRow>
      <DescriptionRow display={display}>
        <td colSpan="11">
          <div className="details">
            <div className="responsables">
              <div className="responsable">
                <p>Responsable de seguimiento</p>
                <textarea
                  value={task.respSeguimiento}
                  name="respSeguimiento"
                  cols="12"
                  rows="1"
                />
              </div>
              <div className="responsable">
                <p>Key User</p>
                <textarea
                  value={task.keyUser}
                  name="keyUser"
                  cols="12"
                  rows="1"
                />
              </div>
            </div>
            <div className="description">
              <p>Description</p>
              <textarea
                value={task.observaciones}
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
