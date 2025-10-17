export const Boton = ({texto,color}) => {
    const estilos ={
        backgraoundColor: color,
        color:'white',
    }
    return <button style={estilos}>{texto}</button>
}