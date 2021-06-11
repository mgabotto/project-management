import styled from "styled-components";
import { Input, Button } from "antd";

export const ConsoleWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  gap: 30px;
  justify-content: start;
  align-items: center;
  padding: 10px 0 10px 40px;
  padding: 10px auto;

  ${(props) => props.theme.fontSizes.medium}
`;

export const Search = styled.div`
  ${(props) => props.theme.fontSizes.medium}
`;

export const StyledInput = styled(Input)`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
`;
