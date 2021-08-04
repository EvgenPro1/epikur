import React from 'react';
import shlunki from '../../../img/шлунки.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


const Block2 = () => {
    return (
        <div className={'block__2__container'}>
            {/*<Player*/}
            {/*    loop*/}
            {/*    muted={true}*/}
            {/*    resizeMode={"contain"}*/}
            {/*    style={{*/}
            {/*        aspectRatio: 'width/height',*/}
            {/*        width: "100%",*/}
            {/*        height: '100px'*/}
            {/*    }}*/}
            {/*    videoHeight={'100px'}*/}
            {/*    playWhenInactive={true}*/}
            {/*    autoPlay*/}
            {/*    repeat={true}*/}
            {/*    poster={shlunki}*/}
            {/*    // fluid={true}*/}
            {/*    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"*/}
            {/*>*/}
            {/*    <ControlBar autoHide={true} className="" disableDefaultControls disableCompletely />*/}
            {/*    <BigPlayButton position="center" />*/}
            {/*</Player>*/}

            {/*<ReactPlayer*/}
            {/*    className='react-player'*/}
            {/*    url='https://www.youtube.com/watch?v=SmBzqkgdH9I'*/}
            {/*    width='100%'*/}
            {/*    height='90%'*/}
            {/*    playing={true}*/}
            {/*    loop={true}*/}
            {/*    controls={false}*/}
            {/*    light={true}*/}
            {/*    onReady={true}*/}
            {/*    pip={true}*/}
            {/*    playIcon={<img src={logo}/>}*/}
            {/*/>*/}

            <ParallaxProvider>
                <Parallax
                    y={[-20, 20]} tagOuter="figure"
                    slowerScrollRate
                    tag="figure">
                    <img src={shlunki} alt="shlunki" className={'test__img__block2'}/>
                </Parallax>
            </ParallaxProvider>

        </div>
    );
};

export default Block2;