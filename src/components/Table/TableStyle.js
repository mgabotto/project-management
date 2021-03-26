import styled from 'styled-components'
import { Select } from 'antd';

export const StyledTable = styled.table`

font-size: 14px;
margin: 10px;
border-collapse: separate;


th {
    height: 50px;
    background-color: #67989A;
    color: white

}


tr:nth-child(even){background-color: #DFF2F2}

tr {
    background-color: white;
    text-align: center;
    background-color: #B5F1F1;

    &:hover {
        background-color: yellow;
    }
}


td {
    text-align: center;
    padding: 5px 10px;
    width: 100px;
}


`


export const SelecStyle = styled(Select)`

font-size: 14px;
width: 110px;



`
