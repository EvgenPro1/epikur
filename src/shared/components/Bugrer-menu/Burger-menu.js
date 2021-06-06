import React from 'react';
import '../../../styles/burger-menu.css'

const BurgerMenu = () => {
    return (
        <container className ='container-burger-menu'>
            <menu className="burger-menu">
                <label className="burger-menu-label" htmlFor="trigger">
                    <input className="burger-menu-input" id="trigger" type="checkbox"/>
                    <section className="drawer-list">
                        <ul className="menu-items">
                            <li className="burger-menu-item"><a className="burger-menu-item-link" href="#">Home</a></li>
                            <li className="burger-menu-item"><a href="#">Новости</a></li>
                            <li className="burger-menu-item"><a href="#">О нас</a></li>
                            <li className="burger-menu-item"><a href="#">Наша продукция</a></li>
                            <li className="burger-menu-item"><a href="#">Наши партнеры</a></li>
                            <li className="burger-menu-item"><a href="#">Наши контакты</a></li>
                        </ul>
                    </section>
                    <div className='hamburger'><i/></div>
                </label>
            </menu>
        </container>
    );
};

export default BurgerMenu;