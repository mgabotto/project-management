import React from 'react';
import { db } from '../../data'
import Cell from './Cell'
import { StyledTable } from './TableStyle'

const Table = () => {

    return (

        <StyledTable>
            <thead>

                <tr>
                    <th rowspan="2"> Macroproceso</th>
                    <th rowspan="2"> Proceso</th>
                    <th rowspan="2" width="10px"> Relevamiento del proceso</th>
                    <th rowspan="2"> Modelado del proceso</th>
                    <th rowspan="2"> Atributos del proceso</th>
                    <th rowspan="2"> Atributos de tareas</th>
                    <th colspan="2"> Validación TGS</th>
                    <th rowspan="2"> Validación Coordinación de Procesos</th>
                    <th rowspan="2"> Validación Edison</th>
                    <th rowspan="2"> Estatus General</th>
                </tr>
                <tr>
                    <th> Diagrama de Asignación de Funciones</th>
                    <th> Validación Key User</th>
                </tr>
            </thead>

            <tbody>
                {db.map((task, index) =>
                    <tr key={index}>
                        <td> {task.macroproceso}</td>
                        <td> {task.proceso}</td>
                        <td> <Cell data={task.recInformacion} /></td>
                        <td> <Cell data={task.modelado} /></td>
                        <td> <Cell data={task.atrProcesos} /></td>
                        <td> <Cell data={task.atrTareas} /></td>
                        <td> <Cell data={task.fad} /></td>
                        <td> <Cell data={task.validacion.validacionTGS.keyUser} /></td>
                        <td> <Cell data={task.validacion.validacionTGS.coordProcesos} /></td>
                        <td> <Cell data={task.validacion.validacionEdison} /></td>
                        <td> <Cell data={task.statusGeneral} /></td>
                    </tr>)}
            </tbody>
        </StyledTable>
    );
}

export default Table;