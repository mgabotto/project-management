import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskRow from "./TaskRow";
import { StyledTable } from "./TableStyle";
import { db } from "../../firebase/firebaseConfig";
// import { db2 } from "../../data";
import { NewTask, GetTasks } from "../../firebase/DBmanage";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetTasks();
    console.log("effect");
  }, []);

  const addTask = () => {
    NewTask();
    console.log("anda");
  };

  return (
    <StyledTable>
      <button onClick={addTask}> ADD </button>
      <thead>
        <Header />
      </thead>
      <tbody>
        {data.map((task, index) => (
          <TaskRow task={task} key={index} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
