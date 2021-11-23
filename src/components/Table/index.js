import React, { useState, useEffect } from "react";
import Console from "./Console";
import Data from "./TableData";
import { db } from "../../firebase/firebaseConfig";
import { DeleteTask } from "../../firebase/DBmanage";
import { TableContainer } from "./TableStyle";
import Loader from "../assets/Loader";

const Table = () => {
  const [data, setData] = useState("");
  const [searchfield, setSearchfield] = useState("");
  const [change, setChange] = useState(false);

  // FETCH DATA
  useEffect(() => {
    let tasks = [];
    db.collection("procesos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
          tasks.push({ ...doc.data(), id: doc.id })
        );
        setSearchfield(tasks);
        setData(tasks);
      });
  }, [change]);

  const update = () => setChange(!change);

  // FILTRAR PROCESOS SEGUN BUSQUEDA
  const handleSearch = (query) => {
    const filterTasks = data.filter((task) => {
      return task.name.proceso.toLowerCase().includes(query.toLowerCase());
    });
    setSearchfield(filterTasks);
  };

  // BORRAR TAREA
  const deleteTask = (id) => {
    DeleteTask(id);
    setChange(!change);
  };

  return (
    <TableContainer>
      <Console update={update} handleSearch={handleSearch} />
      {!data && <Loader className="lds-dual-ring">Cargando</Loader>}
      {data && <Data data={searchfield} deleteTask={deleteTask} />}
    </TableContainer>
  );
};

export default Table;
