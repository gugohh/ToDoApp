//Es el componente que va a tener una lista de tareas por hacer o hechas, donde va a poder eliminar todas las tareas que ya estén hechas.
import React, { Component } from "react";

import Checkbox from "../Checkbox";

const TaskList = props => {
  // Vamos a recibir de props la propiedad list y el método setList , la idea es recorrer list con map, para generar “n” componentes de Checkbox
  const { list, setList } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    // (E)
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  // (D)
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  // (A-2)
  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {/*Si la list viene vacía, mostramos el mensaje No task y ocultamos el botón, caso contrario, mostramos la lista y el botón.*/}
      {list.length ? chk : "No tasks"}
      {/*(B)*/}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};


export default TaskList;
