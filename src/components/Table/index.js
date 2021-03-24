import React from 'react';
import { TableWrapper, ColumnST, Row } from './TableElements'
import { data } from './data'
import Column from './Column'

// const {doc} = data

const Table = () => {

    return (
        <TableWrapper>
            {data.map((row, index) =>
            (<Row key={index}>
                <ColumnST>
                    <Column data={row.data} />
                </ColumnST>
                <ColumnST>
                    <Column data={row.data1} />
                </ColumnST>
                <ColumnST>
                    <Column data={row.data2} />
                </ColumnST>
                <ColumnST>
                    <Column data={row.data3} />
                </ColumnST>
                <ColumnST>
                    <Column data={row.data4} />
                </ColumnST>
            </Row>
            ))}
        </TableWrapper>
    )
}



export default Table