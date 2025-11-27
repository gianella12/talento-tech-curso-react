import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Footer } from './components/Footer/Footer.jsx'
import { MainLayout } from './Layouts/MainLayout.jsx'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner.jsx'
import { ItemDetailConteiner } from './components/ItemDetailContainer/ItemDetailConteiner.jsx'
import { CartProvider } from './context/CartContext/CartProvider.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import { ProductFormConteiner } from './components/adminComponents/ProductFormConteiner/ProductFormConteiner.jsx'
import { AdminLayout } from './Layouts/AdminLayout.jsx'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida.jsx'
import { Login } from './components/Login/Login.jsx'

function App() {


  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route path="/" element={<ItemListConteiner title={"Bienvenidos"} />} />
              <Route path="/category/:category" element={<ItemListConteiner title={'Bienvenidos'} />} />
              <Route path="/detail/:id" element={<ItemDetailConteiner />} />
              <Route path='/carrito' element={<Cart />} />
            </Route>

            <Route path='/admin' element={<AdminLayout />} >
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormConteiner />
                  </RutaProtegida>
                }
              />

            </Route>
            {/* <Route path='/admin' element={<ProductFormConteiner/>} /> */}

          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )

}

export default App
