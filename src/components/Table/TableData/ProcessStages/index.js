import React, { useState } from "react";
import Stages from "./Stages";
import { StageRow } from "../../TableStyle";
import { DeleteOutlined } from "@ant-design/icons";
import ProcessDescription from "./ProcessDescription";

const TaskRow = ({ task, deleteRow }) => {
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
          <DeleteOutlined
            className="deleteBtn"
            style={{ cursor: "pointer" }}
            onClick={() => deleteRow(task.id)}
          />
        </td>
      </StageRow>
      <ProcessDescription display={display} task={task} />
    </>
  );
};

export default TaskRow;
