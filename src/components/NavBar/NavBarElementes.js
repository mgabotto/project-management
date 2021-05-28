import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #43e0f3;
  /* padding: 10px 0 10px 0; */
`;

export const LinkWrapper = styled.div`
  margin: 0 10px 0 10px;
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  color: white;
  background-color: black;
  font-weight: 300;
  margin: 10px;
`;
