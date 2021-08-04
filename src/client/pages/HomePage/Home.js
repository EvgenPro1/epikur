import React, {useEffect, useState} from 'react';
import PreloaderHeader from "../../components/PreloaderHeader/index";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
import Block6 from "./Block6";
import Block7 from "./Block7";
import Block8 from "./Block8";



const Home = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 3000);
    }, []);

    return (
        <>
            <PreloaderHeader/>
            {show && (
                <>
                    <Block1/>
                    <Block2/>
                    <Block3/>
                    <Block4/>
                    <Block5/>
                    <Block6/>
                    <Block7/>
                    <Block8/>
                </>
            )}
        </>
    );
};

export default Home;