import React, { useState } from "react";
import { SelecStyle } from "../TableStyle";
import { UpdateTask } from "../../../firebase/DBmanage";

const DropDown = ({ stage, track, id }) => {
  const [status, setStatus] = useState(stage);
  const [loading, setLoading] = useState(false);

  const { Option } = SelecStyle;

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
    <SelecStyle
      size={"medium"}
      onChange={update}
      loading={loading}
      value={status}
    >
      <Option value="pendiente">Pendiente</Option>
      <Option value="en curso">En curso</Option>
      <Option value="finalizado">Finalizado</Option>
    </SelecStyle>
  );
};

export default DropDown;
