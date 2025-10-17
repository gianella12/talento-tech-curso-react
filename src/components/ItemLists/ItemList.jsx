import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({ lista }) => {
    return (
        <>
            {/* {lista.length ? (
                lista.map((prod) => (
                <Link to={`/detail/${prod.id}`} key={prod.id}>
                 <Item  key={prod.id} {...prod}/>
                </Link>
              
            ))
            ) : (
                <p>No hay productos</p>
            )
            } */}
            {lista.length ? (
                <div className="contenedor-productos">
                    {lista.map((prod) => (
                        <Link to={`/detail/${prod.id}`} key={prod.id}>
                            <Item {...prod} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No hay productos</p>
            )}
        </>
    )
}