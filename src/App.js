import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from '../src/components/Error'
import '../src/components/Firebase/config'
import { Checkout } from './components/Checkout/Checkout'
import CartProvider from './context/CartContext'


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
                    <Route path={'/'} element={<ItemListContainer />} />
                    <Route path={'/category/:id'} element={<ItemListContainer />} />
                    <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
                    <Route path={'/checkout'} element={<Checkout />} />
                    <Route path={'*'} element={<Error />} />
          </Routes>
        </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App
