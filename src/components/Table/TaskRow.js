import React from 'react';
import Cell from './Cell'
import { DescriptionRow } from './TableStyle'


// const [display, setDisplay] = (false)


// const TaskRow = ({ task, index }) => {

//     const displayDescription = () => {
//         display ? setDisplay(false) : setDisplay(true)
//         console.log('funciona');
//     }


return (
    <>
        <tr key={index}>
            <td> {task.macroproceso}</td>
            <td onClick={displayDescription}> {task.proceso}</td>
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
        <DescriptionRow hide={display}>
            <td colSpan="100%">
                <textarea></textarea>
            </td>
        </DescriptionRow>
    </>
);
}

export default TaskRow;