import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({item}) => {
    return (
        <div className='item-list'>
        {
        item.map(item=>
        <div className='item-id'
        key={item.id}>
        <Item item={item}/> 
        </div>
        )   
        }
    </div>
    )
}

export default ItemList