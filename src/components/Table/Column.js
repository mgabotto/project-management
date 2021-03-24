import React from 'react';

const Column = ({ data }) => {
    return <>
        <select>
            <option value="pendiente">Pendiente</option>
            <option value="en curso">En curso</option>
            <option value="finalizado" selected>Finalizado</option>
        </select>
    </>
}

export default Column