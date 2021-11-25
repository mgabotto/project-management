import React, { useState } from "react";
import { NewTask } from "../../../firebase/DBmanage";
import {
  ConsoleWrapper,
  Search,
  StyledInput,
  StyledButton,
} from "./ConsoleStyle";
import { FileAddOutlined } from "@ant-design/icons";

const Console = ({ update, handleSearch }) => {
  const [loading, setLoading] = useState(false);

  const addTask = async () => {
    await setLoading(true);
    console.log(loading);
    await NewTask();
    update();
    setLoading(false);
    console.log(loading);
  };

  return (
    <ConsoleWrapper>
      <Search>
        <StyledInput
          placeholder="Buscar proceso"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </Search>
      <StyledButton
        type="primary"
        shape="round"
        icon={<FileAddOutlined />}
        size="large"
        onClick={addTask}
        loading={loading}
      >
        Nuevo Proceso
      </StyledButton>
    </ConsoleWrapper>
  );
};

export default Console;
