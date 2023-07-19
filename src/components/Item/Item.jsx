import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
    return (
        <Link to={"/item/" + Item.id} className='text_card'>
        <div className='item_card'>
            <div className='card_container'>
            <img src= {item.img} className='card_image' alt={item.title}/>
            <div className='card-body text-center'>
                <p className='card-text'>{item.title}</p>
            </div>
            </div>
        </div>
        </Link>
    )
}
export default Item