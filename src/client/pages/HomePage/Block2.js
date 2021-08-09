import React from 'react';
import shlunki from '../../../img/шлунки.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import logo from "../../components/Svg/Images/LogoTextHeader";
import ReactPlayer from "react-player";


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

            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=SmBzqkgdH9I'
                width='100%'
                height='90%'
                playing={true}
                loop={true}
                // onReady={true}
                />
            <video width="400" height="300"  autoPlay loop muted className="1" >
                <source src="https://www.youtube.com/watch?v=SmBzqkgdH9I" type='video/ogg; codecs="theora, vorbis"'/>
                    <source src="https://www.youtube.com/watch?v=SmBzqkgdH9I" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                        <source src="https://www.youtube.com/watch?v=SmBzqkgdH9I" type='video/webm; codecs="vp8, vorbis"'/>

                <source src="https://www.youtube.com/watch?v=SmBzqkgdH9I" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>

            {/*    }*/}
            {/*/>*/}

            {/*<ParallaxProvider>*/}
            {/*    <Parallax*/}
            {/*        y={[-20, 20]} tagOuter="figure"*/}
            {/*        slowerScrollRate*/}
            {/*        tag="figure">*/}
            {/*        <img src={shlunki} alt="shlunki" className={'test__img__block2'}/>*/}

            {/*    </Parallax>*/}
            {/*</ParallaxProvider>*/}

        </div>
    );
};

export default Block2;