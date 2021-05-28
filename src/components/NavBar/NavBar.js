import React from "react";
import { NavLink, NavWrapper, LinkWrapper } from "./NavBarElementes";

const NavBar = () => {
  return (
    <>
      <NavWrapper>
        {/* AGREGAR ICONO */}
        <LinkWrapper>
          <NavLink to="/"> Link</NavLink>
          <NavLink to="/"> Link</NavLink>
          <NavLink to="/"> Link</NavLink>
        </LinkWrapper>
      </NavWrapper>
    </>
  );
};

export default NavBar;
