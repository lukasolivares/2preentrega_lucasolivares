import React from 'react'
import { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetail/ItemDetail.css'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        
        const querydb = getFirestore ();
        const queryDoc = doc(querydb, 'products', '13WiU4Q5qjRNHU1hIGdp');
        getDoc(queryDoc)
        .then(res => setItem(({id: res.id, ...res.data()})))
    }, [id])



    return (
    <div className='item-detail-container'>
        <ItemDetail item={item}/>
    </div>
    )
}

export default ItemDetailContainer