import React from 'react'
import {Link} from 'react-router-dom'
import '../ItemList/ItemList.css'

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className='product-card'>
        <div>
            <div>
            <img src= {item.img} className='product-img' alt={item.title}/>
            </div>
            <div className='card-info'>
                <p className='product-title'>{item.title}</p>
                <p ClassName='product-price'><b>Precio:</b> ${item.price}</p>

            </div>
        </div>
        </Link>
    )
}
export default Item