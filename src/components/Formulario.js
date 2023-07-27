import React from "react";
import '../stylesheets/Formulario.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Formulario(props){
    
    const [input, setInput]= useState('');

    const manejarCambio= e=>{
        setInput(e.target.value);
    };

    const manejarEnvio= e=>{
        e.preventDefault(); //evita cargar el formulario de nuevo ale enviarlo
        const tareaNueva={
            id: uuidv4(),
            texto: input,
            completada: false
        };
        props.onSubmit(tareaNueva);     //manda al componente ListaTareas, por el prop onSubmit, al metodo agregarTarea como parametro
    };

    return (
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}
        >
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button 
                className="tarea-boton"
            >
                Agregar Tarea
            </button>
        </form>
    );
}

export default Formulario;