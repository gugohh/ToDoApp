//FormTodo — Es el componente donde vamos a escribir una tarea, y vamos a poder agregarla.
import React, { useState } from "react";

const FormTodo = props => {
  const { handleAddItem } = props; 
  const [description, setDescription] = useState(""); //generamos el estado description para asignarlo al input

  //crear un manejador de evento ·onSubmit para el formulario form
  const handleSubmit = e => {
    e.preventDefault(); // para evitar que se refresque la página
    // (C-2)
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription(""); // limpiamos el estado description, con setDescription 
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)} 
          />
          {/*(A)*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"} //validamos el botón, sí description no tiene valor lo deshabilitamos, caso contrario lo habilitamos.
          >
            Add
          </button> 
        </div>
      </div>
    </form>
  ); //agregamos los elementos input y button.
};




export default FormTodo;
