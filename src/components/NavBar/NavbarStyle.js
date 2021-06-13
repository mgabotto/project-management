import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.dark};
`;

export const LinkWrapper = styled.div`
  margin: 5px 15px;
`;

export const NavLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 400;
  margin: 10px;
`;
