import React from "react";
import { NavLink, NavWrapper, LinkWrapper } from "./NavbarStyle";

const NavBar = () => {
  return (
    <>
      <NavWrapper>
        {/* AGREGAR ICONO */}
        <LinkWrapper>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/graphs"> Gráficos</NavLink>
        </LinkWrapper>
      </NavWrapper>
    </>
  );
};

export default NavBar;
