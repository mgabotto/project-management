import React from "react";
import DropDown from "./DropDown";

const Stages = ({ task }) => {
  return (
    <>
      <td>
        <DropDown
          stage={task.stages.recInformacion}
          track="stages.recInformacion"
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.modelado}
          track={"stages.modelado"}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.atrProcesos}
          track={"stages.atrProcesos"}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.atrTareas}
          track={"stages.atrTareas"}
          id={task.id}
        />
      </td>
      <td>
        <DropDown stage={task.stages.fad} track={"stages.fad"} id={task.id} />
      </td>
      <td>
        <DropDown
          stage={task.stages.keyUser}
          track={"stages.keyUser"}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.coordProcesos}
          track={"stages.coordProcesos"}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.validacionEdison}
          track={"stages.validacionEdison"}
          id={task.id}
        />
      </td>
      <td>
        <DropDown
          stage={task.stages.statusGeneral}
          track={"stages.statusGeneral"}
          id={task.id}
        />
      </td>
    </>
  );
};

export default Stages;
