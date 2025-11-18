export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar producto</h2>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="">Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        required
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label htmlFor="">Categoría:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        required
                    />
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <div>
                    <label htmlFor="">Descripcion:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={onChange}
                        required
                        ></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
                    />
                    {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
                </div>
                <button className="btn" type="submit" disabled={loading} >
                    {loading ? "Cargando..." : "Guardar Producto"}
                </button>
            </form>

        </section>
    )
};