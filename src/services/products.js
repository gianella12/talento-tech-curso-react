const BASE_URL = "https://6913ad77f34a2ff1170cd90e.mockapi.io/products"

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { "Content-type" : "application/json"},
        body: JSON.stringify(product),
    })
   
    if (!res.ok) {
        throw new Error('No se pudo crear el producto');
    }

    const result = await res.json()

    return result;
}   
