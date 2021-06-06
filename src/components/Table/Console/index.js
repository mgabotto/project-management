import React from "react";
import { NewTask } from "../../../firebase/DBmanage";
import {
  ConsoleWrapper,
  Search,
  StyledInput,
  StyledButton,
} from "./ConsoleStyle";
import { FileAddOutlined } from "@ant-design/icons";

const Console = ({ update, handleSearch }) => {
  const addTask = async () => {
    await NewTask();
    console.log("Tarea agregada");
    update();
  };

  return (
    <ConsoleWrapper>
      <StyledButton
        type="primary"
        shape="round"
        icon={<FileAddOutlined />}
        size="large"
        onClick={addTask}
      >
        Nuevo Proceso
      </StyledButton>
      <Search>
        <StyledInput
          placeholder="Buscar proceso"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </Search>
    </ConsoleWrapper>
  );
};

export default Console;
