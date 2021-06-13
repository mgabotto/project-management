import React, { useState } from "react";
import Stages from "./Stages";
import { StageRow } from "./ProcessStagesStyle";
import { DeleteOutlined } from "@ant-design/icons";
import ProcessDescription from "./ProcessDescription";

const ProcessStages = ({ task, deleteRow }) => {
  const name = task.name;

  const [display, setDisplay] = useState("hide");
  const [macroproceso, setMacroproceso] = useState(name.macroproceso);
  const [proceso, setProceso] = useState(name.proceso);

  const displayDescription = () =>
    display === "hide" ? setDisplay("show") : setDisplay("hide");

  const updateNames = (macroproceso, proceso) => {
    setMacroproceso(macroproceso);
    setProceso(proceso);
  };
  return (
    <>
      <StageRow>
        <td className="text">{macroproceso}</td>
        <td className="text" onClick={displayDescription}>
          {proceso}
        </td>
        <Stages task={task} />
        <td>
          <DeleteOutlined
            className="deleteBtn"
            style={{ cursor: "pointer" }}
            onClick={() => deleteRow(task.id)}
          />
        </td>
      </StageRow>
      <ProcessDescription
        updateNames={updateNames}
        display={display}
        task={task}
      />
    </>
  );
};

export default ProcessStages;
