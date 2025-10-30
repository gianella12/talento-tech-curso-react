import { useCartContext } from "../../context/CartContext/useCartContext.js"
import { Item } from "../Item/Item.jsx"
import { Count } from "../Count/Count.jsx"

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext()
    
    const handleAdd= (quantity) => {
        addItem({...detail, quantity})
    }
    return (
    <Item {...detail}>
        <Count btnText={'Agregar al carrito'} onConfirm={handleAdd} />
    </Item>
    )
}