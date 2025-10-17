import { useEffect, useState } from "react"
import { ItemList } from "../ItemLists/ItemList"

export const ItemListConteiner = ({ title }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/data/products.json").then((res) => {
            if (!res.ok) {
                throw new Error("Hubo un problema al buscar productos.")
            }
            return res.json();
        }
        ).then((data) => {
            setProducts(data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    return (
        <section>
            <h1>{title}</h1>

            <ItemList lista={products} />
        </section>
    )
}