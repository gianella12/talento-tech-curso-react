import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate,useNavigate } from "react-router-dom";

export const Login = () => {
    const [useForm, setUseForm] = useState({
        name: "",
        password: ""
    });
    const { user,login } = useAuthContext();
    const navigate = useNavigate();

    if (user) {
    return <Navigate to="/admin/alta-productos" replace />;
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        const sucsess = login(useForm.name, useForm.password);

        if(sucsess){
            navigate("/admin/alta-productos");
        }else{
            alert("Credenciales incorrectas");
            setUseForm({
                name: "",
                password: "",
            });
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUseForm({...useForm, [name]: value });
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesion</h2>

        <div>
            <label>Usuario:</label>
            <input
                type="text"
                name="name"
                value={useForm.name}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input
                type="password"
                name="password"
                value={useForm.password}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Ingresar</button>
      </form>
       )

}