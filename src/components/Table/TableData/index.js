import React from "react";
import { StyledTable } from "../TableStyle";
import ProcessStages from "./ProcessStages";
import Header from "./Header";

const Data = ({ data, deleteTask }) => {
  const deleteRow = (id) => deleteTask(id);

  return (
    <StyledTable>
      <thead>
        <Header />
      </thead>
      <tbody>
        {data.map((task, index) => (
          <ProcessStages deleteRow={deleteRow} task={task} key={index} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Data;
