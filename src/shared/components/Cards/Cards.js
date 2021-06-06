import React from 'react';
import '../../../styles/cards.css'

const Cards = ({children, frontContent, backPhotoLink, height = '320px', width = '480px'}) => {
    return (
        <div className="photo-card-block">
        <div className="card-flip-container">
            <div className="card-flipper">
                <div className="card-front">
                    <div className='outsource-photo p-5'>{children||frontContent}</div>
                </div>
                <div className="card-back">
                    <div className='img-block' style={{backgroundImage: `url(${backPhotoLink})`, width, height}}/* width ={width} height = {height} alt = ''*//>
                </div>
            </div>
        </div>
</div>
    );
};

export default Cards;