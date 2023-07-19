import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item}) => {
    return (
        <div className='cardlist' id='itemlist'>
        {
        item.map(item=>
        
        <div className='asd123'
        key={item.id}>
        <Item item={item}/> 
        </div>
        )   
        }
    </div>
    )
}

export default ItemList