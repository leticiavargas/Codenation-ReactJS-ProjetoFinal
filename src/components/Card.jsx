import React from 'react';
import './Card.css';

import imagem from '../assets/imagemTeste.jpg';

const Card = () => {

    return (
        <div className='cardBox'>
            <figure className='cardImage'>
                <sup className='badgePromotion'> - 12% </sup>
                <img src={imagem} alt='Teste'  />
            </figure>
            <div className='cardInfo'>
                <span className='cardInfoTitle'>Vestido</span>
                <div className='cardInfoPrice'>
                    <span className='productPricePromotional'>R$ 12,00</span>
                    <span className='productPrice'>R$ 12,00</span>
                </div>
                
            </div>
        </div>
    );
}

export default Card;