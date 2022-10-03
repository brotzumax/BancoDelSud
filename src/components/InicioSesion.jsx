import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function InicioSesion() {
    const { newUser } = useContext(CartContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function UsernameChage(e) {
        setUsername(e.target.value);
    }

    function EmailChange(e) {
        setEmail(e.target.value);
    }

    function PasswordChange(e) {
        setPassword(e.target.value);
    }

    function SaveNewUser() {
        if (username == "" || email == "" || password == "") {
            alert("Campos vacíos, intente nuevamente...");
        } else {
            newUser(username, email, password);
        }
    }

    return (
        <div className="InicioSesion">
            <div className="Container">
                <div className="FormularioInicioSesion">
                    <h2>Iniciar Sesion</h2>
                    <div>
                        <p>Nombre:</p>
                        <input type="text" name="txtNombre" id="txtNombre" onChange={UsernameChage} value={username} />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input type="text" name="txtEmail" id="txtEmail" onChange={EmailChange} value={email} />
                    </div>
                    <div>
                        <p>Contraseña:</p>
                        <input type="password" name="txtPassword" id="txtPassword" onChange={PasswordChange} value={password} />
                    </div>
                    <div>
                        <button onClick={SaveNewUser}>Iniciar sesion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InicioSesion;