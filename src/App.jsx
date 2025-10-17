import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Footer } from './components/Footer/Footer.jsx'
import { Header } from './components/Header/Header.jsx'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner.jsx'
import { ItemDetailConteiner } from './components/ItemDetailContainer/ItemDetailConteiner.jsx'
import { CartProvider } from './context/CartContext/CartProvider.jsx'

function App() {


  return (
    <>

      <BrowserRouter>
      <CartProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListConteiner title={"Bienvenidos"} />} />
            <Route path="/detail/:id" element={<ItemDetailConteiner />} />

          </Routes>
          <Footer />
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )

}

export default App
