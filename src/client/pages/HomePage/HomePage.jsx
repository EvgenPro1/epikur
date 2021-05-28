import React, {useRef, useState} from "react"
import Preloader from "../../components/Preloader/Preloader";
import LogoEpikur from "../../components/Svg/Images/LogoEpikur";
import LogoEpikur2 from "../../components/Svg/Images/LogoEpikur2";
import useOnScreen from "../../../customHooks/useOnScreen";

export const HomePage = () => {
    const ref = useRef()
    const visible = useOnScreen(ref, "-200px")
    const ref2 = useRef()
    const visible2 = useOnScreen(ref2, "-200px")
    const ref3 = useRef()
    const visible3 = useOnScreen(ref3, "-200px")
    // console.log(visible);
    return <>
        <Preloader classname='preloader__container2' //epikur
                   viewBox='0 420 3360.000000 490.000000'
                   path={<LogoEpikur2/>}/>

        <Preloader classname='preloader__container' //lapka
                   viewBox='0 0 1335.000000 1335.000000'
                   path={<LogoEpikur/>}/>

        <div className='d-flex justify-content-center align-items-center home-page-block'>
            <div className='children-content'>
                <header className='head'>Lorem ipsum dolor sit amet.</header>
                <div className="container1 d-flex justify-content-between">
                    <container className="row-wrapper">
                        <aside className='left-menu'>
                            <div className="top-bottom-anim-border"/>
                            <div className="left-anim-border"/>
                            <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ad odit
                                officiis sint. Animi corporis culpa error excepturi id pariatur quibusdam rem, repellat
                                sint
                                voluptate. Adipisci itaque magni nisi odio ratione!
                            </div>
                        </aside>
                        <main className="main-content">
                            <div className="top-bottom-anim-border"/>
                            <div className="left-right-anim-border"/>
                            <div>Lorem ipsum dolor sit amet.</div>
                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref2} className='left-menu'>
                            <div  className={visible2 ? "left-anim-border" : "1"}/>
                            <div  className={visible2 ? "top-bottom-anim-border":''}/>
                            <div>2aside Lorem ipsum dolor sit amet.</div>
                        </aside>
                        <main className='main-content'>2main Lorem ipsum.
                            <div className={visible2 ? "left-right-anim-border":""}/>
                            <div className={visible2 ? "top-bottom-anim-border":""}/>
                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref3} className='left-menu'>
                            <div  className={visible3 ? "left-anim-border" : "1"}/>
                            <div  className={visible3 ? "top-bottom-anim-border":''}/>
                            <div>2aside Lorem ipsum dolor sit amet.</div>
                        </aside>
                        <section className='main-content'>2main Lorem ipsum.
                            <div className={visible3 ? "left-right-anim-border":""}/>
                            <div className={visible3 ? "top-bottom-anim-border":""}/>
                        </section>
                        <main className='main-content'>2main Lorem ipsum.
                            <div className={visible3 ? "left-right-anim-border":""}/>
                            <div className={visible3 ? "top-bottom-anim-border":""}/>
                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref} className={visible ? 'left-menu active' : 'left-menu'}>
                            <div className={visible ? "left-anim-border" : "1"}/>
                            <div className={visible ? "top-bottom-anim-border": '1'}/>
                            <div>3aside Lorem ipsum dolor sit amet.</div>
                        </aside>
                        <main className='main-content'>3main Lorem ipsum.
                            <div className={visible ? "left-right-anim-border":''}/>
                            <div className={visible ? "top-bottom-anim-border":''}/>
                        </main>
                    </container>

                </div>
                <footer className='foot'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</footer>
            </div>
        </div>

    </>
}
/*
import { InView } from 'react-intersection-observer'
import ScrollWrapper from './elements/ScrollWrapper'
import Wrapper from './elements/Wrapper'
import './styles.css'

function App() {
    const [inView, setInView] = React.useState(false)

    return (
        <ScrollWrapper inView={inView}>
            <InView onChange={setInView}>
                <Wrapper>
                    <h2>Element is inside the viewport: {inView.toString()}</h2>
                                         */