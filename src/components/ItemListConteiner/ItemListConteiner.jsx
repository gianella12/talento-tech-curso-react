import { useEffect, useState } from "react"
import { ItemList } from "../ItemLists/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/products"

export const ItemListConteiner = ({ title }) => {
    const [products, setProducts] = useState([])
    const {category} = useParams()


    useEffect(() => {
       getProducts(category)
        .then((data) => {
            setProducts(data)
        })
        .catch((err) => {
            console.log(err)
        });
    }, [category])

    return (
        <section>
            <h1>{title}</h1>

            <ItemList lista={products} />
        </section>
    )
}