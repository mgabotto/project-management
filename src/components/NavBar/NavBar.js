import React from 'react';
import { NavLink, NavWrapper, LinkWrapper } from './NavBarElementes'

const NavBar = () => {
    return (
        <>
            <NavWrapper>
                <LinkWrapper>
                    <NavLink> Link</NavLink>
                    <NavLink> Link</NavLink>
                    <NavLink> Link</NavLink>
                </LinkWrapper>

            </NavWrapper>
        </>
    )
}

export default NavBar