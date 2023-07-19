import React from 'react'

const ItemDetail = ({item}) => {
    return (
    <div>
        <div>
            <img src= {item.img} className='Img_card_detail' alt={item.title}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <p>Cantidad: {item.stock}</p>

        </div>
    </div>
    )
}

export default ItemDetail