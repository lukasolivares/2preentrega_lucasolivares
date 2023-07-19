import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../../Json/arrayProductos.json'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams ();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
            const data = await new Promise((resolve)=>{
            setTimeout(()=>{
            resolve(id ? arrayProductos.filter(item=> item.category === id) : arrayProductos)
            }, 2000);
            });
            setItem(data);
            }catch(error){
            console.log('Error:', error);
            }
        };
        fetchData();
    }, [id])

return (
    <div className='item_list'>
        <ItemList item={item}/>
    </div>
    )
}



export default ItemListContainer
