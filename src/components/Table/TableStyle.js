import styled from "styled-components";
import { Select } from "antd";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    overflow: scroll;
    height: 80vh;
  }
`;

export const StyledTable = styled.table`
  width: fit-content;
  margin: 10px auto;
  border-collapse: separate;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};

  th {
    height: 50px;
    width: 140px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 30px;
  }

  tr {
    background-color: ${(props) => props.theme.colors.primary};
    text-align: center;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  td {
    text-align: center;
    border-radius: 10px;
  }
`;

export const DescriptionRow = styled.tr`
  display: ${(props) => (props.display === "show" ? "table-row" : "none")};

  td {
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px 0;
    height: fit-content;
  }

  .details {
    display: flex;
    justify-content: start;
    width: 120%;
  }

  .respContainer {
    /* padding-left: 30px; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  textarea {
    margin: 10px;
    border-radius: 10px;
    text-align: center;
  }
  .responsable {
    display: flex;

    textarea {
      height: 30px;
      width: 250px;
    }

    .label {
      margin: 0 10px 0 0;
      align-self: center;
      text-align: end;
      width: 300px;
    }
  }

  .description {
    display: flex;
    align-items: center;
  }
`;

//STAGES PROCESO

export const StageRow = styled.tr`
  .process {
    cursor: pointer;
  }
  height: 40px;

  .deleteBtn {
    cursor: "pointer";
    margin: 5px;
  }

  .text {
    width: 200px;
    max-width: 200px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SelectStyle = styled(Select)`
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 140px;
  color: ${(props) => props.theme.colors.secondary};

  .ant-select-arrow {
    top: 43%;
  }
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
`;
