import React from 'react'
import "./Form.css"

function Form() {
  return (
    <form className='form'>
        <div className='form-group'>
            <label htmlFor='name'>Task name: </label>
            <input type = "text" name='name' placeholder='Branko king kong' className='input'></input>
        </div>


        <div className='form-group'>
            <label htmlFor="dueDate">Due date: </label>
            <input type = "date" name='dueDate' className='input'></input>
        </div>

        <button className='gumb'>Dodaj</button>

    </form>
  )
}

export default Form