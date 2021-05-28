import React from "react";
import { NewTask } from "../../../firebase/DBmanage";
import { ConsoleWrapper, Search } from "./ConsoleStyle";
import { Button, TextField } from "@material-ui/core";

const Console = ({ update, handleSearch }) => {
  const addTask = async () => {
    await NewTask();
    console.log("Tarea agregada");
    update();
  };

  return (
    <ConsoleWrapper>
      <Button variant="contained" onClick={addTask} size="small">
        Nuevo Proceso{" "}
      </Button>
      <Search>
        <TextField
          placeholder="Buscar proceso"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </Search>
    </ConsoleWrapper>
  );
};

export default Console;
