import { useEffect, useState } from 'react';
import './App.css'
import ListTodoList from './Components/ListTodoList';

function App() {  

  const [todoList, setTodoList]  = useState([]);
  const [count, setCount] = useState(0);


  useEffect(()=>{
      if(count === 10) // para pintar el log solo cuando tiene 10 tareas
        console.log("llego a los 10 tareas");
  }, [count])



  function handleSubmitAddTodoList(event)
  {
    event.preventDefault();    
    const data = event.target.elements.tarea.value;//new FormData(event.target).get('tarea');
    if(data === '')
      return;

    const _todoList = [...todoList];
    _todoList.push(data)

    event.target.elements.tarea.value = ''; //Limpiar imput

    setTodoList(_todoList);
    setCount(count + 1);  //Para ver cuantas tareas tiene  
   
  }
  

  return (
    <>
      <div className='container'>        
        <h1>Todo List</h1>
        <form onSubmit={handleSubmitAddTodoList} className="form">
          <input name="tarea" type='text' placeholder='prueba react'/>
          <button>Agregar</button>
        </form>

        <ListTodoList todoList={todoList}/>        

      </div>
    </>
  )
}

export default App
