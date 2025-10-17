import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist
    }

    const addItem = (item) => {
        if (exists(item.id)){
            alert('El producto ya esta en el carrito')

            return;
        }
        setCart([...cart, item])
        alert(`${item.name} agregado.`)

    }

     const cleartCart = () => {
        setCart([])
     }

     const getTotalItems = () => {
        if (cart.length){
            return cart.length;
        }
     }

    return <CartContext.Provider  value={{ cart, addItem, cleartCart,getTotalItems }}>{children}</CartContext.Provider>
}