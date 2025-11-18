import { useEffect, useState } from "react"
import { ItemList } from "../ItemLists/ItemList"
import { useParams } from "react-router-dom"

export const ItemListConteiner = ({ title }) => {
    const [products, setProducts] = useState([])
    const {category} = useParams()


    useEffect(() => {
        fetch("https://6913ad77f34a2ff1170cd90e.mockapi.io/products").then((res) => {
            if (!res.ok) {
                throw new Error("Hubo un problema al buscar productos.")
            }
            return res.json();
        }
        ).then((data) => {
            if(category){
                setProducts(data.filter( prod => prod.category === category))
            }else{
                 setProducts(data)
            }
        }).catch((err) => {
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