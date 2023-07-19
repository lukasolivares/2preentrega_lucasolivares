import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from '../src/components/Error';
//Paginas React Router Dom//


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
                <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
