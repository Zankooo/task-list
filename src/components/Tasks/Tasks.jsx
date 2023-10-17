import {React, useEffect, useState} from 'react'
import "./Tasks.css"
import TaskItem from "../TaskItem/TaskItem"
import { v4 as uuidv4 } from 'uuid';


function Tasks() {

    //const = taskName = 0; to ni okej!
    const [stevec, setStevec] = useState(0); 

    //const tastName = "";
    const [taskName, setTaskName] = useState(""); // tko se dela inicialicira spremenljivke v reactu. Prva stvar je spremenljivka, druga je pa setter zanjo. V use state damo pa njeno zacetno vreednost
    //const dueDat = "";
    const [dueDate, setDueDate] = useState("");

    const [tasks, setTasks] = useState([]);


   
    function changeTaskName(e){
      setTaskName(e.target.value); //e.target.value je una vrednost iz okvircka k vanjo uporabnik pise
      
    }

    function changeDueDate(e){
      setDueDate(e.target.value) //vrednost html elementa na katerga kliknemo
    }

    function handleSubmit(e){
      e.preventDefault(); // da se ne refresha
      
      const task = {"id" : uuidv4(),"name":taskName, "dueDate":dueDate, "completed":false} // to je objekt
      // v javi se to nardi String name = taskName...
      let newTasks = [...tasks, task]; // to ustvari nov array taskov tako, da vanj da vse iz tasks plus task
      setTasks(newTasks);
      
    }

    function renderTask(task){
      return <div>{task.name}</div> // on tuki vrne kot html element tisto kar je od objekta task pod kljucek name
    }



    function toggleCompleteBanana(id){
      setTasks(currentTasks => {
        return currentTasks.map(function(task){
        return task.id === id ? {...task, completed: !task.completed} : task;
        
        })
      }) 
    }


    useEffect(function (){
      console.log(tasks)
    }, [tasks]);
      

    function deleteTask(id){
      setTasks(() => {
        return tasks.filter((task) => {
          return task.id != id;
        })
      })
    }
    
  return (
  <main className='main'>
    <form action="submit" className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='name'>Task name: </label>
            <input type = "text" name='name' className='input' placeholder='Branko king kong' onChange={changeTaskName}></input>
        </div>


        <div className='form-group'>
            <label htmlFor="dueDate">Due date: </label>
            <input type = "date" name='dueDate' className='input' onChange={changeDueDate}></input>
        </div>

        <button className='gumb' type='submit'>Dodaj</button>

    </form>

    <div className='task-list'>
      {tasks.map(function(task){ // map funkcija vrne NOV array, ki vsebuje elemente prvotnega arraya na katerih je izvedena callback funkcija
        return <TaskItem task = {task} toggleComplete={toggleCompleteBanana} deleteTask={deleteTask}></TaskItem>
      })}  
    </div>
    
  </main>
    
  )
}

export default Tasks








