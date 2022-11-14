import React from 'react';
import ImgBg from '../Assets/BoxedImg.jpg';

function ImgOfCard() {
    return (
        <div className='imgOfCard'>
            <img src={ImgBg} alt="Poster of the product"></img>
        </div>
    );
}

export default ImgOfCard;