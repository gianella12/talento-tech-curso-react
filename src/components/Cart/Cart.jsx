import { useCartContext } from '../../context/CartContext/useCartContext'
import { Item } from '../Item/Item'
import { Link } from 'react-router-dom'
import './Cart.css'


export const Cart = () => {
    const {cart, cleartCart, deleteItem, calcularTotal, checkout} = useCartContext()


    return  <section className='item-list-container'>
        <h2>Carrito de compras</h2>
        {cart.length ? (cart.map((prod) => <Item key={prod.id} {...prod}> 
            <span> Cantida:{prod.quantity}</span>
              <button onClick={() => deleteItem(prod.id)}>Eliminar</button>

        </Item>
        )):( 
            <h3>No hay productos en el carrito</h3>
            )}

        { cart.length ? ( <div className='btn-conteiner'>
            <div className='total-pagar'>
                <h3>Total a pagar: ${calcularTotal()}</h3>
            </div>
            <button className='btn' onClick={checkout}>
                Finalizar compra
            </button>
            <button className='btn' onClick={cleartCart}>
                Vaciar carrito
            </button>
        </div>
        ) : (
            <Link className='btn' to='/'>Ver productos</Link>
        )}

        </section>

}