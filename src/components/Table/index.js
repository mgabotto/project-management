import React, { useState } from 'react';
import { db } from '../../data'
import Header from './Header';
import { StyledTable } from './TableStyle'
import TaskRow from './TaskRow'

const Table = () => {



    // const displayDescription = () => {
    //     display ? setDisplay(false) : setDisplay(true)
    //     console.log('funciona');
    // }

    const [data, setData] = useState(db)

    return (

        <StyledTable>
            <thead>
                <Header />
            </thead>
            <tbody>
                {data.map((task, index) =>
                    <TaskRow
                        task={task}
                        index={index}
                    />
                )}
            </tbody>
        </StyledTable>
    );
}

export default Table;