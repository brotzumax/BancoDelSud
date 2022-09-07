import React from "react";
import { Component } from "react";

export default class MensajeBienvenida extends Component {
    render() {
        return (
            <div className="MensajeBienvenida">
                <p>
                    Bienvenido {this.props.usuario}
                </p>
                <p>
                    ¿No es usted?<button>Cerrar sesión</button>
                </p>
            </div>
        )
    }
}