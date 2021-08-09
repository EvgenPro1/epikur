import React from 'react';
import '../../../styles/burger-menu.scss'

const menuPoints = ['Home', 'News', 'About as', 'Our products', 'Our partners', 'Contacts']

const BurgerMenu = () => {
    const burgerMenuArr = menuPoints.map(item=><li className="burger-menu-item"><a href={item}>{item}</a></li> )

    return (
        // <div style={{height:"100vh",width:"100vw"}}>
            <container className ='container-burger-menu d-flex'>
                <div style={{zIndex:"100"}}>
                    <div className="menu burger-menu d-flex">
                        <label className="burger-menu-label" htmlFor="trigger">
                            <input className="burger-menu-input" id="trigger" type="checkbox"/>

                            <section className="drawer-list">
                                <ul className="menu-items"><div className="close-block"/>
                                    {burgerMenuArr}
                                </ul>
                            </section>
                            <div className='hamburger'><i/></div>
                        </label>
                    </div>
                </div>
        </container>
        // </div>
    );
};

export default BurgerMenu;