import styled from "styled-components";
import { Center } from "../../global/Common";
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
  text-align: start;

  td {
    background-color: lightcoral;
  }

  .details {
    display: flex;
    justify-content: start;
    gap: 30px;
  }

  .responsables {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  .responsable {
    display: flex;
    text-align: end;

    p {
      width: 12rem;
      margin: 0 10px 0 0;
      text-align: center;
      display: flex;
      /* justify-content: end; */
      align-items: center;
    }

    textarea {
      margin: 10px;
    }
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
