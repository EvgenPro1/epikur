import React from 'react';
import {NavLink} from "react-router-dom";

const HomeHoc = ({children}) => {
    return (
        <>
            <navbar className="navbar navbar-dark bg-primary w-100">
                <NavLink className='navbar-brand' to='/'>Home</NavLink>
                <NavLink className='navbar-brand' to='/places'>Адреса найближчого пункту продажу</NavLink>
                <NavLink className='navbar-brand text-center' to='/Cart'>Cart <span role = "img" aria-label= "Cart">&#128722;</span>
                </NavLink>

            </navbar>

            {children}

            {/*<footer> FOOT </footer>*/}
        </>
    );
};

export default HomeHoc;