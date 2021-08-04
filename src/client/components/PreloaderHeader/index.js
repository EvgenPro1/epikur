import React, {useRef} from 'react';
import Preloader from "./Preloader";
import LogoEpikur2 from "../Svg/Images/LogoEpikur2";
import LogoEpikur from "../Svg/Images/LogoEpikur";
import LogoTextHeader from "../Svg/Images/LogoTextHeader";
import BurgerMenu from "../../../shared/components/Bugrer-menu/Burger-menu";

const Index = () => {
    return (
        <div className={'Header__Preloader__container'}>
            {/**
             * 1. Preloader
             * 1.1. Logo Epikur Lapka
             * 1.1. Logo Epikur Text
             * 2. Header
             */}
            <Preloader
                classname="preloader__container" //lapka
                viewBox='0 0 1335.000000 1335.000000'
                path={<LogoEpikur/>}
            />
            <Preloader
                classname="preloader__container2"
                viewBox='0 420 3360.000000 490.000000'
                path={<LogoEpikur2/>}
            />
            <header className="head text-center head-sticky d-flex align-items-center justify-content-end">
                <Preloader
                    classname="header__text__load__container"
                    viewBox='0 420 3360.000000 490.000000'
                    path={<LogoTextHeader/>}
                />
                <div className={'header__dark__round__back'}></div>
                <BurgerMenu/>
            </header>
        </div>
    );
};

export default Index;