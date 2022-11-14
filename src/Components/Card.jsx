import React from 'react';
import ImgOfCard from './ImgOfCard';
import TextOfCard from './TextOfCard';

function Card() {
    return (
        <div className='card'>
            <ImgOfCard />
            <TextOfCard />
        </div>
    );
}

export default Card;