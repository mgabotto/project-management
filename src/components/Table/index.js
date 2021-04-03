import React, { useState } from "react";
// import { db } from "../../data";
import Header from "./Header";
import { StyledTable } from "./TableStyle";
import TaskRow from "./TaskRow";
import { db } from "../../firebase/firebaseConfig";

const Table = () => {
  const [data, setData] = useState(db);

  const update = (id, value) => {
    setData(...data, ([id] = value));
  };

  const addTask = async () => {
    await db.collection("objeto").doc().set({ algo: "algo mas" });
    console.log("todo ok");
  };

  return (
    <StyledTable>
      <thead>
        <Header />
      </thead>
      <tbody>
        {data.map((task, index) => (
          <TaskRow update={update} task={task} key={index} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
