import styled from "styled-components";
import { Select } from "antd";

export const DescriptionRow = styled.tr`
  display: ${(props) => (props.display === "show" ? "table-row" : "none")};
  font-size: ${(props) => props.theme.fontSizes.small};

  td {
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px auto;
    height: fit-content;
  }

  .details {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  textarea {
    margin: 9px;
    border-radius: 5px;
    text-align: start;
    padding-left: 10px;
  }
`;

export const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: 50px 50px;
`;

export const LabelInput = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  margin: 9px;
  background-color: ${(props) => props.theme.colors.tertiary};

  p {
    width: 130px;
    align-self: center;
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
  }

  textarea {
    height: 30px;
    width: 250px;
    margin: 0;
  }
`;

//STAGES / SELECTS PROCESO

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
      color: ${(props) => props.theme.colors.primary};
      border-bottom: solid 3px ${(props) => props.theme.colors.dark};
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
