import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import arrayProductos from '../../Json/arrayProductos.json'
import '../ItemDetail/ItemDetail.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProductos.find(item=> item.id === parseInt(id)))
                }, 2000)
            });
            promesa.then((data)=>{
                setItem(data)
            })
    }, [id])



    return (
    <div className='item-detail-container'>
        <ItemDetail item={item}/>
    </div>
    )
}

export default ItemDetailContainer