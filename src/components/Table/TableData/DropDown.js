import React, { useState } from "react";
import { SelecStyle } from "../TableStyle";

const DropDown = ({ stage, update, id }) => {
  const [status, setStatus] = useState(stage);
  const [loading, setLoading] = useState(false);

  const { Option } = SelecStyle;

  return (
    <SelecStyle
      size={"small"}
      defaultValue={stage}
      onChange={() => update(id, status)}
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
