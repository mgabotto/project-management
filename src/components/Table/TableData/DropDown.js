import React, { useState } from "react";
import { SelectStyle } from "../TableStyle";
import { UpdateTask } from "../../../firebase/DBmanage";

const DropDown = ({ stage, track, id }) => {
  const [status, setStatus] = useState(stage);
  const [loading, setLoading] = useState(false);

  const { Option } = SelectStyle;

  const update = async (value) => {
    console.log(track);
    setLoading(true);
    UpdateTask(id, track, value)
      .then(() => {
        setStatus(value);
      })
      .catch((e) => {
        alert("No fue posible realizar la actualización del estado");
      })
      .finally(() => setLoading(false));
  };

  return (
    <SelectStyle
      size={"medium"}
      bordered={false}
      onChange={update}
      loading={loading}
      value={status}
    >
      <Option value="pendiente">Pendiente</Option>
      <Option value="en curso">En curso</Option>
      <Option value="finalizado">Finalizado</Option>
    </SelectStyle>
  );
};

export default DropDown;
