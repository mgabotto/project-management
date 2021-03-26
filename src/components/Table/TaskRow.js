import React from 'react';
import Cell from './Cell'

const TaskRow = ({ task, index, click }) => {
    return (
        <tr key={index}>
            <td> {task.macroproceso}</td>
            <td> <button onClick={click()}>{task.proceso}</button> </td>
            <td> <Cell data={task.recInformacion} /></td>
            <td> <Cell data={task.modelado} /></td>
            <td> <Cell data={task.atrProcesos} /></td>
            <td> <Cell data={task.atrTareas} /></td>
            <td> <Cell data={task.fad} /></td>
            <td> <Cell data={task.validacion.validacionTGS.keyUser} /></td>
            <td> <Cell data={task.validacion.validacionTGS.coordProcesos} /></td>
            <td> <Cell data={task.validacion.validacionEdison} /></td>
            <td> <Cell data={task.statusGeneral} /></td>
        </tr>
    );
}

export default TaskRow;