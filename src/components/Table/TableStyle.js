import styled from 'styled-components'
import { Select } from 'antd';

export const StyledTable = styled.table`

margin: 10px;
border-collapse: separate;


th {
    height: 50px;
    width: 120px;
    background-color: #FFFFFF;
    color: black;
    border-bottom: 2px grey solid;
    font-size: 13px;
}

.th2 {
    width: 160px
}


tr:nth-child(even){background-color: #F2F2F2}

tr {
    background-color: white;
    text-align: center;
    background-color: #E6E5E6;

    &:hover {
        background-color: yellow;
    }
}




td {
    text-align: center;
    /* padding: 5px 10px; */
    /* width: 100px; */
}

`

export const DescriptionRow = styled.tr`
    

    display: ${props => props.hide ? "table-row" : "none"};

    td {
    background-color: lightcoral;

    &:hover {
        background-color: black;
    }
    }
`

export const SelecStyle = styled(Select)`

font-size: 13px;
width: 95px;
`

