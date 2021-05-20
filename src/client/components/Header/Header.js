import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='head'>

            <navbar className="navbar navbar-dark bg-primary">
                <NavLink className='navbar-brand' to='/'>Home</NavLink>
                <NavLink className='navbar-brand' to='/AdminPage'>AdminPage</NavLink>
            </navbar>

        </header>
    );
};

export default Header;