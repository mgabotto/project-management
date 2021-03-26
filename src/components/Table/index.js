import React, { useState } from 'react';
import { db } from '../../data'
import { StyledTable } from './TableStyle'
import TaskDescription from './TaskDescription'
import TaskRow from './TaskRow'

const Table = () => {


    const [display, setDisplay] = useState(false);
    // <button onClick={setDisplay(true)}> Display</button>

    const isClicked = () => {
        setDisplay(true)
        console.log('funciona');
    }

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
                    <th className="th2"> Diagrama de Asignación de Funciones</th>
                    <th className="th2"> Validación Key User</th>
                </tr>
            </thead>

            <tbody>
                {db.map((task, index) =>
                    <>
                        <TaskRow task={task} index={index} click={isClicked} />
                        <TaskDescription display={display} />
                    </>
                )}
            </tbody>
        </StyledTable>
    );
}

export default Table;