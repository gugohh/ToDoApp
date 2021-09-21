//Container — Es el componente que va a pasar FormTodo a TaskList

import React, { useState } from "react";

import TaskList from "../TaskList";
import FormTodo from "../FormTodo";

const Container = () => {
 // creamos el estado list, que nos va a servir para almacenar los datos.
  const [list, setList] = useState([]); 

  
  const handleAddItem = addItem => {
    setList([...list, addItem]); 
  };

  

  return (
    <div>
      {/*//agregarle el atributo handleAddItem y le vamos a pasar el método handleAddItem, donde vamos a actualizar el estado list.*/}
      <FormTodo handleAddItem={handleAddItem} />
      {/*Agregamos los atributos de list y setList en el componente TaskList, y le pasamos el estado*/}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;