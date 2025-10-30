import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            const updateCard = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity }
                } else {
                    return prod
                }
            })
            setCart(updateCard)
            alert(`Agregado al carrito.`)
        } else {
            setCart([...cart, item])
            alert(`${item.name} agregado.`)
        }
     }
     const deleteItem = (id) => {
        const filteredCart = cart.filter((prod) => prod.id !== id)
        setCart(filteredCart)
        alert("Producto eliminado del carrito.")
    }

    const cleartCart = () => {
        setCart([])
    }

    const getTotalItems = () => {
        const getTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
        return getTotalItems
    }
    const calcularTotal = () => {
        const total =  cart.reduce((acc,p) =>acc + p.price * p.quantity, 0 )

        return Math.round( total * 100 ) / 100
    }

    const value = { cart, addItem, cleartCart, getTotalItems, deleteItem,calcularTotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}