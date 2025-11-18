import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Footer } from './components/Footer/Footer.jsx'
import { Header } from './components/Header/Header.jsx'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner.jsx'
import { ItemDetailConteiner } from './components/ItemDetailContainer/ItemDetailConteiner.jsx'
import { CartProvider } from './context/CartContext/CartProvider.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import { ProductFormConteiner } from './components/adminComponents/ProductFormConteiner/ProductFormConteiner.jsx'

function App() {


  return (
    <>

      <BrowserRouter>
      <CartProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListConteiner title={"Bienvenidos"} />} />
            <Route path="/category/:category" element={<ItemListConteiner title={'Bienvenidos'}/>} />
            <Route path="/detail/:id" element={<ItemDetailConteiner />} />
            <Route path='/carrito' element={<Cart/>} />
            <Route path='/admin' element={<ProductFormConteiner/>} />

          </Routes>
          <Footer />
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )

}

export default App
