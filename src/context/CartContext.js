import { createContext, useState } from "react"




export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (products,cant) => {
        // if(cart.some(unItem => unItem.id == product.id)){}
        setCart([...cart, {...products,cant}])
    }


    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider