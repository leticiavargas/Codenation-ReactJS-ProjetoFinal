import React from 'react';
import Card from './Card';

const Cards = ({products}) => {

    return(
        <div className='AppContainer productContainer'>
            <div className='productTitle'>22 itens</div>
            <div className='productGrid'>
                {products.map((product)=> (
                    <Card key={product.id} info={product} />
                ))}
            </div>
        </div>
        
    );
}

export default Cards;
	