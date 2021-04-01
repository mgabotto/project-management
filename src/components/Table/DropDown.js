import React from "react";
import { SelecStyle } from "./TableStyle";

const { Option } = SelecStyle;

const DropDown = ({ data }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <SelecStyle
      size={"small"}
      defaultValue={data}
      onChange={handleChange}
      loading={false}
    >
      <Option value="pendiente">Pendiente</Option>
      <Option value="en curso">En curso</Option>
      <Option value="finalizado">Finalizado</Option>
    </SelecStyle>
  );
};

export default DropDown;
