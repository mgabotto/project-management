import styled from "styled-components";

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
