import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { collection, getFirestore, addDoc } from 'firebase/firestore'

export const Checkout = () => {
    //ordern de compra:
    //buyer={nombre,email, telefono, direccion}
    //items = [{id:1, title}]
    //total=supa productos => precio*cantidad

    const [orderId, setOrderId] = useState()
    const [customer, setCustomer] = useState({
        nombreyapellido:'',
        Direccion:'',
        Telefono:'',
        Email:'',
        confEmail:'',
    })
    const {nombreyapellido, Direccion, Telefono, Email, confEmail} = customer
    const [item, setItem] = useState([])
    
    const handleInputChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const total = item.reduce( (acum,unItem)=>acum+(unItem.price*unItem.catidad),0)
        const dia = new Date()
        const data ={customer, item, total, dia} //ver item//
        generateOrder(data)
    }


    const generateOrder = async (data) =>{
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Orders')
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
        
        }


    return (
        <>
        <div>Formulario para finalizar tu compra!</div>
            <hr />
                {!orderId && <form className='form-checkout' onSubmit={handleSubmit}>
                    <input type='text' name='nombreyapellido' placeholder='Nombre y Apellido' value={nombreyapellido} onChange={handleInputChange} />
                    <input type='text' name='Direccion' placeholder='Direccion' value={Direccion} onChange={handleInputChange} />
                    <input type='text' name='Telefono' placeholder='Telefono' value={Telefono} onChange={handleInputChange} inputMode='numeric'/>
                    <input type='text' name='Email' placeholder='Email' value={Email} onChange={handleInputChange} />
                    <input type='text' name='confEmail' placeholder='Confirmar Email' value={confEmail} onChange={handleInputChange} />
                    <input type='submit' value='ConfirmarCompra' />
                </form>}
                {orderId && <>
                    <div>
                        <h1>Felicidades {nombreyapellido}! tu compra ha sido un extio</h1>
                        <h3>Tu ID de Compra es: {orderId}</h3>
                    </div>
                </>}
        </>
    )
}
