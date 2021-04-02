import React, { useState } from "react";
import { SelecStyle } from "./TableStyle";

const DropDown = ({ data, prueba }) => {
  const { Option } = SelecStyle;

  const [value, setValue] = useState(data);
  const [loading, setLoading] = useState(false);

  const updateValue = (value) => {
    setLoading(true);
    setValue(value);
  };

  return (
    <SelecStyle
      size={"small"}
      defaultValue={data}
      onChange={updateValue}
      loading={loading}
      value={value}
    >
      <Option value="pendiente">Pendiente</Option>
      <Option value="en curso">En curso</Option>
      <Option value="finalizado">Finalizado</Option>
    </SelecStyle>
  );
};

export default DropDown;
