import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return (
    <div>
        <div className='item-image'>
            <img src={item.img} className='Img_card_detail' alt={item.title}/>
        </div>
        <div className='item-info'>
            <h2 className='item-title'>{item.title}</h2>
            <p className='item-description'>{item.description}</p>
            <p className='item-price'>$ {item.price}</p>
            <p className='item-stock'>Cantidad: {item.stock}</p>

        </div>
    </div>
    )
}

export default ItemDetail