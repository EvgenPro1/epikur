import React, {useState} from "react"
import Preloader from "../../components/Preloader/Preloader";
import LogoEpikur from "../../components/Svg/Images/LogoEpikur";
import LogoEpikur2 from "../../components/Svg/Images/LogoEpikur2";

export const HomePage = () => {
    // const [visible, setVisible] = useState(false)
    return <>
        <div className='d-flex justify-content-center align-items-center home-page-block'>
            <div className='children-content'>
                <header className='head'>Lorem ipsum dolor sit amet.</header>
                <aside className='left-menu'>
Lorem ipsum dolor sit amet.
                </aside>
                <main className='main-content'>Lorem ipsum.</main>
                <footer className='foot'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</footer>
            </div>
        </div>


        <Preloader classname='preloader__container2' //epikur
                   viewBox='0 420 3360.000000 490.000000'
                   path={<LogoEpikur2/>}
        />
        <Preloader classname='preloader__container' //lapka
                   viewBox='0 0 1335.000000 1335.000000'
                   path={<LogoEpikur/>}
        />
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