import styled from "styled-components";
import { Select } from "antd";

export const StyledTable = styled.table`
  margin: 10px;
  border-collapse: separate;

  th {
    height: 50px;
    width: 120px;
    background-color: #ffffff;
    color: black;
    border-bottom: 2px grey solid;
    font-size: 13px;
  }

  .th2 {
    width: 160px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr {
    background-color: white;
    text-align: center;
    background-color: #e6e5e6;

    &:hover {
      background-color: yellow;
    }
  }

  td {
    text-align: center;
    /* padding: 5px 10px; */
    /* width: 100px; */
  }
`;

export const DescriptionRow = styled.tr`
  display: ${(props) => (props.display === "show" ? "table-row" : "none")};
  width: 100%;

  td {
    background-color: lightcoral;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
  }
`;

export const SelecStyle = styled(Select)`
  font-size: 13px;
  width: 95px;
`;

export const StageRow = styled.tr`
  .process {
    cursor: pointer;
  }
`;
