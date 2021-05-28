import React from "react";
import DropDown from "./DropDown";

const Stages = ({ task }) => {
  const update = (id, stage) => {
    console.log(stage, id, task);
  };

  return (
    <>
      <td>
        <DropDown
          stage={task.stages.recInformacion}
          update={update}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.atrProcesos}
          update={update}
          id={task.id}
        />
      </td>
      <td>
        <DropDown stage={task.stages.atrTareas} update={update} id={task.id} />
      </td>
      <td>
        <DropDown
          stage={task.stages.coordProcesos}
          update={update}
          id={task.id}
        />
      </td>
      <td>
        <DropDown stage={task.stages.fad} update={update} id={task.id} />
      </td>
      <td>
        <DropDown stage={task.stages.keyUser} update={update} id={task.id} />
      </td>
      <td>
        <DropDown stage={task.stages.modelado} update={update} id={task.id} />
      </td>
      <td>
        <DropDown
          stage={task.stages.statusGeneral}
          update={update}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.validacionEdison}
          update={update}
          id={task.id}
        />
      </td>
    </>
  );
};

export default Stages;
