import React, { useState, useEffect } from "react";
import Console from "./Console";
import Data from "./TableData";
import { db } from "../../firebase/firebaseConfig";
import { DeleteTask } from "../../firebase/DBmanage";

const Table = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    let tasks = [];
    db.collection("procesos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
          tasks.push({ ...doc.data(), id: doc.id })
        );
        setData(tasks);
        console.log(tasks);
      });
  }, [change]);

  const handleSearch = (query) => {
    const filterTasks = data.filter((task) => {
      return task.name.proceso.toLowerCase().includes(query.toLowerCase());
    });
    setData(filterTasks);
  };

  const update = () => setChange(!change);

  const deleteTask = (id) => {
    DeleteTask(id);
    setChange(!change);
  };

  return (
    <>
      <Console update={update} handleSearch={handleSearch} />
      {!data && <i class="fas fa-spinner"></i>}
      {data && <Data data={data} deleteTask={deleteTask} />}
    </>
  );
};

export default Table;
