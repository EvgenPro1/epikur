import React, {useRef} from "react"
import ReactPlayer from 'react-player'

import Preloader from "../../components/Preloader/Preloader";
import LogoEpikur from "../../components/Svg/Images/LogoEpikur";
import LogoEpikur2 from "../../components/Svg/Images/LogoEpikur2";
import useOnScreen from "../../../customHooks/useOnScreen";
import BurgerMenu from "../../../shared/components/Bugrer-menu/Burger-menu";
import ProductsCounter from "../../components/ProductsCounter/ProductsCounter";
import Cards from "../../../shared/components/Cards/Cards";
import Countdown from "../../components/Countdown/Countdown";
import EpikurGoogleMaps from "../../components/GoogleMaps/EpikurGoogleMaps";

import food from '../../../img/food1.jpg'
import child from '../../../img/child1.jpg'

export const HomePage = () => {
    const ref = useRef()
    const visible = useOnScreen(ref, "10px")
    const ref2 = useRef()
    const visible2 = useOnScreen(ref2, "10px")
    const ref3 = useRef()
    const visible3 = useOnScreen(ref3, "10px")
    const refLogo = useRef()
    const visibleLogo = useOnScreen(refLogo, "150px")

    return <>
        <Preloader
            classname={visibleLogo || visible || visible3 ? "preloader__container2 smallLogo" : "preloader__container2"} //epikur
            viewBox={visibleLogo || visible || visible3 ? '0 0   6360.000000 1430.000000' : '0 420 3360.000000 490.000000'}
            path={<LogoEpikur2/>}/>

        <Preloader
            classname={visibleLogo || visible || visible3 ? "preloader__container hiddenLogo" : "preloader__container"} //lapka
            viewBox='0 0 1335.000000 1335.000000'
            path={<LogoEpikur/>}/>


        <div className='d-flex justify-content-center align-items-center home-page-block'>

            <div className='children-content'>
                <header className="head text-center head-sticky d-flex align-items-center justify-content-end">
                    <BurgerMenu/>
                </header>
                <div className="container1 d-flex justify-content-between">
                    <container className="row-wrapper">
                        <aside className='left-menu first-pre-benefits-block'>
                            <div className="top-bottom-anim-border"/>
                            <div className="left-anim-border"/>
                            <div/>

                        </aside>
                        <main className="main-content">
                            <div className="top-bottom-anim-border"/>
                            <div className="left-right-anim-border"/>
                            <p className="d-flex align-items-center justify-content-start">
                                <div className='pre-benefits-block '>
                                        <span className='pre-benefits pre-benefits-1'>Bebas Neue regular
                            </span>
                                    <div className="line"/>
                                </div>
                                <div className="benefits benefits-block benefits-1">fresh кур</div>
                            </p>
                            <p className="d-flex align-items-center">
                                <div className='pre-benefits-block'>  <span className='pre-benefits pre-benefits-2'>Bebas Neue bold
                            </span>
                                    <div className="line"/>
                                </div>
                                <div className="benefits-block">
                                    <p className="benefits benefits-2">max protein</p>
                                    <p className="benefits benefits-2">min fat</p>
                                </div>
                            </p>
                            <p className="d-flex align-items-center">
                                <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-3'>Bebas Neue regular
                            </span>
                                    <div className="line"/>
                                </div>
                                <div className="benefits benefits-block benefits-3">без антибіотиків та гормонів росту
                                </div>
                            </p>
                            <p className="d-flex align-items-center">
                                <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-4'>Formular Medium
                            </span>
                                    <div className="line"/>
                                </div>
                                <div className="benefits benefits-block benefits-4-block">
                                    <span
                                        className="benefits benefits-4">білки/protein </span>
                                    <span className="benefits benefits-4">жири/fat </span>
                                    <span className="benefits benefits-4">калорії/calories </span>
                                </div>
                            </p>

                            <div className="d-flex align-items-center">
                                <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-5'>Bebas Neue bold
                            </span>
                                    <div className="line"/>
                                </div>
                                <div className="benefits benefits-block benefits-5-block">
                                    <span className="benefits benefits-5">24</span>
                                    <span className="benefits benefits-5 benefits-5-center">9</span>
                                    <span className="benefits benefits-5">190</span><Countdown/>
                                </div>
                            </div>

                            <p className="d-flex align-items-center">
                                <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-6'>Formular Regular
                            </span>
                                    <div className="line"/>
                                </div>
                                <div className="benefits benefits-block benefits-6-block">
                                    <span className="benefits benefits-6">г (g)</span>
                                    <span className="benefits benefits-6">г (g)</span>
                                    <span className="benefits benefits-6">ккал (kcal)</span></div>
                            </p>
                            <a href="adminPage" className="closing-button btn-test"><span
                                className='text-pseudo-button'>adminPage</span></a>
                            <a href="GoogleMapsAdminPage" className="closing-button btn-test"><span
                                className='text-pseudo-button'>GoogleMapsAdminPage</span></a>
                            <div className="page-number">01</div>
                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref2} className='left-menu img-block'>
                            <div className={visible2 ? "left-anim-border" : ""}/>
                            <div className={visible2 ? "top-bottom-anim-border" : ''}/>
                            <Cards frontContent={`
                                Ви обрали здорове життя і вивчаєте склад на пакованнях продуктів?
                                Отже наважилися змінити раціон на користь здорового харчування та готувати
                                вдома, і тепер тішитеся приємною звичкою, яка насправді не потребує багато
                                часу або зусиль.
                                `}
                                   backPhotoLink={food}
                                   height='100%'
                                   width='100%'>
                                <div className={"d-flex block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className="page-number cards-page-number  ">02</div>
                            </Cards>

                        </aside>
                        <main className='main-content'>
                            <div className={visible2 ? "left-right-anim-border" : ""}/>
                            <div className={visible2 ? "top-bottom-anim-border" : ""}/>
                            {/*<div className="description1">*/}
                            {/*    Почніть зі здоров’я*/}
                            {/*    Ви обрали здорове життя і вивчаєте склад на пакованнях продуктів?*/}
                            {/*    Отже наважилися змінити раціон на користь здорового харчування та готувати*/}
                            {/*    вдома, і тепер тішитеся приємною звичкою, яка насправді не потребує багато*/}
                            {/*    часу або зусиль. Тому ви часто купуєте курочку: її так просто готувати,*/}
                            {/*    вона смачна й водночас дієтична. На нашому продукті зазначено склад*/}
                            {/*    — курятина й нічого зайвого. Ми витратили багато часу, щоб вирощувати*/}
                            {/*    курочку з натуральним смаком без хімії чи інших домішок.*/}
                            {/*    Ми вирощуємо курочок, тому що якісне куряче м’ясо — одна з найкращих*/}
                            {/*    можливостей налагодити здоровий та корисний раціон для всієї родини й*/}
                            {/*    перший крок до активнішого життя. Ми не вчимо бути щасливими, але надаємо*/}
                            {/*    сил змінювати життя на краще.*/}
                            {/*</div>*/}

                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className={"block1__small__container__left"}>
                                    <h1 className={"block__1__header "}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div ref={refLogo} className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className={"block1__small__container__left"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text "}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className={"block1__small__container__left"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                                <div className="page-number">02</div>


                            </div>


                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref3} className='left-menu'>
                            <div className={visible3 ? "left-anim-border" : ""}/>
                            <div className={visible3 ? "top-bottom-anim-border" : ''}/>
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                            </div>
                            <div className="page-number">03</div>

                        </aside>
                        <aside ref={ref3} className='left-menu'>
                            <div className={visible3 ? "left-anim-border" : ""}/>
                            <div className={visible3 ? "top-bottom-anim-border" : ''}/>
                            <Cards
                                frontContent={`
                                Ви обрали здорове життя і вивчаєте склад на пакованнях продуктів?
                                Отже наважилися змінити раціон на користь здорового харчування та готувати
                                вдома, і тепер тішитеся приємною звичкою, яка насправді не потребує багато
                                часу або зусиль.
                                `}
                                backPhotoLink={child}
                                height='100%'
                                width='100%'
                            />

                        </aside>
                        <main className='main-content'>
                            <div className={visible3 ? "left-right-anim-border" : ""}/>
                            <div className={visible3 ? "top-bottom-anim-border" : ""}/>
                            <ProductsCounter/>

                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref} className={visible ? 'left-menu active' : 'left-menu'}>
                            <div className={visible ? "left-anim-border" : ""}/>
                            <div className={visible ? "top-bottom-anim-border" : ''}/>
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__left"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <main className='main-content'>
                            <div className={visible ? "left-right-anim-border" : ''}/>
                            <div className={visible ? "top-bottom-anim-border" : ''}/>
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>
                                    <div className={"block__1__text"}> змінити раціон на користь здорового харчування
                                    </div>
                                </div>
                            </div>
                        </main>
                    </container>

                </div>
                <EpikurGoogleMaps/>
                <div className="d-flex justify-content-center mt-1 mb-1 align-items-center">
                    <ReactPlayer controls width = "100%" url = 'https://www.youtube.com/watch?v=7sDY4m8KNLc'/>
                </div>
                <Countdown firstText = 'Продано больше'  num={100} secondText = 'тонн курятины' startCounting = {visible} />

                <footer className='foot benefits'>
                    <div>Гаряча лiнiя</div>
                    <div>0 800 21 58 00</div>
                    <div>Дзвiнки зi стацiонарних телефонiв в Украiнi безкоштовнi</div>
                    <div>info@epikur.ua</div>
                </footer>
            </div>
        </div>
    </>

}

