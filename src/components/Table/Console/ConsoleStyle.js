import styled from "styled-components";
import { Input, Button } from "antd";

export const ConsoleWrapper = styled.div`
  position: fixed;
  top: 50px;
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  justify-content: space-between;
  width: 80vw;
  min-width: fit-content;
  align-items: center;
  padding: 10px 10px 10px 40px;
  margin-left: 15px;
  border-radius: 15px;
  ${(props) => props.theme.fontSizes.medium}
`;

export const Search = styled.div`
  ${(props) => props.theme.fontSizes.small}
`;

export const StyledInput = styled(Input)`
  min-width: 150px;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
`;
