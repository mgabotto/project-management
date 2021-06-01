import styled from "styled-components";
import { Select } from "antd";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTable = styled.table`
  margin: 10px;
  border-collapse: separate;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(props) => props.theme.colors.powderWhite};
  padding: 10px;
  border-radius: 10px;
  border: ${(props) => props.theme.colors.powderWhite} 2px solid;
  font-size: ${(props) => props.theme.fontSizes.medium};

  th {
    height: 50px;
    width: 140px;
    background-color: ${(props) => props.theme.colors.powderWhite};
    color: black;
    border-bottom: 2px grey solid;
    border-radius: 30px;
    border: ${(props) => props.theme.colors.powderWhite} 2px solid;
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors.powderWhite};
  }

  tr {
    background-color: ${(props) => props.theme.colors.powderWhite};
    text-align: center;
    &:hover {
      background-color: ${(props) => props.theme.colors.persianGreen};
      td {
        border-radius: 0px;
        border: 0px;
      }
    }
  }

  td {
    text-align: center;
    border-radius: 10px;
    border: white 1px solid;
  }
`;

export const DescriptionRow = styled.tr`
  display: ${(props) => (props.display === "show" ? "table-row" : "none")};
  text-align: start;

  td {
    background-color: ${(props) => props.theme.colors.persianGreen};
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
      align-items: center;
    }

    textarea {
      margin: 10px;
    }
  }
`;

// FILA PROCESO

export const StageRow = styled.tr`
  .process {
    cursor: pointer;
  }
  height: 40px;
  .text {
    width: 200px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SelectStyle = styled(Select)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: 140px;

  .ant-select-arrow {
    top: 43%;
  }
`;
