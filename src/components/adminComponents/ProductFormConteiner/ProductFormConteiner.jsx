import { useState } from "react";
import {fileToBase64} from "../../../utils/validateProducts";
import {ProductFormUI} from "../ProductFormUI/ProductFormUI";
import { uploadToImgbb } from "../../../services/uploadImg";
import { createProduct } from "../../../services/products";
import './ProductFormConteiner.css'

export const ProductFormConteiner = () => {
    const [loading, setLoading] = useState();
    const [errors, setErros] = useState("");
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErros({});
        setLoading(true);

        const newError = fileToBase64({ ...product, file })

        if (Object.keys(newError).length > 0) {
            setErros(newError);
            setLoading(false);
            return;
        };

        try {
            const imageUrl = await uploadToImgbb(file)
            const productData = {
                ...product,
                price: Number(product.price),
                imageUrl,
            };

            await createProduct(productData);
            alert("Producto creado con exito");
            setProduct({
                name: "",
                price: "",
                category: "",
                description: "",
            });
            setFile(null);
        } catch (error) {
            setErros({ general: error.message });
        } finally {
            setLoading(false);
        }
    }

    return <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={setFile}
        onSubmit={handleSubmit}
    />;
}