import React from "react";

const Header = () => {
  return (
    <>
      <tr>
        <th rowSpan="2"> Macroproceso</th>
        <th rowSpan="2"> Proceso</th>
        <th rowSpan="2"> Relevamiento del proceso</th>
        <th rowSpan="2"> Modelado del proceso</th>
        <th rowSpan="2"> Atributos del proceso</th>
        <th rowSpan="2"> Atributos de tareas</th>
        <th colSpan="2"> Validación TGS</th>
        <th rowSpan="2"> Validación Coordinación de Procesos</th>
        <th rowSpan="2"> Validación Edison</th>
        <th rowSpan="2"> Estatus General</th>
      </tr>
      <tr>
        <th> Diagrama de Asignación de Funciones</th>
        <th> Validación Key User</th>
      </tr>
    </>
  );
};

export default Header;
