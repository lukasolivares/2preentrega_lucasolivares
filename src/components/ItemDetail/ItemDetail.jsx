import { useContext, useState } from 'react'
import React from 'react'
import './ItemDetail.css'
import { getFirestore, getDoc, updateDoc } from 'firebase/firestore'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const funcionesContext = useContext(CartContext)

    // const [cantidad, setCantidad] = useState(0)

    // const handleOnAdd = (count) => {
    //     setCantidad(count)
    // }

    // const handleStock = () =>{
    //     const quarydb = getFirestore()
    //     const itemDoc = getDoc(quarydb, 'Items', item.id)
    //     const stockNuevo = item.stock + 3
    //     updateDoc(itemDoc,{stock:stockNuevo})
    // }





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
        <div>
            <ItemCount stockItems={10}/>
        </div>
    </div>
    )
}

export default ItemDetail