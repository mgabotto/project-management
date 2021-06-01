import styled from "styled-components";

export const ConsoleWrapper = styled.div`
  background-color: grey;
  display: flex;
  gap: 30px;
  justify-content: start;
  padding: 5px;
  width: 100%;
  ${(props) => props.theme.fontSizes.medium}
`;

export const SearchBox = styled.textarea`
  ${(props) => props.theme.fontSizes.medium}
`;

export const Search = styled.div`
  ${(props) => props.theme.fontSizes.medium}
`;
